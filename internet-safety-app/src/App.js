import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import BackgroundImage from './components/BackgroundImage.jpg'
import Game from './components/Game.js'
import Info from './components';

function App() {
  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <NavBar />
      <Game />
      <Info />
    </div>
    
  );
}

export default App;
