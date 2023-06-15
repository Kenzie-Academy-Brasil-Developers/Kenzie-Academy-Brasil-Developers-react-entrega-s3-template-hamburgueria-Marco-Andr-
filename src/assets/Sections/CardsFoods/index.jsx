import React, { useState } from 'react'
import { SectionCardsFood, DivCard, ImgCardFood, DivInformation, NameOfFood, CategoryName, ValueStyled, ButtonStyled } from './styled'
import { Toastfy } from '../Toastfy'

export const CardFood = ({ foodList, selectedItems, setSelectedItems }) => {
    const [showToast, setShowToast] = useState(false)

    const handleAddItem = (food) => {
        let itemExists = false
        selectedItems.forEach((item) => {
            if (item.id === food.id) {
                itemExists = true
            }
        })
        if (itemExists) {
            setShowToast(true)
            setTimeout(() => { setShowToast(false) }, 5000)
            return
        }
        setSelectedItems(prevItems => [...prevItems, food])
    }

    return (
        <SectionCardsFood>
            {foodList.map((food) => (
                <DivCard key={food.id}>
                    <ImgCardFood src={food.img}></ImgCardFood>
                    <DivInformation>
                        <NameOfFood>{food.name}</NameOfFood>
                        <CategoryName>{food.category}</CategoryName>
                        <ValueStyled>R$ {food.price}</ValueStyled>
                        <ButtonStyled onClick={() => handleAddItem(food)}>Adicionar</ButtonStyled>
                    </DivInformation>
                </DivCard>
            ))}
            {showToast && <Toastfy />}
        </SectionCardsFood>
    )
}
