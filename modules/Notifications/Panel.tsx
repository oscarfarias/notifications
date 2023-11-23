import { Paper, Typography, TextField, Grid, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useNotificationStore } from './store'
import { socketEvents } from 'common/config/constants'
import { enqueueSnackbar } from 'notistack'
const Panel = (): JSX.Element => {
  const {
    palette: {
      custom: { primaryDark },
    },
  } = useTheme()

  const { socket, selectedDevicesIds, title, message, setTitle, setMessage } =
    useNotificationStore((state) => state)

  const sendNotification = (): void => {
    if (socket) {
      socket.emit(socketEvents.onSendNotification, {
        devicesIds: selectedDevicesIds,
        notification: {
          title,
          message,
        },
      })
    } else {
      enqueueSnackbar(
        `Ocurrió un error al enviar la notificación, socket no conectado`,
        {
          variant: `error`,
        },
      )
    }
  }
  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value)
  }
  const onChangeMessage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setMessage(event.target.value)
  }

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
        Enviar una notificación
      </Typography>
      <Grid container gap={1} p={2} sx={{ flexDirection: `column` }}>
        <TextField
          placeholder="Título"
          value={title}
          onChange={onChangeTitle}
        />
        <TextField
          placeholder="Descripción"
          value={message}
          onChange={onChangeMessage}
        />
        <Button onClick={sendNotification}>Enviar</Button>
      </Grid>
    </Paper>
  )
}

export default Panel
