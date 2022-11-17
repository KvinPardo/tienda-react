import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import Header from './components/Header'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <ItemListContainer greeting='Primera Entrega'/>
    </div>
  )
}

export default App