import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const PRODUCTS = [
	{id: 1, name: 'iPhone', stock: 12},
	{id: 2, name: 'Galaxy', stock: 10},
	{id: 3, name: 'Xiaomi', stock: 20},
	
]

const ProductList = () => {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		console.log('Empieza GetProductos');
		getProducts().then(response => {
			console.log(response);
			setProducts(response)
		})
		console.log('Termina GetProducts');

	}, [])

	const getProducts = () => { 
		return new Promise((resolve, reject) => { // regresa una promesa
			setTimeout(() => {
				resolve(PRODUCTS)
			}, 3000);
		})
	}
	

	// const getProducts = () => {	
	// 	const productsPromise = new Promise( (resolve, reject) => {
	// 		const rand = Math.random()
	// 		console.log(rand);
	// 		if( rand > 0.5) {
	// 			resolve('La promesa se resolivó satisfactoriamente')
	// 		}
	// 		reject('Rechazada')
	// 	})

	// 	// Cuando espero el resultado de esta promesa, obtengo la respuesta, viene del
	// 	productsPromise.then( (response) => {
	// 		console.log('Respuesta: ', response);
	// 	}).catch((err) => {
	// 		console.log('Error: ', err);
	// 	})
	// }

  return (
    <div className='mx-auto max-w-lg'>
			<h1>Productos</h1>
			{products.map( p => <ProductCard key={p.id} {...p} />)}		
		</div>
  )
}

export default ProductList