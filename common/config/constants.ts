export const TOKEN_KEY = `userToken`
export const USER_KEY = `user`
export const drawerWidth = 250
export const socketEvents = {
  onConnection: `connection`,
  onConnect: `connect`,
  onEstablishConnection: `establish-connection`,
  onEstablishedConnection: `established-connection`,
  onEstablishMasterConnection: `establish-master-connection`,
  onFetchDevices: `fetch-devices`,
  onSendNotification: `send-notification`,
  onNotificationReceived: `notification-received`,
  onDisconnect: `disconnect`,
  onDisconnecting: `disconnecting`,
}

export const socketClientURL =
  process.env.SOCKET_CLIENT || `http://localhost:3000`

export const socketPath = process.env.SOCKET_CLIENT_PATH || `/api/socketio`
