import './App.css';
import React, { useState } from 'react';
import LandingPage from './components/landingPage/LandingPage';

function App(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <>
      {!isLoggedIn && <LandingPage setIsLoggedIn={setIsLoggedIn} />}
      {isLoggedIn && <div>logged in</div>}
      {/* {isLoggedIn && <Dashboard />} */}
    </>
  );
}

export default App;
