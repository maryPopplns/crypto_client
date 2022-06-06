import './landingPage.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Routes, Route } from 'react-router-dom';

import bitcoin from './assets/Bitcoin.png';
import ethereum from './assets/Ethereum.png';
import dashboard from './assets/Dashboard.png';

type props = { setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>> };

function LandingPage({ setIsLoggedIn }: props): JSX.Element {
  return (
    <main className='landing-page'>
      <header>header</header>
      <h1 className='landing-page-heading'>Coin Tracker</h1>
      <p className='landing-page-description'>Track your crypto portfolio</p>
      <div className='dashboard-wrapper'>
        <div className='dashboard-container'>
          <img className='dashboard-icon' src={dashboard} alt='dashboard' />
          <img className='bitcoin-icon coin' src={bitcoin} alt='bitcoin' />
          <img className='ethereum-icon coin' src={ethereum} alt='ethereum' />
        </div>
        <Button variant='contained'>Try It Free</Button>
      </div>
    </main>
  );
}

export default LandingPage;
