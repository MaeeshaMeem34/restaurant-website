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
                <SidebarLink to="/pizzas"> Pizzaas </SidebarLink>
                <SidebarLink to="/desserts"> Desserts </SidebarLink>
                <SidebarLink to="/"> Chinese </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="#"> Our  Menu</SidebarRoute>
            </SideBtnWrap>

            
        </SidebarContainer>
        
    )
}

export default Sidebar;
