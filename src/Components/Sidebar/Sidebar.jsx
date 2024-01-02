import React, { memo } from 'react';
import Box from '@mui/material/Box';
import styled from '@mui/material/styles/styled';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Tooltip from '@mui/material/Tooltip';
import { useLocation, useNavigate } from 'react-router-dom';

const openedMixin = (theme) => ({
  width: import.meta.env.VITE_DRAWER_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const SidebarWrapper = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: import.meta.env.VITE_DRAWER_WIDTH,
  position: 'fixed',
  top: 60,
  left: 0,
  bottom: 0,
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up('lg')]: {
    top: 80
  },
  ...(open && { ...openedMixin(theme) }),
  ...(!open && { ...closedMixin(theme) }),
}))

const Sidebar = ({ open, data }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pathArr = pathname.split('/');
  const path = pathArr.length > 1 && pathArr[1] !== "" ? pathArr[1] : '/'
  return (
    <SidebarWrapper open={open} overflow="hidden">
      <Toolbar />
      <List>
        {
          data.map((val, index) => (
            open ? (
              <ListItem key={index} disablePadding sx={{
                position: 'relative',
                backgroundColor: path === val.link && 'rgba(0,0,0,0.1)',
                width: import.meta.env.VITE_DRAWER_WIDTH,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  height: '100%',
                  width: '3px',
                  backgroundColor: path === val.link && 'primary.light'
                }
              }}
              >
                <ListItemButton sx={{ pl: '20px' }} onClick={() => navigate(val.link)}>
                  <ListItemIcon sx={{ color: path === val.link && 'primary.light' }}>
                    {<val.icon />}
                  </ListItemIcon>
                  <ListItemText primary={val.title} sx={{ m: 0, color: path === val.link && 'primary.light' }} />
                </ListItemButton>
              </ListItem>
            ) : (
              <Tooltip title={val.title} arrow placement="right" key={index}>
                <ListItem disablePadding sx={{
                  position: 'relative',
                  backgroundColor: path === val.link && 'rgba(0,0,0,0.1)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    height: '100%',
                    width: '3px',
                    backgroundColor: path === val.link && 'primary.light'
                  }
                }}>
                  <ListItemButton sx={{ px: 0 }} onClick={() => navigate(val.link)}>
                    <ListItemIcon
                      sx={{
                        width: "100%",
                        ml: '20px',
                        color: path === val.link && 'primary.light',
                      }}
                    >
                      {<val.icon />}
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </Tooltip>
            )
          ))
        }
      </List>
    </SidebarWrapper>
  )
}

export default memo(Sidebar)