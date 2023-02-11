import { useEffect, useState } from 'react';
import { Pokemon } from '../types/Pokemon';

function fetchPokemon(name: string) {
	return fetch('https://pokeapi.co/api/v2/pokemon/' + name + '/')
		.then((response) => response.json())
		.then((data) => data);
}

export function usePokemon(name: string): Pokemon {
	const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);

	useEffect(() => {
		fetchPokemon(name).then((data) => {
            const pokemonData = data as Pokemon;
            pokemonData.image = data.sprites.front_default;
			setPokemon(pokemonData);
		});
	}, []);

	return pokemon;
}
