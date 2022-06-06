import './landingPage.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ethereum from './assets/Ethereum.png';
import bitcoin from './assets/Bitcoin.png';
import dashboard from './assets/Dashboard.png';

// import binance from './assets/Binance.png';
// import decrease from './assets/Decrease.png';
// import dogecoin from './assets/Dogecoin.png';
// import increase from './assets/Increase.png';
// import litecoin from './assets/Litecoin.png';
// import solana from './assets/Solana.png';
// import tether from './assets/Tether.png';
// import usdCoin from './assets/USDCoin.png';
// import arm from './assets/Arm.png';

type props = { setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>> };

function LandingPage({ setIsLoggedIn }: props): JSX.Element {
  return (
    <main className='landing-page'>
      <header>header</header>
      <h1 className='landing-page-heading'>Coin Tracker</h1>
      <div className='dashboard-container'>
        <img className='dashboard-icon' src={dashboard} alt='dashboard' />
        <img className='ethereum-icon coin' src={bitcoin} alt='bitcoin' />
        <img className='bitcoin-icon coin' src={ethereum} alt='ethereum' />
      </div>
    </main>
  );
}

export default LandingPage;
