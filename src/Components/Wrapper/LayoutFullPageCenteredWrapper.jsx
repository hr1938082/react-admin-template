import { memo } from "react";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";

const LayoutFullPageCenteredWrapper = styled(Box)(({theme})=>({
    height: 'calc(100vh - 60px)',
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: '2rem',
    [theme.breakpoints.up('lg')]:{
        height: 'calc(100vh - 80px)',
    }
}));

export default memo(LayoutFullPageCenteredWrapper);