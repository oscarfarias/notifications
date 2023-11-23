import { NotificationProps } from './types'
import { useTheme } from '@mui/material/styles'
import { Grid, Typography } from '@mui/material'

const NotificationComponent = ({
  title,
  message,
}: NotificationProps): JSX.Element => {
  const {
    palette: {
      custom: { primaryDark },
    },
  } = useTheme()
  return (
    <Grid container sx={{ flexDirection: `column` }}>
      <Typography fontWeight="bold" sx={{ color: primaryDark }}>
        {title}
      </Typography>
      <Typography sx={{ color: primaryDark }}>{message}</Typography>
    </Grid>
  )
}

export default NotificationComponent
