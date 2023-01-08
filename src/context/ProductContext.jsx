import React, {createContext, useState, useEffect} from 'react'
import { PRODUCTOS } from "../data/productos.js";

//  Creo el contexto
export const ProductContext = createContext();

const ProductProvider  = ({ children }) => {
  // products state
  const [items, setItems] = useState([])

  // LLamo a mis productos
  useEffect(() => {
    const getProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(PRODUCTOS);
      }, 1000);
    });
    getProductos.then((res) => setItems(res));
    // console.log(PRODUCTOS);
  }, []);

  return (
    <ProductContext.Provider value={{items}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider