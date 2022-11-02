import styled from "styled-components";

export const FooterDiv = styled.div`
    height: 15vh;
    display:flex;
    flex-direction: row-reverse;
    justify-content:space-between;
    align-items:center;
    background-color: ${({theme})=> theme.colors.footer};
    padding:2rem 5rem;
`

export const FooterP = styled.p`
color:white;
font-size: 1.4rem;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    font-size:1rem;
  }
`;