import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { drawerWidth } from 'common/config/constants'
import { Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Icon } from 'common/components'
import { MenuProps } from './types'
import { LOGO } from 'common/assets'
import Image from 'next/image'
const menu: MenuProps[] = [
  {
    name: `Notifications`,
    icon: `noteAlt`,
    selected: true,
  },
]

const Sidebar = (): JSX.Element => {
  const theme = useTheme()

  return (
    <Grid
      sx={{
        width: drawerWidth,
        background: theme.gradients[1],
        borderRadius: `12px`,
      }}
      p={1}
    >
      <Grid ml={1} mr={1}>
        <Grid item p={1} mt={1} sx={{ display: `flex`, flexDirection: `row` }}>
          <Image src={LOGO} alt="logo" />
        </Grid>
        <Divider sx={{ backgroundColor: `white`, marginTop: 1 }} />

        <List sx={{ width: `100%` }}>
          {menu.map(({ name, icon, selected }) => (
            <ListItem key={name} disablePadding>
              <ListItemButton sx={{ marginBottom: `4px` }} selected={selected}>
                <ListItemIcon>
                  {icon ? (
                    <Icon
                      sx={{
                        color: theme.palette.custom.lightWhite,
                      }}
                      icon={icon}
                    />
                  ) : (
                    <Typography
                      sx={{
                        fontSize: `14px !important`,
                        marginLeft: `8px`,
                        color: theme.palette.custom.lightWhite,
                      }}
                    >
                      {name[0]}
                    </Typography>
                  )}
                </ListItemIcon>

                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  )
}
export default Sidebar
