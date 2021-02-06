import React, { useState } from "react";

import NavAdmin from "../Navbar/AdminNavbar/NavAdmin";

import Sidebar from "../Sidebar/index";


import {
  HeroBtn,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
} from "./HeroElement";

const AdminHero = () => {

    const [isOpen,setIsOpen] = useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen);
    };
  return (
    <div>
      <HeroContainer>
       
        
       <NavAdmin toggle={toggle} />
       <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
          <HeroItems>
            <HeroH1>greatest Pizza Ever</HeroH1>
            <HeroP> Ready in 60s</HeroP>
            <HeroBtn> Place Order </HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default AdminHero ;