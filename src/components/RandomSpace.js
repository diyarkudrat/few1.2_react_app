import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/RandomSpace.css';
import data from '../sfpopos-data.json';

function RandomSpace(props) {
    const history = useHistory();

    const handleRandom = (e) => {
        const id = Math.floor(Math.random() * data.length);
        history.push(id);
    }

    return (
        <div className="RandomSpace">
          <button onClick={(e) => handleRandom(e)}>
              Show me a Random Space!
          </button>
        </div>
    );
}

export default RandomSpace;