import { Link } from 'react-router-dom';
import styles from './Navigation.css';

//navigation links for the popout menu. Links work menu does not as intended.
export default function Navigation() {
  return(
    <nav className={styles.Navigation}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="list">List</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="pokedex">Pokedex</NavLink>
    </nav>
  );
}

// eslint-disable-next-line react/prop-types
function NavLink({ children, ...rest }) {
  return (
    <Link className="label-text" {...rest}>
      {children}
    </Link>
  );
}
