import { useEffect, useState } from 'react'
import { GlobalStyle } from './assets/GlobalStyled/GlobalStyled'
import { Header } from './assets/Header'
import { CardFood } from './assets/Sections/CardsFoods'

const App = () => {
  const [foodList, setFoodList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
      const json = await response.json()
      setFoodList(json)
    }
    loadData()
  }, [])

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm)
  }

  const filteredFoodList = foodList.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <GlobalStyle />
      <Header onSearch={handleSearch} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
      <CardFood foodList={filteredFoodList} setSelectedItems={setSelectedItems} />
    </>
  )
}

export default App
