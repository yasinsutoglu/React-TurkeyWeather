import React from 'react'
import { HeaderDiv ,HeaderButton, ButtonDiv} from './Header.styled'
import {useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderDiv>
      <h3>WELCOME !</h3>
      <h5>Please click to see other cities' weather.</h5>
      <ButtonDiv>
        <HeaderButton onClick={() => navigate("/map")}>Turkey Map</HeaderButton>
        <HeaderButton onClick={() => navigate("/cities")}>
          Turkey City List
        </HeaderButton>
      </ButtonDiv>
    </HeaderDiv>
  );
}

export default Header