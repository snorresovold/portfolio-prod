import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Stack from '../components/Stack';

function Frontpage() {
  return (
    <div>
      <Navigation />
      <Header />
      <Stack />
    </div>
  );
}

export default Frontpage