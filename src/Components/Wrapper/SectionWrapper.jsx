import Box from '@mui/material/Box';
import styled from '@mui/material/styles/styled';
import { memo } from 'react';
// import { DrawerWidth } from '../../Constants';
const openedMixin = (theme) => ({
    width: `calc(100% - ${import.meta.env.VITE_DRAWER_WIDTH})`,
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
    width: `calc(100% - (${theme.spacing(7)} + 1px))`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - (${theme.spacing(8)} + 1px))`,
    },
  });

const SectionWrapper = styled(Box,{ shouldForwardProp: (prop) => prop !== 'open' })(({theme,open})=>({
    width: `calc(100% - ${import.meta.env.VITE_DRAWER_WIDTH})`,
    marginTop:60,
    [theme.breakpoints.up('lg')]:{
      marginTop:80,
    },
    ...(open && { ...openedMixin(theme) }),
    ...(!open && { ...closedMixin(theme) }),
}));

export default memo(SectionWrapper);