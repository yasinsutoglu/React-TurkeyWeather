import styled from "styled-components";

export const MapDiv = styled.div` 

background-color: rgb(240,240,240);  
 
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    min-height:75vh;
  }
`; 