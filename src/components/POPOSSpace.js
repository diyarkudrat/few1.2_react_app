import React from 'react';
import '../styles/POPOSSpace.css';
import { Link } from 'react-router-dom';

function POPOSSpace(props) {
    const { name, image, address, hours, id } = props;
    return (
        <div className="POPOSSpace">
            <Link to={`/details/${id}`}>
              <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
            </Link>
            <h1><Link to={`/details/${id}`}>{name}</Link></h1>
            <div className="space-info">
                <p className="space-address">{address}</p>
                <p className="space-hours">{hours}</p>
            </div>
        </div>
    );
}

export default POPOSSpace;