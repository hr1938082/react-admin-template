import React, { memo } from "react";
import PropTypes from 'prop-types'
import { styled } from "@mui/system";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Wrapper = styled(Box)(({theme})=>({
    width: 500,
    padding: 20,
    borderRadius: 5,
    backgroundColor:theme.palette.background.default,
    boxShadow:'0 0 10px rgba(0,0,0,.2)',
    [theme.breakpoints.only('lg')]:{
        width:600
    },
    [theme.breakpoints.up('xl')]:{
        width:700
    }
}));

const FormWrapper = (props) => {
    const {title, children, onSubmit, style, titleVariant = null} = props;
    return(
        <Wrapper>
            {
                title && <Typography variant={titleVariant ? titleVariant : 'h5'} sx={{pb:2,...style}} component="h1">{title}</Typography>
            }
            <form onSubmit={onSubmit}>
                {
                    Array.isArray(children) ? children.map((val)=>val):children
                }
            </form>
        </Wrapper>
    )
}

FormWrapper.propTypes = {
    title: PropTypes.string,
    titleVariant: PropTypes.oneOf(['h1','h2','h3','h4','h5','h6']),
    children: PropTypes.oneOfType([PropTypes.element,PropTypes.arrayOf(PropTypes.element)]).isRequired,
    onSubmit: PropTypes.func.isRequired,
    style: PropTypes.object
}

export default memo(FormWrapper);