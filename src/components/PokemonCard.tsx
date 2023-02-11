import { usePokemon } from "../hooks/usePokemon";

function PokemonCard(props: {name: string}) {
	const pokemon = usePokemon(props.name);
    
	return (
		<div className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white drop-shadow-xl p-5 rounded-xl">
            <img className="w-full" src={pokemon.image} alt={pokemon.name} />
			<h3 className="font-bold text-center uppercase">{pokemon.name}</h3>
			<p>Base Experience: {pokemon.base_experience}</p>
			<p>Height: {pokemon.height}</p>
		</div>
	);
}

export default PokemonCard;