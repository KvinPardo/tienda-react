import React, { useEffect, useState } from 'react'
import CharCard from './CharCard';

const Characters = () => {

	const [character, setCharacter] = useState([]);
  
	useEffect(() => {
		getChars()
	}, [])

	// const getChars = () => { 
	// 	const URL = 'https://rickandmortyapi.com/api/character';
	// 	fetch(URL) // el fetch nos trae una respuesta al hacerle la petición a esta url
	// 	.then( response => response.json())
	// 	.then(data => {
	// 		// console.log(data.results);
	// 		setCharacter(data.results)
	// 	})  
	// }

	const getChars = async() => { 
		const URL = 'https://rickandmortyapi.com/api/character';
		const response = await fetch(URL);
		const data = await response.json()
		setCharacter(data.results);
	}
	

  return (

    <div className='mx-auto container flex flex-wrap items-center mt-12 p-4'>
			{character.map( p => <CharCard key={p.id} {...p}/>)}
		</div>
  )
}

export default Characters