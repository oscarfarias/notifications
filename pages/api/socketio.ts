/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest } from 'next'
import { NextApiResponseServerIO } from 'types/next'
import { Server as ServerIO } from 'socket.io'
import { Server as NetServer } from 'http'
import { socketEvents } from 'common/config/constants'

interface NotificationEvent {
  devicesIds: string[]
  notification: {
    title: string
    message: string
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (!res.socket.server.io) {
    const httpServer: NetServer = res.socket.server as any
    const io = new ServerIO(httpServer, {
      path: `/api/socketio`,
      cors: {
        origin: `*`,
        methods: [`GET`, `POST`],
      },
      addTrailingSlash: false,
    })
    res.socket.server.io = io
    io.on(socketEvents.onConnection, (socket): void => {
      socket.on(socketEvents.onFetchDevices, async (): Promise<void> => {
        const clients = await io.fetchSockets()
        const devicesIds = clients.map((client) => client.id)
        devicesIds.forEach((deviceId) => {
          io.to(deviceId).emit(socketEvents.onFetchDevices, {
            devicesIds,
          })
        })
      })
      socket.on(
        socketEvents.onSendNotification,
        ({
          devicesIds,
          notification: { title, message },
        }: NotificationEvent) => {
          devicesIds.forEach((deviceId) => {
            io.to(deviceId).emit(socketEvents.onNotificationReceived, {
              title,
              message,
            })
          })
        },
      )
      socket.on(socketEvents.onDisconnect, async () => {
        const clients = await io.fetchSockets()
        const devicesIds = clients.map((client) => client.id)
        devicesIds.forEach((deviceId) => {
          io.to(deviceId).emit(socketEvents.onFetchDevices, {
            devicesIds,
          })
        })
      })
    })
  }

  res.end()
}
