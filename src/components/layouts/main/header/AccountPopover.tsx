import { useSnackbar } from 'notistack'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// @mui
import { alpha } from '@mui/material/styles'
import { MenuItem } from '@mui/material'
import useAuth from '@hooks/useAuth'
import { IconButtonAnimate } from '@src/components/animate'
import MyAvatar from '@src/components/MyAvatar'
import MenuPopover from '@src/components/MenuPopover'
import useIsMountedRef from '@src/hooks/useIsMountedRef'
import { PATH_AUTH } from '@routes/path'



export default function AccountPopover() {
  const navigate = useNavigate()

  const { logout } = useAuth()
  const isMountedRef = useIsMountedRef()

  const { enqueueSnackbar } = useSnackbar()

  const [open, setOpen] = useState<HTMLElement | null>(null)

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget)
  }

  const handleClose = () => {
    setOpen(null)
  }

  const handleLogout = async () => {
    try {
      await logout()
      navigate(PATH_AUTH.login, { replace: true })

      if (isMountedRef.current) {
        handleClose()
      }
    } catch (error) {
      enqueueSnackbar('Unable to logout!', { variant: 'error' })
    }
  }



  return (
    <>
      <IconButtonAnimate
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <MyAvatar />
      </IconButtonAnimate>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          注销
        </MenuItem>
      </MenuPopover>
    </>
  )
}
