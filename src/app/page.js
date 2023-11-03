import React from 'react';

import TicTacToe from '@/components/TicTacToe';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <TicTacToe />
    </main>
  );
}
