import { memo } from "react";
import styled from "@mui/material/styles/styled";
import Box from '@mui/material/Box';

const HorizontalCenterWrapper = styled(Box)({
    width: '100%',
    display: "flex",
    justifyContent: "center",
    flex:'wrap',
    padding: '2rem',
})

export default memo(HorizontalCenterWrapper)
