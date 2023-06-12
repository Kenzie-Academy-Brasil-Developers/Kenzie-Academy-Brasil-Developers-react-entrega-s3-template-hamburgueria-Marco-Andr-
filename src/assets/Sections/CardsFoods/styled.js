import styled from 'styled-components'

export const SectionCardsFood = styled.section`
  display: flex;
  padding: 1rem;
  gap: 1rem;
  overflow: auto;

  @media (min-width: 1024px) {
    overflow: unset;
    flex-wrap: wrap;
    padding: 1rem 7em;
  }
`

export const DivCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
border: var(--grey-color2) solid 3px;
border-radius: 5px;
transition: 600ms;

&:hover {
    border-color: var(--primary-color); 
  }
`

export const ImgCardFood = styled.img`
width: 300px;
background-color: var(--grey-color4);
`

export const DivInformation = styled.div`
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: space-around;
height: 196px;
`

export const NameOfFood = styled.h1`
font-size: var(--tittle1-Size);
font-weight: var(--tittle1-Weight);
`

export const CategoryName = styled.h2`
color: var(--grey-color2);
font-size: var(--body);
`

export const ValueStyled = styled.p`
font-size: var(--Headline);
font-weight: var(--body-Bold);
color: var(--primary-color);
`

export const ButtonStyled = styled.button`
background-color: var(--grey-color2);
color: white;
width: 106px;
height: 40px;
border-radius: 8px;
font-weight: var(--body-Bold);
transition: 600ms;

&:hover {
    background-color: var(--primary-color); 
  }
`