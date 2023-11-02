import React from 'react';
import Banner from '@/components/Banner';

export default function LostBanner() {
  return <Banner gameStatus={lost}>Oh no, you lost...</Banner>;
}
