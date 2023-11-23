import {
  Paper,
  Typography,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Grid,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { DevicesProps } from './types'
import { useNotificationStore } from './store'

const Devices = ({ devicesIds }: DevicesProps): JSX.Element => {
  const {
    palette: {
      custom: { primaryDark },
    },
  } = useTheme()

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

  return (
    <Paper
      elevation={3}
      sx={{
        width: `55%`,
        height: `258px`,
        display: `flex`,
        borderRadius: `12px`,
        padding: 2,
        flexDirection: `column`,
      }}
    >
      <Typography fontWeight="bold" sx={{ color: primaryDark }}>
        Dispositivos conectados
      </Typography>
      <Grid container sx={{ overflowY: `auto` }}>
        <List
          sx={{
            width: `100%`,
            maxWidth: 360,
            bgcolor: `background.paper`,
          }}
        >
          {devicesIds.map((value) => {
            return (
              <ListItem key={value} disablePadding>
                <ListItemButton
                  sx={{
                    '&:hover': {
                      background: `transparent`,
                    },
                  }}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      checked={selectedDevicesIds.includes(value)}
                      edge="start"
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': value }}
                      onClick={() => toggleSelectDevice(value)}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={value}
                    sx={{
                      color: primaryDark,
                    }}
                    primary={value}
                  />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Grid>
    </Paper>
  )
}

export default Devices
