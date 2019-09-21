import React, {useState} from 'react';
import './Header.css';
import NavMenu from './NavMenu'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Header() {

    const [navMenuOpen, setNavMenuOpen] = useState(true);

    return(
        <div className='App-header'>
            <h1>Alex Minick</h1>
            <button 
                id='navMenuButton' 
                name="navMenu"
                 
                onClick={() => setNavMenuOpen(!navMenuOpen)}>
                <FontAwesomeIcon icon="bars" size='2x' color={navMenuOpen ? "lightgrey" : "rgb(31,36,22)"} />
            </button>
            {navMenuOpen ? <NavMenu /> : null}
        </div>
    )
}

export default Header