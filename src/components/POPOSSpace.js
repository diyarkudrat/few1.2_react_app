import React from 'react';
import '../styles/POPOSSpace.css';

function POPOSSpace(props) {
    const { name, image, address, hours } = props;
    return (
        <div className="POPOSSpace">
            <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
            <h1>{name}</h1>
            <div className="space-info">
                <p className="space-address">{address}</p>
                <p className="space-hours">{hours}</p>
            </div>
        </div>
    );
}

export default POPOSSpace;