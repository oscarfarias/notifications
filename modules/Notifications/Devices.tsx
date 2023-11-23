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
import { DevicesProps } from './types'
import { useDevices } from './hooks/useDevices'

const Devices = ({ devicesIds }: DevicesProps): JSX.Element => {
  const { theme, toggleSelectDevice, selectedDevicesIds } = useDevices()
  const { primaryDark } = theme.palette.custom

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
        Devices
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
