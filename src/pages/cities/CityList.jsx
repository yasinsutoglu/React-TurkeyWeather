import React, { useState } from 'react'
import useTurkeyCities from "use-turkey-cities";
import { CitiesDiv } from './CityList.styled';
import {useNavigate} from "react-router-dom";

const CityList = ({setCity}) => {
  
  const {cities, city} = useTurkeyCities();
  const [sehir, setSehir] = useState("")
  const navigate = useNavigate()


  return (
    <CitiesDiv>
      <form className='w-50' onSubmit={(e)=>{
        e.preventDefault();
        setCity(sehir)
        navigate("/home")
      }}>
        <select className="form-select" aria-label="Default select example" onChange={(e)=>setSehir(e.target.value)}>
          {cities.map((item, i)=>{
            return <option key={i} value={item}>{item}</option>;
          })}
          
        </select>
        <div className='mt-4 text-center'>
          <button type="submit" className='btn btn-danger'>Submit</button>
        </div>
      </form>
    </CitiesDiv>
  );
}

export default CityList