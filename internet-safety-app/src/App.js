import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import BackgroundImage from './components/images/BackgroundImage.jpg'
import Info from './components/Info'
import Game from './components/Game.js'

function App() {
  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <NavBar />
      <Info />
    </div>
    
  );
}

export default App;
