import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  height: 15vh;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.navbar};
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    height:auto;
    flex-wrap: wrap;
  }
`; 

export const Logo = styled.img`
    width:70px;
    margin:0 2rem;
` 

export const PageLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    flex-direction: column;
    align-items:flex-end;
    padding-right: 4rem;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
    overflow: hidden;
  }
`; 

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  padding-right:4rem;

  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    display: block;
  }
`;