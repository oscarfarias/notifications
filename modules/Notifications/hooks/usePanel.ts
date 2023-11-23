import { useNotificationStore } from '../store'
import { socketEvents } from 'common/config/constants'
import { enqueueSnackbar } from 'notistack'
export const usePanel = () => {
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
        `Ocurrió un error al enviar la notificación, socket no conectado.`,
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

  return {
    sendNotification,
    onChangeTitle,
    onChangeMessage,
    title,
    message,
  }
}
