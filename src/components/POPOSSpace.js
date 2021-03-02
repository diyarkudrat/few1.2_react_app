import React from 'react';
import '../styles/POPOSSpace.css';
import { Link } from 'react-router-dom';

function POPOSSpace(props) {
    const { name, image, address, hours, id } = props;
    return (
        <div className="POPOSSpace">
              <Link className="POPOSSpace" to={`/details/${id}`}><img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt="Hello" /></Link>
              <Link className="POPOSSpace-title" to={`/details/${id}`}><h1>{name}</h1></Link>
            <div className="POPOSSpace-info">
                <p className="space-address">{address}</p>
                <p className="space-hours">{hours}</p>
            </div>
        </div>
    );
}

export default POPOSSpace;