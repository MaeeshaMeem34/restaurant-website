import React, { useState } from "react";
import Navbar from "../Navbar/UserNavbar/Navbar";
import Sidebar from "../Sidebar";

import {
  HeroBtn,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
} from "./HeroElement";

const Hero = ({user}) => {

    const [isOpen,setIsOpen] = useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen);
    };
  return (
    <div>
      <Navbar user={user} toggle={toggle} />
      <HeroContainer>
        
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

export default Hero;
