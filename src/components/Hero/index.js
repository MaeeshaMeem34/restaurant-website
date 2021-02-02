import React, { useState } from "react";
import Navbar from "../Navbar/NavbarFile";
import Sidebar from "../Sidebar";

import {
  HeroBtn,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
} from "./HeroElement";

const Hero = () => {

    const [isOpen,setIsOpen] = useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen);
    };
  return (
    <div>
      <HeroContainer>
        <Navbar toggle={toggle} />
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
