import { Paper, Typography, TextField, Grid, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { usePanel } from './hooks/usePanel'
const Panel = (): JSX.Element => {
  const {
    palette: {
      custom: { primaryDark },
    },
  } = useTheme()

  const { sendNotification, onChangeTitle, onChangeMessage, title, message } =
    usePanel()

  return (
    <Paper
      elevation={3}
      sx={{
        width: `40%`,
        height: `258px`,
        display: `flex`,
        borderRadius: `12px`,
        padding: 2,
        flexDirection: `column`,
      }}
    >
      <Typography fontWeight="bold" sx={{ color: primaryDark }}>
        Send notification
      </Typography>
      <Grid container gap={1} p={2} sx={{ flexDirection: `column` }}>
        <TextField placeholder="Title" value={title} onChange={onChangeTitle} />
        <TextField
          placeholder="Message"
          value={message}
          onChange={onChangeMessage}
        />
        <Button onClick={sendNotification}>Send</Button>
      </Grid>
    </Paper>
  )
}

export default Panel
