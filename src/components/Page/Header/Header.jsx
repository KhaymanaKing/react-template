import Navigation from '../Navigation/Navigation.jsx';
import Menu from './SlideoutMenu.jsx';
import styles from './Header.css';
import User from './User.jsx';

const primary = [
  { to:'/', label: 'Home' },
  { to:'pokedex', label: 'Pokedex' },
  { to:'fuzzy-funny', label: 'Fuzzy Bunny' },
  { to:'about', label: 'About' },
  // { to:'', label: '' },
];
export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.MenuContainer}>
        <Menu navigation={primary}/>
      </div>
      <h1> App </h1>
      <div className={styles.NavigationContainer}>
        <Navigation navigation={primary}/>
      </div>
      <User />
    </header>   
  );
}
    
