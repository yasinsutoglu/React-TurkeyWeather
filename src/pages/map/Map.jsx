import React, { useState } from 'react'
import TurkeyMap from "turkey-map-react";
import {useNavigate} from "react-router-dom";
import { MapDiv } from './Map.styled';

const Map = ({setCity}) => {
  const navigate = useNavigate();
  const [plate, setPlate] = useState("")
  const [cityName, setCityName] = useState("");

  const handleHover=(p,n)=>{
    setPlate(p)
    setCityName(n)
  }

  return (
    <MapDiv>
      <p className='plate text-center mb-1 display-6 fw-bold'>{plate}-{cityName}</p>
      
      <TurkeyMap onClick={({name})=> {setCity(name);
        navigate("/home")
      }}
      hoverable={true} onHover={({plateNumber,name})=>handleHover(plateNumber, name)}/>
    </MapDiv>
  )
}

export default Map