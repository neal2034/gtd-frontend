import { errors } from '@constants/index'
import { yupResolver } from '@hookform/resolvers/yup'
import useDispatch from '@hooks/useDispatch'
import { LoadingButton } from '@mui/lab'
import Grid from '@mui/system/Unstable_Grid/Grid'
import FormProvider from '@components/hooks-form/FormProvider'
import RHFPassword from '@components/hooks-form/RHFPassword'
import RHFTextField from '@components/hooks-form/RHFTextField'
import { register, } from '@src/store/auth/authActions'
import { APIResponse } from '@src/typing/api'
import { useSnackbar } from 'notistack'
import md5 from 'md5'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import './register.scss'

type RegisterFormProps = {
  username: string
  password: string
  confirmPwd: string

}
interface IRegisterFormProps {
  onSuccess: VoidFunction
}
export function RegisterForm(props: IRegisterFormProps) {
  const { onSuccess } = props
  const { enqueueSnackbar } = useSnackbar()

  const registerSchema = Yup.object().shape({
    username: Yup.string().email('请输入有效的邮箱地址').required('请输入用户名'),
    password: Yup.string().required('请输入密码').min(6, '密码最少6位'),
    confirmPwd: Yup.string().required('请再次输入密码').min(6, '密码最少6个字符'),
  })

  const methods = useForm({
    resolver: yupResolver(registerSchema),
  })
  const dispatch = useDispatch()

  const { handleSubmit, setError } = methods



  const onFormSubmit = async (form: RegisterFormProps) => {
    const { username, password, confirmPwd } = form
    if (password !== confirmPwd) {
      setError('confirmPwd', { message: '两次输入密码不一致' })
      return
    }

    const md5Pwd = md5(password)

    const result = await dispatch(register({ username, password: md5Pwd }))
    const errorCode = (result.payload as APIResponse).status

    if (errorCode === errors.USER_ALREADY_EXIST) {
      enqueueSnackbar('注册失败: 用户已存在!', { variant: 'error' })
    }

    if (errorCode === errors.SUCCESS) {
      enqueueSnackbar('注册成功!')
      onSuccess()
    }

  }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onFormSubmit)}>
      <Grid container spacing={3} alignItems={'center'}>
        <Grid xs={12}>
          <RHFTextField size='small' name='username' label='注册邮箱' />
        </Grid>

        <Grid xs={12}>
          <RHFPassword size='small' name='password' label='密码' />
        </Grid>

        <Grid xs={12}>
          <RHFPassword size='small' name='confirmPwd' label='确认密码' />
        </Grid>


        <Grid xs={12}>
          <LoadingButton type='submit' variant='contained' fullWidth size='medium' loading={false}>
            注册
          </LoadingButton>
        </Grid>
      </Grid>
    </FormProvider>
  )
}
