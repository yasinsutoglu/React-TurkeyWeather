
import './App.css';
import {ThemeProvider} from "styled-components";
import { GlobalStyle } from './style/GlobalStyle';
import Navbar from './components/navbar/Navbar'; 
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Sign from './pages/sign/Sign';
import Home from "./pages/home/Home"
import CityList from "./pages/cities/CityList";
import Map from "./pages/map/Map";
import { useState } from 'react';


const style = {
  colors: {
    navbar: "lightgrey",
    footer: "RGB(24 25 26)",
    header: "#887",
  },

  responsive:{
    lg:"850px",
    md:"510px"
  },
};

function App() {
  const [city, setCity] = useState("Ankara");
  const [signFlag , setSignFlag] = useState(false)

  return (
    <ThemeProvider theme={style}>
      <GlobalStyle />
      {signFlag && <Navbar setSignFlag={setSignFlag} signFlag={signFlag}/>}

      <Routes>
        <Route path="/" element={<Sign setSignFlag={setSignFlag} signFlag={signFlag}/>} />
        <Route path="/home" element={<Home city={city} setCity={setCity} />} />
        <Route
          path="/cities"
          element={<CityList city={city} setCity={setCity} />}
        />
        <Route path="/map" element={<Map city={city} setCity={setCity} />} />
      </Routes>

      {signFlag && <Footer />}
    </ThemeProvider>
  );
}

export default App;
