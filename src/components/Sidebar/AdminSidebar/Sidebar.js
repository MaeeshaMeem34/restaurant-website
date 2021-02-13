import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from "./SidebarData";
import SubMenu from "./SubMenu"




const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 65px;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const AdminSidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
  
      
       
        <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
           
           
            {SidebarData.map((item,index)=>{
                return <SubMenu item={item} key={index} />
            })} </SidebarWrap>

            

          
        </SidebarNav>
     
    </>
  );
};

export default AdminSidebar;