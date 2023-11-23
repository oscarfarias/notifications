'use client'
import { ReactElement } from 'react'
import Layout from '../Layout'
import { Grid } from '@mui/material'
import Panel from './Panel'
import Devices from './Devices'
import { useNotification } from './hooks/useNotification'

const Notifications = (): JSX.Element => {
  const { devicesIds } = useNotification()

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
