'use client'
import { useEffect } from 'react'

import SocketIOClient from 'socket.io-client'
import {
  socketClientURL,
  socketEvents,
  socketPath,
} from 'common/config/constants'
import { useNotificationStore } from '../store'
import { enqueueSnackbar } from 'notistack'
import { NotificationProps } from '../types'
import NotificationComponent from '../NotificationComponent'

export const useNotification = () => {
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
      ({ title, message }: NotificationProps) => {
        enqueueSnackbar(NotificationComponent({ title, message }), {
          variant: `success`,
        })
      },
    )
    socket.on(socketEvents.onDisconnect, () => {
      socket.disconnect()
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return {
    devicesIds,
  }
}
