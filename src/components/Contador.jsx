import React, { useEffect, useState } from 'react'



const Contador = () => {

  const [count, setCount] = useState(0)

  const clickHandler = () => { 
    setCount( count + 1 )
    console.log('Se hizo click');
   }

  // Sólo en el montaje  
  useEffect(() => {
    console.log('solo en el montaje');
  }, [])

  return (
    <div className='mx-auto container flex justify-center p-8 items-center'>
        <strong className='px-4'>Clicker</strong>
        <button className='bg-gray-300 p-4' onClick={clickHandler}>Aumentar</button>
        <strong className='px-4'>{ count }</strong>
    </div>
  )
}

export default Contador