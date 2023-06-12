import styled from 'styled-components'

export const HeaderStyled = styled.header`
    background-color: var(--grey-color4);
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1rem;

    @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

  }
`

export const DivLogo = styled.div`
display: flex;
justify-content: space-between;
    @media (min-width: 1024px) {
        justify-content: space-between;
        width: 100%;
        align-items:center;
        padding: 1rem;
    }
`

export const LogoName = styled.h1`
font-size:var(--tittle1-Size);
font-weight: var(--tittle1-Weight);
`

export const LogoNameSpan = styled.span`
font-size:var(--tittle2-Size);
font-weight: var(--tittle2-Weight);
color: var(--primary-color2);
`

export const InputDiv = styled.div`
background-color:white;
height:60px;
width:100%;
display: flex;
align-items: center;
padding: 0 1rem;
justify-content: space-between;
border:solid var(--grey-color3) 2px;
margin-top: 1rem;
border-radius: 8px;
cursor: text;
@media (min-width: 1024px) {
    margin: 0;
    width: 22.813rem;
  }
`

export const ImgCard = styled.img`
cursor: pointer;
`

export const InputStyled = styled.input`
width: 100%;
`

export const ImgLup = styled.img`
padding: 1rem;
background-color: var(--primary-color);
border-radius: 8px;
cursor: pointer;
`
export const CartCount = styled.p`
    position: absolute;
    margin-left: 1.5rem;
    transform: translate(-50%, -50%);
    background-color: var(--primary-color);
    color: white;
    font-weight: bold;
    padding: 4px 5px;
    border-radius: 7px;
    cursor: pointer;
    @media (min-width: 1024px) {

    }
`;

export const DivCartIMG = styled.div`
  display: flex;
`