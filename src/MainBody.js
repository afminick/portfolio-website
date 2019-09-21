import React from 'react';
import './MainBody.css';

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
              <div className="mainOne">
                <p>Hello World</p>
              </div>
              <div className="mainTwo">
                <p>Projects I'm working on</p>
              </div>
            </div>
            
        )
    }
}

export default MainBody