import './App.css';
import NavBar from './components/NavBar.js';
import BackgroundImage from './components/images/BackgroundImage.jpg'
import Game from './components/Game.js';
// import Info from './components/Info.js';
import React, { useState } from "react";
import ReactModal from 'react-modal';
import Flag1Found from './components/FlagCount.js';

function App() {

  const [foundFlags, setFoundFlags] = useState(0);

  function increaseFoundFlags() {
        setFoundFlags(foundFlags+1);
  }

  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <NavBar />
      {/* <Info /> */}
      <p id="red-flags-counter">Red flags found: {foundFlags}/11</p>
      <Game onFlagFound={increaseFoundFlags} />
    </div>
    
  );
}

export default App;