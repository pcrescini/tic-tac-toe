'use client';
import React from 'react';
import { motion } from 'framer-motion';

import XMarkIcon from '@/components/XMarkIcon';
import OMarkIcon from '@/components/OMarkIcon';

import styles from './SelectPlayerMark.module.scss';

export default function SelectPlayerMark({ value, onChange, ...delegated }) {
  return (
    <div className={styles.selectMark}>
      <XMarkIcon />
      <OMarkIcon />
    </div>
  );
}
