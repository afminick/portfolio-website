import React, {useState} from 'react';
import './NavMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavMenu() {

    const [projectsMenu, setProjectsMenu] = useState(false);
    const [contactMenu, setContactMenu] = useState(false);

    return (
        <div id='navMenu'>
            <button 
                id='homeButton' 
                className="navSubMenuButton">
                Home
            </button>
            <button 
                className="navSubMenuButton" 
                onClick={() => setProjectsMenu(!projectsMenu)}>
                Projects
            </button>
            {projectsMenu ? <ProjectsMenu /> : null}
            <button 
                className="navSubMenuButton" 
                onClick={() => setContactMenu(!contactMenu)}
                style={!contactMenu ? {borderRadius: "0 0 5px 5px"} : null}>
                Contact
            </button>
            {contactMenu ? <ContactMenu /> : null}
        </div>
    )
}

function ContactMenu() {
    return (
        <div className='subMenu' style={{borderRadius: "0 0 5px 5px"}}>
            <a href="mailto:afminick@gmail.com"><FontAwesomeIcon icon="envelope"  /></a> 
            <a href="http://www.facebook.com/alexminick"><FontAwesomeIcon icon={['fab', 'facebook-square']}  /></a> 
            <a href="http://www.instagram.com/afminick"><FontAwesomeIcon icon={['fab', 'instagram']}  /></a> 
            <a href="http://www.twitter.com/afminick"><FontAwesomeIcon icon={['fab', 'twitter']}  /></a> 
        </div>
    )
}

function ProjectsMenu() {
    return (
        <div className='subMenu'>
            <a href="#projects">React</a>
        </div>
    )
}

export default NavMenu