import './landingPage.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import binance from './assets/Binance.png';
import bitcoin from './assets/Bitcoin.png';
import decrease from './assets/Decrease.png';
import dogecoin from './assets/Dogecoin.png';
import ethereum from './assets/Ethereum.png';
import increase from './assets/Increase.png';
import litecoin from './assets/Litecoin.png';
import solana from './assets/Solana.png';
import tether from './assets/Tether.png';
import usdCoin from './assets/USDCoin.png';

type props = { setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>> };

function LandingPage({ setIsLoggedIn }: props): JSX.Element {
  return (
    <main>
      <img src={binance} alt='binance' />
      <div>landing page</div>
    </main>
  );
}

export default LandingPage;
