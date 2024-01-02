import React,{ memo } from 'react';
import {Outlet} from 'react-router-dom';
import SectionWrapper from '../Wrapper/SectionWrapper';



const Section = ({open}) => {
  return (
    <SectionWrapper open={open}>
        <Outlet/>
    </SectionWrapper>
  )
}

export default memo(Section)