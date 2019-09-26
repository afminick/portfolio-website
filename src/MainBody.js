import React from 'react';
import './MainBody.css';
import Projects from './Projects';

class MainBody extends React.Component {
    constructor() {
        super();
        this.state = {
            navMenuOpen: false
        }
    }

    render() {
        return (
            <div className="mainBody">
              <div className="bio">
                <p>Hello World</p>
              </div>
              <div className="projects">
                <Projects />
              </div>
            </div>
            
        )
    }
}

export default MainBody