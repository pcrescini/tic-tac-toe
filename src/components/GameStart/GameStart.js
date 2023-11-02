'use client';
import React from 'react';
import clsx from 'clsx';

import Logo from '@/components/Logo';
import SelectPlayerMark from '@/components/SelectPlayerMark';
import styles from './GameStart.module.scss';

export default function GameStart() {
  const [isEnabled, setIsEnabled] = React.useState(false);

  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.card}>
        <strong>Pick Player 1's Mark</strong>
        <SelectPlayerMark value={isEnabled} onChange={setIsEnabled} />
        <span className={styles.note}>Remember: X Goes First</span>
      </div>
      <button className={clsx('primary', 'large')}>New Game (vs CPU)</button>
      <button className={clsx('secondary', 'large')}>
        New Game (vs Player)
      </button>
    </div>
  );
}
