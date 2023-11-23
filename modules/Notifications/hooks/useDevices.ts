import { useNotificationStore } from '../store'
import { useTheme } from '@mui/material/styles'
export const useDevices = () => {
  const theme = useTheme()
  const { selectedDevicesIds, setSelectedDevicesIds } = useNotificationStore(
    (state) => state,
  )

  const toggleSelectDevice = (deviceId: string): void => {
    if (selectedDevicesIds.includes(deviceId)) {
      setSelectedDevicesIds(selectedDevicesIds.filter((id) => id !== deviceId))
    } else {
      setSelectedDevicesIds([...selectedDevicesIds, deviceId])
    }
  }
  return {
    toggleSelectDevice,
    selectedDevicesIds,
    theme,
  }
}
