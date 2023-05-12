import './NavBar.css'
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="nav-logo">
                <h1>Scammio</h1>
            </div>
            <div className='pages'>
                <Link to="/info">Information</Link>
                <Link to="/game">Game</Link>
            </div>
        </div>
    )
}

export default NavBar