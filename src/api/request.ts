import getRequestInstance from '@utils/axios'
import { getToken as getAccessToken } from '@utils/jwt'
import { APIResponse } from '@src/typing/api'

const getToken = () => {
  const token = getAccessToken()
  return token || ''
}

const responseHandler = (response: { data: APIResponse }): APIResponse => {
  return response.data
}

const request = getRequestInstance({ getToken, responseHandler })

export { request }
