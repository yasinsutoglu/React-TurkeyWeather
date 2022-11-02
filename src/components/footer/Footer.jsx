import React from "react";
import { FooterDiv, FooterP } from "./Footer.styled";


const Footer = () => {
  return (
    <FooterDiv>
      <FooterP >Weather App Project, Copyright &copy; 2022</FooterP>
      <a href="#" target="_blank">
        <img
          src="https://m.media-amazon.com/images/I/41wkG24yDkL.png"
          width="100"
          height="70"
          alt=""
        />
      </a>
    </FooterDiv>
  );
};
export default Footer;
