'use client';
import React from 'react';
import { motion } from 'framer-motion';

import XMarkIcon from '@/components/XMarkIcon';
import OMarkIcon from '@/components/OMarkIcon';

import styles from './SelectPlayerMark.module.scss';

export default function SelectPlayerMark({ value, setPlayerMark }) {
  return (
    <div className={styles.selectMark}>
      <input
        type='radio'
        name='player-mark'
        id='player-mark-x'
        value='X'
        checked={value === 'X'}
        onChange={(event) => {
          setPlayerMark(event.target.value);
        }}
      />
      <label htmlFor='player-mark-x'>
        <XMarkIcon />
      </label>
      <input
        type='radio'
        name='player-mark'
        id='player-mark-o'
        value='O'
        checked={value === 'O'}
        onChange={(event) => {
          setPlayerMark(event.target.value);
        }}
      />
      <label htmlFor='player-mark-o'>
        <OMarkIcon />
      </label>
    </div>
  );
}
