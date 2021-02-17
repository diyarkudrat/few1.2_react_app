import React from 'react';
import POPOSSpace from './POPOSSpace';
import '../styles/POPOSList.css';
import data from '../sfpopos-data.json';

function POPOSList(props) {
    const spaces = data.map(({ title, address, images, hours }) => {
        if (hours.length === 0) {
            hours = "Unknown Hours"
        }
        
        return (
          <POPOSSpace key={title} name={title} address={address} image={images[0]} hours={hours} />
        )
    })

    return (
        <div className="POPOSList">
            { spaces }
        </div>
    );
}

export default POPOSList;