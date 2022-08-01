import PokemonList from'./PokemonList.jsx';
import Search from './Search.jsx'; 

export default function Pokedex() {
  return (
    <section className="Pokedex">
      <Search />
      <PokemonList />
    </section>
  );
}
