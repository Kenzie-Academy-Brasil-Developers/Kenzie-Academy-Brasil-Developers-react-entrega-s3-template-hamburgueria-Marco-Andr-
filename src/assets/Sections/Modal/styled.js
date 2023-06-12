import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  width: 100vh;
  border-radius: 5px;
`;

export const DivTittle = styled.div`
  background-color: var(--primary-color);
  display: flex;
  justify-content: space-between;
  padding: 13px 1rem;
  align-items: center;
  border-radius: 5px 5px 0 0;
`;

export const ModalName = styled.h2`
font-size: var(--tittle3-Size);
font-weight: var(--tittle3-Weight);
color: white;
`

export const CloseButton = styled.p`
font-size: var(--tittle2-Size);
color: var(--grey-color3);
cursor: pointer;
`
export const ItensCard = styled.li`
display:flex;

padding: 1rem;
justify-content: space-between;
`

export const ImgCard = styled.img`
background-color: var(--grey-color3);
width: 100px;
height: 100px;
border-radius: 8px;
`

export const NameProduct = styled.h3`
font-weight: var(--tittle3-Weight);
font-size: var(--tittle3-Size);
`

export const ImgTrash = styled.img`
width: 15px;
height: 20px;
cursor: pointer;
`

export const UlStyled = styled.ul`
height: 366px;
overflow: auto;
`

export const DivTotalItens = styled.div`
padding-top: 1rem;
margin: 1rem;
border-top: solid 3px var(--grey-color3);
`

export const DivTotalValue = styled.div`
display:flex;
justify-content: space-between;
margin-bottom: 1rem;
align-items: center;
`

export const TotalValueP = styled.p`
font-size: var(--body);
font-weight: var(--body-Bold);
`

export const TotalValueMoney = styled.p`
font-size: var(--body);
font-weight: var(--body-Bold);
color: var(--grey-color2);
`

export const ButtonRemoveAll = styled.button`
width:100%;
height: 60px;
border-radius: 8px;
background-color: var(--grey-color3);
color: var(--grey-color2);
font-size: var(--Headline);
font-weight: var(--body-Bold);
cursor: pointer;
`

export const DivCardsImgName = styled.div`
display: flex;
gap:1rem
`