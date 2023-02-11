import './App.css';
import PokemonCard from './components/PokemonCard';
import { usePokemons } from './hooks/usePokemons';

function App() {
    const {pokemons, nextPage, previousPage} = usePokemons();

    const handlePreviousPage = () => {
        previousPage();
    }

    const handleNextPage = () => {
        nextPage();
    }

	return (
		<div className="App">
			<div className="container mx-auto">
				<h1 className="text-4xl text-center text-blue-500 mb-5">
					Hi everyone, this is my Pokédex!
				</h1>
				<p className="text-xl text-center mb-5">
					This is a simple Pokédex made with React and TypeScript.
				</p>
				<div className="grid gap-4 grid-cols-4">
					{pokemons.map((pokemon, index) => {
						return <PokemonCard key={pokemon.name} name={pokemon.name} />;
					})}
				</div>
				<div className="flex gap-3 justify-center mt-4">
					<button
						className="rounded bg-blue-500 text-white p-3"
						onClick={handlePreviousPage}
					>
						Previous
					</button>
					<button
						className="rounded bg-blue-500 text-white p-3"
						onClick={handleNextPage}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
