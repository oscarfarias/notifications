import { NotificationProps } from './types'
import { Grid, Typography } from '@mui/material'
import palette from 'common/theme/palette'

const NotificationComponent = ({
  title,
  message,
}: NotificationProps): JSX.Element => {
  const { primaryDark } = palette.light.custom
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
