import { memo } from "react";
import styled from "@mui/material/styles/styled";

const FullPageCenteredWrapper = styled('div')(({theme})=>({
    height: '100vh',
    width: '100vw',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

export default memo(FullPageCenteredWrapper);