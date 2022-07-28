import { useSearchParams } from 'react-router-dom';
import { usePokedex } from '../../state/hooks/pokedex.js';
import PokemonList from'./PokemonList.jsx';
import Search from './Search.jsx'; 

export default function Pokedex() {
  const [searchParams] = useSearchParams();
  const { pokedex, addPage } = usePokedex(searchParams);
  if(!pokedex) return null;

  return (
    <section className="Pokedex">
      <Search />
      <PokemonList pokedex={pokedex} onLoad={addPage}/>
    </section>
  );
}
