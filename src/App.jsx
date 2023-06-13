import { useEffect, useState } from 'react'
import axios from 'axios'
import { GlobalStyle } from './assets/GlobalStyled/GlobalStyled.js'
import { Header } from './assets/Header'
import { CardFood } from './assets/Sections/CardsFoods'

const App = () => {
  const [foodList, setFoodList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
        setFoodList(response.data)
      } catch (error) {
        console.error('Erro ao carregar os dados:', error)
      }
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
      <CardFood foodList={filteredFoodList} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
    </>
  )
}

export default App
