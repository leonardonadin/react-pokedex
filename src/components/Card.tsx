import { useEffect, useState } from "react";

interface Pokemon {
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
}

function Card (props: any) {
    const [pokemon, setPokemon] = useState<Array<Pokemon>>([]);

    useEffect(() => {
        fetch(props.pokemon.url).then((res) => res.json().then((data) => {
            setPokemon(data);
        }));
    });
    
    return (
		<div className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white drop-shadow-xl p-5 rounded-xl">
			<p>Name: {pokemon.name}</p>
			<p>Base Experience: {pokemon.base_experience}</p>
			<p>Height: {pokemon.height}</p>
			<p>Is Default: {pokemon.is_default}</p>
		</div>
	);
}

export default Card