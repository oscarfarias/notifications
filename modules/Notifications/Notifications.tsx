import { ReactElement, useEffect } from 'react'
import Layout from '../Layout'
import { Grid, Typography } from '@mui/material'
import Panel from './Panel'
import Devices from './Devices'
import SocketIOClient from 'socket.io-client'
import {
  socketClientURL,
  socketEvents,
  socketPath,
} from 'common/config/constants'
import { useNotificationStore } from './store'
import { enqueueSnackbar } from 'notistack'
import { useTheme } from '@mui/material/styles'

const Notifications = (): JSX.Element => {
  const {
    palette: {
      custom: { primaryDark },
    },
  } = useTheme()

  const { setSocketId, devicesIds, setDevicesIds, setSocket } =
    useNotificationStore((state) => state)

  useEffect(() => {
    const socket = SocketIOClient(socketClientURL as string, {
      path: socketPath,
    })

    socket.on(socketEvents.onConnect, () => {
      const socketId = socket.id
      socket.emit(socketEvents.onFetchDevices)
      setSocketId(socketId)
      setSocket(socket)
    })
    socket.on(
      socketEvents.onFetchDevices,
      ({ devicesIds }: { devicesIds: string[] }) => {
        setDevicesIds(devicesIds)
      },
    )
    socket.on(
      socketEvents.onNotificationReceived,
      ({ title, message }: { title: string; message: string }) => {
        enqueueSnackbar(
          <Grid container sx={{ flexDirection: `column` }}>
            <Typography fontWeight="bold" sx={{ color: primaryDark }}>
              {title}
            </Typography>
            <Typography sx={{ color: primaryDark }}>{message}</Typography>
          </Grid>,
          {
            variant: `success`,
          },
        )
      },
    )
    socket.on(socketEvents.onDisconnect, () => {
      socket.disconnect()
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <Grid container direction="column">
      <Grid container direction="row" justifyContent="space-between">
        <Panel />
        <Devices devicesIds={devicesIds} />
      </Grid>
    </Grid>
  )
}
Notifications.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Notifications
