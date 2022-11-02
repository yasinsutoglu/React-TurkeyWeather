import styled from  "styled-components";

export const HeaderDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding: 1.5rem;
    gap:1rem;
`

export const ButtonDiv = styled.div`
  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    display: flex;
    flex-wrap: wrap;
    gap:1rem;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderButton = styled.button`
    padding:0.5rem;
    width:10rem;
    cursor:pointer;
    background-color: lightgrey;
    color:black;
    border:none;
    transition: all 0.5s;
    border-radius: 7px;
    margin:0 1rem;
    &:hover{
        color: lightgray;
        background-color:black;
        transform: scale(0.97);
    }
`