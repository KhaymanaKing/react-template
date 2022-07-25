import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import './reset.css';
import './global.css';
import styles from './layout.css';

export default function Layout() {
  return (
    <div className={styles.Layout}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
