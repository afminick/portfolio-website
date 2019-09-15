import React, {useState} from 'react';
import './Header.css'

function Header() {

    const [navMenuOpen, setNavMenuOpen] = useState(false);

    return(
        <div className='App-header'>
            <h1>Alex Minick</h1>
            <button name="navMenu" onClick={() => setNavMenuOpen(!navMenuOpen)}>{navMenuOpen ? 'Close' : 'Open'}</button>
        </div>
    )
}

export default Header