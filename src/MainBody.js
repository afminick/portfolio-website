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
            <div>
                <p>Hello World</p>
            </div>
        )
    }
}

export default MainBody