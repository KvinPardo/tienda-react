import { useCart } from "../context/cartContext"

const Carrito = () => {
 
  const { items, clearCart} = useCart();

  return (
    <div className='container mx-auto h-screen flex items-center justify-center'>
      <h1 className='text-4xl font-primary'>Carrito</h1>
      {items.map( i => <li key={i}>{i}</li>)}
      <button className='px-2 bg-gray-300' onClick={clearCart}>Vaciar Carrito</button>
    </div>
  )
}

export default Carrito