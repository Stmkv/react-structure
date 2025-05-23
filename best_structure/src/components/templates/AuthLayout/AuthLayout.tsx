import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.css';

export const AuthLayout = () => {
  return (
    <div className={styles.authWrapper}>
      <div className={styles.authBox}>
        <Outlet />
      </div>
    </div>
  );
};
