import { Outlet } from 'react-router-dom';
import Header from './Header/Header.jsx';
import './reset.css';
import './global.css';
import styles from './Layout.css';

//Not sure how this all plays in really. I'm guessing its the
// general layout for each page
export default function Layout() {
  return (
    <>
      <div className={styles.Layout}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
