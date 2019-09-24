import React, {useState} from 'react';
import './NavMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavMenu() {

    const [projectsMenu, setProjectsMenu] = useState(false);
    const [contactMenu, setContactMenu] = useState(true);

    return (
        <div id='navMenu'>
            <button className="navSubMenuButton">Home</button>
            <button className="navSubMenuButton" onClick={() => setProjectsMenu(!projectsMenu)}>Projects</button>
            <button className="navSubMenuButton" onClick={() => setContactMenu(!contactMenu)}>Contact</button>
            {contactMenu ? <ContactMenu /> : null}
        </div>
    )
}

function ContactMenu() {
    return (
        <div className='subMenu'>
            <a href="mailto:afminick@gmail.com"><FontAwesomeIcon icon="envelope" size='2x' /></a> 
            <a href="http://www.facebook.com/alexminick"><FontAwesomeIcon icon={['fab', 'facebook-square']} size='2x' /></a> 
            <a href="http://www.instagram.com/afminick"><FontAwesomeIcon icon={['fab', 'instagram']} size='2x' /></a> 
            <a href="http://www.twitter.com/afminick"><FontAwesomeIcon icon={['fab', 'twitter']} size='2x' /></a> 
        </div>
    )
}

export default NavMenu