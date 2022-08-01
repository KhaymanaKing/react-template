import { useSearch } from '../../state/hooks/url.js';
import { useInView } from 'react-intersection-observer';
import { usePokedex } from '../../state/hooks/pokedex.js';
import styles from './PokemonList.css';

export default function PokemonList() {
  const [searchParams] = useSearch();
  const { pokedex, addPage } = usePokedex(searchParams);

  const { ref } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) addPage();
    },
  });
  

  return (
    <ul className="pokemonList">
      {pokedex.map((pokemon, i) => (
        <Card 
          key={pokemon._id}
          pokemon={pokemon}
          loadRef={i === pokedex.length - 3 ? ref : null} />
      ))}
    </ul>
  );
}

function Card({ pokemon, loadRef }) {
  const { url_image, pokemon: name, type_1, type_2 } = pokemon;
  return (
    <li className={styles.Card} ref={loadRef}>
      <img src={url_image} alt={name}/>

      <h3 className={styles.Header} title={name}>
        {name}
      </h3>

      <div className={styles.Types}>
        <Type type={type_1} />
        <Type type={type_2} /> 
      </div>
    </li>

  );
}    
    
    

function Type({ type }) {
  return type === 'NA' ? null : <span>{type}</span>;
}
