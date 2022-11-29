import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Contador from './components/Contador'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Food from './components/Food'
import Category from './components/Category'
import Characters from './components/CharList/Characters'

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero/>
      <Cards/>
      <Food/>
      <Category/>
      <Characters/>
      <ItemListContainer greeting='Primera Entrega'/>
      <Contador/>

      
    </div>
  )
}

export default App