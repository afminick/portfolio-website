import React, {useState} from 'react';
import './Header.css';
import NavMenu from './NavMenu'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Header() {

    const [navMenuOpen, setNavMenuOpen] = useState(false);

    return(
        <div className='App-header'>
            <h1>Alex Minick</h1>
            <button 
                id='navMenuButton' 
                name="navMenu"
                style={navMenuOpen ? {boxShadow: '-1px -1px 1px 1px rgba(255,255,255,0.3)'} : null} 
                onClick={() => setNavMenuOpen(!navMenuOpen)}>
                <FontAwesomeIcon icon="bars" size='2x' color="yellow" />
            </button>
            {navMenuOpen ? <NavMenu /> : null}
        </div>
    )
}

export default Header