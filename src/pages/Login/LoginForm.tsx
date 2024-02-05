import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoadingButton } from '@mui/lab'
import { Alert, IconButton, InputAdornment, Stack } from '@mui/material'
import { useState } from 'react'
import useIsMountedRef from '@hooks/useIsMountedRef'
import FormProvider from '@components/hooks-form/FormProvider'
import RHFTextField from '@components/hooks-form/RHFTextField'

import useAuth from '@hooks/useAuth'
import Iconify from '@components/Iconify'

type LoginFormProps = {
  username: string
  password: string
  remember?: boolean
  afterSubmit?: string
}


const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const isMountRef = useIsMountedRef()
  const { login } = useAuth()
  const LoginSchema = Yup.object().shape({
    username: Yup.string().email('请输入有效的邮箱地址').required('请输入用户名'),
    password: Yup.string().required('请输入密码'),
    remember: Yup.bool(),
    afterSubmit: Yup.string(),
  })

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {},
  })
  const {
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = methods

  const onSubmit = async (data: LoginFormProps) => {
    const code = await login(data.username, data.password)
    if (code !== 0 && isMountRef.current) {
      reset()
      setError('afterSubmit', { message: '登录失败,用户名或密码错误' })
    }
  }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} sx={{ mb: 4 }}>
        {!!errors.afterSubmit && <Alert severity='error'>{errors.afterSubmit.message}</Alert>}
        <RHFTextField size='small' name='username' label='用户名' />
        <RHFTextField
          name='password'
          label='密码'
          size='small'
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={() => setShowPassword(!showPassword)} edge='end'>
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <LoadingButton fullWidth size='medium' type='submit' variant='contained' loading={isSubmitting}>
        登 录
      </LoadingButton>
    </FormProvider>
  )
}

export default LoginForm
