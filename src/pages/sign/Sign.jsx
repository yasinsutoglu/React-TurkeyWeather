import React from 'react'
import {useState} from "react"
import { LoginBody, LoginDiv, LoginButton, SignButDiv} from './Sign.styled';
import { useNavigate } from 'react-router-dom';

const Login = ({setSignFlag, signFlag}) => {

  const navigate=useNavigate()
  const [loginValues, setLoginValues] =useState({
    username:"",
    password:""
  });

  const handleFormValues =(e) => {
    setLoginValues({...loginValues, [e.target.name]: e.target.value})
  } 

  const handleSubmit =(e)=> {
    e.preventDefault();
    const localValues= (Object.values(localStorage)).map((item)=> JSON.parse(item))
   
    if(!localValues.some((item)=> item.username === loginValues.username) ||  !localValues.some((item)=> item.password===loginValues.password)){
      document.querySelector(".warning").textContent= `You have entered wrong password or username ! `
      setLoginValues({
        username: "",
        password: "",
      })  
    }else {
      navigate("/home")
      setSignFlag(!signFlag)
    }

    setTimeout(()=> {
        document.querySelector(".warning").textContent= "";
      },2000)
  }

  const handleRegister = (e)=>{
    e.preventDefault();
    const localValues= (Object.values(localStorage)).map((item)=> JSON.parse(item));

     if(!localValues.some((item)=> item.username === loginValues.username) ||  !localValues.some((item)=> item.password===loginValues.password)){
        if(loginValues.username === "" || loginValues.password ===""){
          alert("Please don't leave blank input")
          setLoginValues({
            username: "",
            password: "",
          });
        }else{
        localStorage.setItem(new Date().getTime() , JSON.stringify(loginValues))      
        document.querySelector(".warning").textContent= `You have successfully signed up! Sign in to continue`
        navigate("/");
        setLoginValues({
         username: "",
          password: "",
        });
        }

      

     }else{
      document.querySelector(".warning").textContent= `Already Signed Up! Please Sign in!`
      navigate("/");
      setLoginValues({
        username: "",
        password: "",
      });
     }

      setTimeout(()=> {
        document.querySelector(".warning").textContent= ""
      },2000)
  }

  return (
    <LoginBody>
      <LoginDiv>
        <h2
          style={{ color: "white", fontWeight: "bold", marginBottom: "1rem" }}
        >
          SIGN PAGE
        </h2>

        <p style={{ color: "blue", fontSize: "1rem" }} className="warning"></p>

        <form>
          <div style={{ margin: "0.4rem" }}>
            <input
              name="username"
              type="text"
              placeholder="USERNAME"
              id="username"
              value={loginValues.username}
              onChange={handleFormValues}
              style={{ backgroundColor: "rgba(0,0,0,0.4)", padding: "0.3rem" }}
            />
          </div>
          <div style={{ margin: "0.4rem" }}>
            <input
              name="password"
              type="password"
              id="password"
              placeholder="PASSWORD"
              value={loginValues.password}
              onChange={handleFormValues}
              style={{ backgroundColor: "rgba(0,0,0,0.4)", padding: "0.3rem" }}
            />
          </div>
          <SignButDiv>
            <LoginButton onClick={handleSubmit}>Sign In</LoginButton>
            <LoginButton onClick={handleRegister}>Sign Up</LoginButton>
          </SignButDiv>
        </form>
      </LoginDiv>
    </LoginBody>
  );
}

export default Login