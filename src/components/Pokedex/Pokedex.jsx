import PokemonList from'./PokemonList.jsx';
import Search from './Search.jsx'; 
//setup for the pokedex page.
export default function Pokedex() {
  return (
    <section className="Pokedex">
      <Search />
      <PokemonList />
    </section>
  );
}
