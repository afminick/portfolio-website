import React, {useState} from 'react';
import './NavMenu.css';

function NavMenu() {

    const [projectsMenu, setProjectsMenu] = useState(false);
    const [contactMenu, setContactMenu] = useState(false);

    return (
        <div id='navMenu'>
            <p>Home</p>
            <p>Projects</p>
            <p>Contact</p>
        </div>
    )
}

export default NavMenu