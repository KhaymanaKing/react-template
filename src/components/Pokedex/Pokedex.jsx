import PokemonList from'./PokemonList.jsx';
import Search from './Search.jsx'; 
import styles from './Pokedex.css';
//setup for the pokedex page.
export default function Pokedex() {
  return (
    <section className={styles.Pokedex}>
      <Search />
      <PokemonList />
    </section>
  );
}
