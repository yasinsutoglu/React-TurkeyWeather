import styled from "styled-components"



export const LoginBody = styled.div`
background-image:url("https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=");
background-position:center;
background-size:cover;
background-repeat:no-repeat;

height:100vh;
display:flex;
align-items:center;
justify-content:center;
width:100%;

`

export const LoginDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:1rem;
border-radius:50%;
width:450px;
height:450px;
border:3px solid white;
background: radial-gradient(circle, rgba(168,133,149,0.4) 0%, rgba(199,164,26,0.4) 100%);
@media screen and (max-width:500px) {
    width:320px !important;
    height:320px !important;
    padding:2rem;
    text-align:center;
}

`



export const  LoginButton =styled.button`
padding:0.3rem;
background-color:rgba(0,0,0,0.9);
color:white;
text-align:center;
width:5rem;
border:none;
cursor:pointer;
transition:all 0.6s;
margin-right: 1rem;
&:hover{
background-color:white;
color:black; 
transform:scale(0.97);
font-weight:bold;
}
@media screen and (max-width:500px) {
    width:120px;
    
}
`

export const SignButDiv = styled.div`
text-align:center;
margin-left: 1rem;
  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin-right:0.5rem;
  }
`;

