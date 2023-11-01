import React from 'react';

import GameStart from '@/components/GameStart';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <GameStart />
    </main>
  );
}
