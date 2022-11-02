import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import Header from '../../components/header/Header'
import { HomeDiv } from './Home.styled'


const Home = ({city,setCity}) => {

const [myData, setMyData] = useState()

const apiKey = `9a6c58097c1634ecf28c8895c5827ca1`;

  const getWeather = async (city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
     const { data } = await axios.get(url);
     setMyData(data);
     
  } catch (error) {
    console.log(error);
  }
}

  useEffect(() => {   
    getWeather(city)
  }, [])
  
  
if(!myData){
  return (<div>
      <img src="../../assets/loading.gif" alt="gif" />
  </div>)
}else{
  return (
    <HomeDiv>
      <Header/>
      <Card myData={myData}/>
    </HomeDiv>
  )
}
}

export default Home