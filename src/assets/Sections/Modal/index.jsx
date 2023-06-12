import React, { useEffect } from 'react'
import Lixeiro from '../../Imgs/Lixeirinha.png'
import { ModalOverlay, ModalContent, DivTittle, ModalName, CloseButton, ItensCard, ImgCard, NameProduct, ImgTrash, UlStyled, DivTotalItens, DivTotalValue, TotalValueP, TotalValueMoney, ButtonRemoveAll, DivCardsImgName } from './styled'

export const Modal = ({ closeModal, selectedItems, setSelectedItems }) => {
  const calculateTotal = () => {
    let total = 0
    selectedItems.forEach((item) => {
      total += item.price
    })
    return total.toFixed(2)
  }

  const handleRemoveItem = (itemId) => {
    const updatedItems = selectedItems.filter((item) => item.id !== itemId)
    setSelectedItems(updatedItems)
  }

  const handleRemoveAll = () => {
    setSelectedItems([])
  }

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      closeModal()
    }
  }

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      closeModal()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <ModalOverlay onClick={handleClickOutside}>
      <ModalContent>
        <DivTittle>
          <ModalName>Carrinho de Compras</ModalName>
          <CloseButton onClick={closeModal}>X</CloseButton>
        </DivTittle>
        <UlStyled>
          {selectedItems.map((item) => (
            <ItensCard key={item.id}>
              <DivCardsImgName>
                <ImgCard src={item.img} alt='Imagem referente ao item' />
                <NameProduct>{item.name}</NameProduct>
              </DivCardsImgName>
              <ImgTrash src={Lixeiro} alt='Imagem referente ao item' onClick={() => handleRemoveItem(item.id)}/>
            </ItensCard>
          ))}
        </UlStyled>
        <DivTotalItens>
          <DivTotalValue>
            <TotalValueP>Total</TotalValueP>
            <TotalValueMoney>R$ {calculateTotal()}</TotalValueMoney>
          </DivTotalValue>
          <ButtonRemoveAll onClick={handleRemoveAll}>Remover todos</ButtonRemoveAll>
        </DivTotalItens>
      </ModalContent>
    </ModalOverlay>
  )
}
