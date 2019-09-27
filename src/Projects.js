import React, {useState} from 'react';
import './Projects.css';

function Projects() {

    return (
        <div id='projects'>
            <h3>React</h3>
            <div className="projectsSub">
                <a className="projectLink" href="https://goofy-montalcini-2ef709.netlify.com/">Hangman</a>
                <a className="projectLink" href="https://vigilant-lichterman-f14f98.netlify.com/">Vocabulary Tic-Tac-Toe</a>
            </div>
            <h3>D3 Data visualization</h3>
        </div>
    )

}

export default Projects