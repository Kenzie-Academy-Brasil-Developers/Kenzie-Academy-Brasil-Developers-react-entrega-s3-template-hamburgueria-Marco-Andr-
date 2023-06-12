import Carrinho from '../Imgs/Carrinho.png'
import Lupinha from '../Imgs/Lupinha.png'
import React, { useState, useEffect } from 'react'
import { Modal } from '../Sections/Modal'

import { HeaderStyled, DivLogo, LogoName, LogoNameSpan, InputDiv, ImgCard, ImgLup, CartCount, InputStyled, DivCartIMG } from './styled'

export const Header = ({ onSearch, selectedItems, setSelectedItems }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [isModalOpen, setModalOpen] = useState(false)
  
    const openModal = () => {
      setModalOpen(true)
    }
  
    const closeModal = () => {
      setModalOpen(false)
    }
  
    useEffect(() => {
      onSearch(searchTerm)
    }, [searchTerm, onSearch])
  
    return (
      <HeaderStyled>
        <DivLogo>
          <LogoName> Burger <LogoNameSpan>kenzie</LogoNameSpan>
          </LogoName>
          <DivCartIMG>
            <ImgCard src={Carrinho} alt='Imagem de Carrinho' onClick={openModal} />
            <CartCount>{selectedItems.length}</CartCount>
          </DivCartIMG>
          {isModalOpen && <Modal closeModal={closeModal} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />}
        </DivLogo>
        <InputDiv>
          <InputStyled type="text" placeholder="Digite a pesquisa" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <ImgLup src={Lupinha} alt='Imagem de uma Lupa' />
        </InputDiv>
      </HeaderStyled>
    )
  }
  
