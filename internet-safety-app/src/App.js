import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import BackgroundImage from './components/BackgroundImage.jpg'

function App() {
  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <NavBar />
    </div>
    
  );
}

export default App;
