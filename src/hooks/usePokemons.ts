import { useEffect, useState } from 'react';
import { Pokemon } from '../types/Pokemon';

export function usePokemons() {
    const [page, setPage] = useState<number>(1);
	const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);

	useEffect(() => {
        const limit = 20;
		const offset = page * limit;
		console.log('limit', limit);
		console.log('offset', offset);

		fetch(
			'https://pokeapi.co/api/v2/pokemon?limit=' +
				limit +
				'&offset=' +
				offset
		)
			.then((response) => response.json())
			.then((data) => data.results)
            .then((data) => {
                const pokemonsArray = data as Array<Pokemon>;
                setPokemons(pokemonsArray);
            });
	}, [page]);

    const nextPage = () => {
        console.log('next page', page);
        setPage(page + 1);
    }

    const previousPage = () => {
        console.log('previous page', page);
        
        if (page > 1) {
            setPage(page - 1);
        }
    }

	return { pokemons, nextPage, previousPage };
}
