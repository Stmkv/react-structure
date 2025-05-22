import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/organisms/Header';
import styles from './MainLayout.module.css';

export const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};
