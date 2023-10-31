'use client';
import React from 'react';
import { motion } from 'framer-motion';

import styles from './Toggle.module.scss';

function Toggle({ value, onChange, ...delegated }) {
  return (
    <button
      type='button'
      role='switch'
      aria-checked={value}
      className={styles.wrapper}
      onClick={() => onChange(!value)}
      {...delegated}
    >
      <motion.span
        initial={false}
        className={styles.ball}
        transition={{
          ease: 'easeOut',
          duration: 0.2,
        }}
        animate={{
          x: value ? '100%' : '0%',
        }}
      />
    </button>
  );
}

export default Toggle;
