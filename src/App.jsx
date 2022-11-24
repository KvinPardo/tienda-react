import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Contador from './components/Contador'
import ProductList from './components/ProductList'
import ProductCard from './components/ProductCard'

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <ItemListContainer greeting='Primera Entrega'/>
      <Contador/>
      <ProductList/>
      
    </div>
  )
}

export default App