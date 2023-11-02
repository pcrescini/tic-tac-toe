import React from 'react';
import clsx from 'clsx';

export default Banner({ gameStatus, children }) {
  return (
    <div className={clsx({gameStatus}, banner)}>{children}</div>
  )
}