import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
    const [pokemons, setPokemons] = useState([]);
    
    useEffect(() => {
        fetch(
            'https://pokeapi.co/api/v2/pokemon?limit=151',
            ).then((res) => res.json().then((data) => {
                setPokemons(data.results);
            }));
    });

	return (
		<div className="App">
			<div className="container mx-auto">
                <h1 className="text-4xl text-center text-blue-500 mb-5">Hi everyone, this is my Pokédex!</h1>
                <p className="text-xl text-center mb-5">This is a simple Pokédex made with React and TypeScript.</p>
				<div className="grid gap-4 grid-cols-4">
					{pokemons.map((pokemon, index) => {
						return (
							<Card pokemon={pokemon} />
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
