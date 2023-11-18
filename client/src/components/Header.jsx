import React from 'react';
import styles from '../styles/Header.module.css'; // Import the CSS module
const Header = () => {
  return (
    <footer className={styles.header}>
      {/* <h1>DSA Tracker</h1> */}
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="/">Home</a></li>
          <li className={styles.navItem}><a href="/about">About</a></li>
          <li className={styles.navItem} ><a href="/SignIn">SignIn</a></li>
          <li className={styles.navItem} ><a href="/SignUp">SignUp</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Header;