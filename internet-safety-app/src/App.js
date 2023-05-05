import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import BackgroundImage from './components/images/BackgroundImage.jpg'
import Info from './components/Info'
import Game from './components/Game.js'
import Info from './components/Info.js';

function App() {
  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <NavBar />
<<<<<<< HEAD
=======
      <Game />
>>>>>>> 12c93946b3b567dd8c0910ed1cff92c83f820cde
      <Info />
    </div>
    
  );
}

export default App;
