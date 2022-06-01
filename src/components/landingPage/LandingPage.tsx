import './landingPage.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

type props = { setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>> };

function LandingPage({ setIsLoggedIn }: props): JSX.Element {
  return (
    <main>
      <div>landing page</div>
    </main>
  );
}

export default LandingPage;
