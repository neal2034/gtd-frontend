import Logo from '@components/Logo'
import { Container, Stack, Typography, styled, Box, Link } from '@mui/material'
import React, { useState } from 'react'
import LoginForm from './LoginForm'
import './login.scss'
import { RegisterForm } from './RegisterForm'

import Page from '@components/Page'

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}))

type FormState = 'login' | 'register' | 'password'
const Login: React.FC = () => {
  const [formState, setFormState] = useState<FormState>('login')

  const goRegister = () => {
    setFormState('register')
  }
  return (
    <Page title='登录'>
      <Stack>
        <Box className='header' m={2}>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Logo />
            <Typography variant='h4' ml={1} gutterBottom>
              ToDo
            </Typography>
          </Box>
          {formState === 'login' && (
            <Box className='register'>
              <Typography variant='body2' mr={1}>
                没有账号?{' '}
              </Typography>
              <Link component='button' onClick={goRegister} underline='none' variant='body2'>
                免费注册
              </Link>
            </Box>
          )}
        </Box>
        <Container maxWidth={'xl'}>
          <ContentStyle>
            <Stack direction='row' alignItems='center' sx={{ mb: 5 }}>
              <Box sx={{ flexGrow: 1, display: 'flex' }} alignItems={'center'} justifyContent={'space-between'}>
                <Typography variant='h4' gutterBottom>
                  {formState === 'register' ? '注册' : formState === 'password' ? '找回密码' : '登录'}
                </Typography>
                {formState !== 'login' && (
                  <Link variant='subtitle2' onClick={() => setFormState('login')} component={'button'} underline='none'>
                    返回登录
                  </Link>
                )}
              </Box>
            </Stack>
            {formState === 'login' && <LoginForm />}
            {formState === 'register' && <RegisterForm onSuccess={() => setFormState('login')} />}
          </ContentStyle>
        </Container>
      </Stack>
    </Page>
  )
}

export default Login
