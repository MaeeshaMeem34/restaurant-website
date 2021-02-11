import React from 'react';
import {
    SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute
  } from "./SidebarElement";

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon> 
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/pizzas"> pizzaas </SidebarLink>
                <SidebarLink to="/desserts"> desserts </SidebarLink>
                <SidebarLink to="/"> full menu </SidebarLink>
            </SidebarMenu>

            <SideBtnWrap>
                <SidebarRoute to="/"> Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
        
    )
}

export default Sidebar;
