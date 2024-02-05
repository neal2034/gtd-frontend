import { Box, Stack, Toolbar } from '@mui/material'
import { styled } from '@mui/material/styles'
import cssStyles from '@utils/cssStyles'
import AccountPopover from './AccountPopover'



const RootStyle = styled(Box)(({ theme }) => ({
  ...cssStyles(theme).bgBlur(),
  boxShadow: 'none',
  height: 50,
  zIndex: theme.zIndex.appBar + 1,

}))



export default function Header() {
  return (
    <RootStyle >
      <Toolbar
        sx={{
          minHeight: '100% !important',
          px: { lg: 5 },
        }}
      >
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction={'row'} alignItems={'center'} spacing={{ xs: 0.5, sm: 1.5 }}>
          <AccountPopover />
        </Stack>
      </Toolbar>
    </RootStyle>
  )
}
