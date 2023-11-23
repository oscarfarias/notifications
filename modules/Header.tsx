import { AppBar, Grid, TextField, Toolbar, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Icon } from 'common/components'
import { drawerWidth } from 'common/config/constants'
const Header = (): JSX.Element => {
  const {
    palette: {
      custom: { lightDark, lightWhite, primaryDark },
    },
  } = useTheme()

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth + 8}px)`,
        backgroundColor: lightWhite,
        mt: `8px`,
      }}
      elevation={0}
    >
      <Toolbar>
        <Grid
          container
          sx={{ flexDirection: `row`, justifyContent: `space-between` }}
        >
          <Grid item sx={{ flexDirection: `column` }} md={5}>
            <Grid container sx={{ display: `flex`, flexDirection: `row` }}>
              <Icon icon="home" sx={{ color: lightDark }} />
              <Typography
                fontSize="14px"
                sx={{
                  color: lightDark,
                }}
              >
                / Pages /
              </Typography>
              <Typography
                fontSize="14px"
                sx={{
                  color: primaryDark,
                  marginLeft: `3px`,
                }}
              >
                Notifications
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                fontWeight="500"
                fontSize="16px"
                sx={{
                  color: primaryDark,
                }}
              >
                Notifications
              </Typography>
            </Grid>
          </Grid>
          <Grid item sx={{ display: `flex`, flexDirection: `row` }} xs={3}>
            <TextField
              sx={{
                width: `173px`,
                '& .MuiOutlinedInput-root': {
                  backgroundColor: lightWhite,
                },
              }}
              placeholder="Search here"
            />
            <Grid
              item
              sx={{
                justifyContent: `space-between`,
                display: `flex`,
                marginTop: `8px`,
                marginLeft: `15px`,
              }}
              md={5}
            >
              <Icon icon="accountCircle" sx={{ color: lightDark }} />
              <Icon icon="settings" sx={{ color: lightDark }} />
              <Icon icon="notifications" sx={{ color: lightDark }} />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
export default Header
