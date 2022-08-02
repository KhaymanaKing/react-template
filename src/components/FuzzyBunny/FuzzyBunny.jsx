import { Outlet } from 'react-router-dom';
import Navigation from '../Page/Header/Navigation';
import styles from './Fuzzybunny.css';

const navigation = [
  { to: '', label: 'Families' },
  { to: 'bunnies', label : 'Bunnies' },
];
//this is eventually gunna be navigation for each 
// family so you can click on it and see individual families?

export default function FuzzyBunny() {
  return (
    <section className={styles.FuzzyBunny}>
      <header>
        <Navigation navigation={navigation} />
      </header>
      <Outlet/>
    </section>

  );
}
