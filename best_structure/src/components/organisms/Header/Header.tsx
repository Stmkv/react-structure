import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/dashboard" className={styles.logo}>
        ReactApp
      </Link>
      <nav>
        <Link to="/dashboard" className={styles.navLink}>Dashboard</Link>
        <Link to="/login" className={styles.navLink}>Logout</Link>
      </nav>
    </header>
  );
};
