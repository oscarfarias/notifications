import { create } from 'zustand'
import { NotificationStore } from './types'

export const useNotificationStore = create<NotificationStore>((set) => ({
  socket: null,
  devicesIds: [],
  selectedDevicesIds: [],
  currentSocketId: null,
  title: ``,
  message: ``,
  setDevicesIds: (devicesIds) => set({ devicesIds }),
  setSelectedDevicesIds: (selectedDevicesIds) => set({ selectedDevicesIds }),
  setSocketId: (currentSocketId) => set({ currentSocketId }),
  setSocket: (socket) => set({ socket }),
  setTitle: (title) => set({ title }),
  setMessage: (message) => set({ message }),
}))
