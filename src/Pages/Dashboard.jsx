import React, { memo, useEffect } from 'react';
import DashboardCard from '../Components/DashboardCard/DashboardCard';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Dashboard = () => {
  return (
    <>
      <Grid container rowGap={5} mt={5}>
        <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <DashboardCard color="primary.main" icon={<PendingActionsIcon fontSize='inherit' />} title="Pending Orders" text={10} />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <DashboardCard color="secondary.main" icon={<HourglassBottomIcon fontSize='inherit' />} title="Processing Orders" text={10} />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <DashboardCard color="primary.main" icon={<LocalShippingIcon fontSize='inherit' />} title="Shipped Orders" text={10} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: { xs: 'flex', lg: 'none' }, justifyContent: 'center' }}>
          <DashboardCard sx={{ mb: 5 }} color="primary.main" icon={<ThumbUpOffAltIcon fontSize='inherit' />} title="Delivered Orders" text={10} />
        </Grid>
        <Grid item xs={12} sx={{ display: { xs: 'flex', lg: 'none' }, justifyContent: 'center' }}>
          <DashboardCard color="secondary.main" icon={<HighlightOffIcon fontSize='inherit' />} title="Cancelled Orders" text={10} />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Typography component="h1" variant='h4' mb={2} textAlign="center">Delivered Orders</Typography>
        </Grid>
        <Grid item lg={4} sx={{ display: { xs: 'none', lg: 'flex' }, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <DashboardCard sx={{ mb: 5 }} color="primary.main" icon={<ThumbUpOffAltIcon fontSize='inherit' />} title="Delivered Orders" text={10} />
          <DashboardCard color="secondary.main" icon={<HighlightOffIcon fontSize='inherit' />} title="Cancelled Orders" text={10} />
        </Grid>
      </Grid>
    </>
  )
}

export default memo(Dashboard)
