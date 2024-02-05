import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import AppConfig from '@config/appConfig'
import qs from 'qs'
import merge from 'lodash/merge'
import omit from 'lodash/omit'
import cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'



const defaultAxiosConfig: AxiosRequestConfig = {
  baseURL: AppConfig.baseApiURL,
  timeout: AppConfig.defaultTimeout,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paramsSerializer: function (params: any) {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  },
}

export type GetTokenFunc = () => string
export type ResponseHandler<T> = (res: T) => T
export type ResponseErrorHandler<U> = (error: U) => void
export interface RequestUtils<T, U> {
  getToken: GetTokenFunc
  responseHandler?: ResponseHandler<T>
  errorHandler?: ResponseErrorHandler<U>
}

const methods = ['post', 'put', 'delete', 'get'] as const
type Method = (typeof methods)[number]

function getRequestInstance(utils: RequestUtils<any, any>, config?: AxiosRequestConfig): AxiosInstance {
  const requestConfig = merge({}, defaultAxiosConfig, config ? config : {})

  const axiosInstance = axios.create(requestConfig)
  const instance = omit(axiosInstance, methods) as unknown as AxiosInstance
  methods.forEach((method) => {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    instance[method as Method] = async (url: string, data?: any, config?: AxiosRequestConfig) => {
      const requestData = cloneDeep(data)

      // https://stackoverflow.com/questions/51069552/axios-delete-request-with-body-and-headers
      if (['delete', 'get'].includes(method) && !isEmpty(requestConfig.headers)) {
        Object.assign(requestData, {
          headers: requestConfig.headers,
        })
      }
      const response = await axiosInstance[method](url, requestData, merge({}, config))
      return response
    }
  })

  // 配置请求拦截
  instance.interceptors.request.use(
    (config) => {
      // todo should refresh token here
      if (config.headers) {
        config.headers.Authorization = 'Bearer ' + utils.getToken()
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  // 配置响应拦截
  instance.interceptors.response.use(
    (res) => {
      if (utils.responseHandler) {
        return utils.responseHandler(res)
      }
      return res
    },
    (error) => {
      //TODO should add more error handler here
      return Promise.reject(error)
    },
  )

  return instance
}

export default getRequestInstance
