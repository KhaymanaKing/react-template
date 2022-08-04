import { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation.jsx';
import styles from './Menu.css';
import classNames from 'classnames';

//this supposed to be a popout menu. I need to refactor it to work properly
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const className = classNames(styles.Menu, {
    [styles.Open]: isOpen,
  });

  const handleClick = (e) => { 
    e.stopPropagation();
    setIsOpen((isOpen) => !isOpen);
  };
  
  useEffect(() => {
    if (!isOpen) return;

    const clickHandler = () => setIsOpen(false);
    document.addEventListener('click', clickHandler);
    
    const keyHandler = (e) => {
      if (e.key !== 'Escape') return;
      clickHandler();
    };
    document.addEventListener('keydown', keyHandler);
    
    return() => {
      document.removeEventListener('click', clickHandler);
      document.removeEventListener('keydown', keyHandler);
    };
  }, [isOpen]);

  return(
    <button className={className} onClick={handleClick}>
      <div className={styles.MenuContainer}>
        <Navigation />
      </div>
    </button>
  );
}
