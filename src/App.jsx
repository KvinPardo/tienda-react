import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting='Primera Entrega'/>
    </div>
  )
}

export default App