import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from 'User.css';

//user page which will be used for Auth. 
export default function Menu(){
  const [isOpen, setIsOpen] = useState(false);
  const className = classNames(styles.User, {
    [styles.Open]: !isOpen,
  });
  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className={className}>
        user
      <button onClick={handleClick}>v</button>
      <div className={styles.UserMenu}>
        <Link to="about">Profile</Link>
        <Link to="about">Sign Out</Link>
      </div>
    </div>
  );
}
