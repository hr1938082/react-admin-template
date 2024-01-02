import React, { memo, useState } from 'react'
import Box from '@mui/material/Box';
import AppBar from '../../Components/AppBar/AppBar';
import Section from '../../Components/Section/Section';
import Sidebar from '../../Components/Sidebar/Sidebar';
import SidebarData from './SidebarData';

const Main = () => {
  const [Open, setOpen] = useState(window.innerWidth < 1200 ? false : true);
  return (
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'flex-end' }}>
      <AppBar open={Open} setOpen={setOpen} />
      <Sidebar open={Open} data={SidebarData} />
      <Section open={Open} />
    </Box>
  )
}

export default memo(Main)