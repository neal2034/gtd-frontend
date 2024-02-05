import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from './header'

const MainLayout: React.FC = () => {
  return (
    <Box
      sx={{

        minHeight: { lg: 1 },
        display: 'flex',
        flexDirection: 'column',
        width: '100wh'
      }}
    >

      <Header />
      <Outlet />
    </Box >
  )
}

export default MainLayout
