import React, { useState } from 'react';
import POPOSSpace from './POPOSSpace';
import '../styles/POPOSList.css';
import data from '../sfpopos-data.js';

function POPOSList(props) {
    const [query, setQuery] = useState('');

    const spaces = data.filter((obj) => {
        const inTitle = obj.title.toLowerCase().includes(query.toLowerCase());
        const inAddress = obj.title.toLowerCase().includes(query.toLowerCase());

        return inTitle | inAddress;
    }).map((obj) => {
        const { title, address, images, id } = obj;
        let { hours } = obj;

        if (hours.length === 0) {
            hours = "Unknown Hours"
        }
        
        return (
          <POPOSSpace 
            id={id} 
            key={title} 
            name={title} 
            address={address} 
            image={images[0]} 
            hours={hours} 
          />
        )
    })

    return (
        <div className="POPOSList">
          <form>
              <input
                value={query}
                placeholder="Search"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit">Submit</button>
          </form>
          { spaces }
        </div>
    );
}

export default POPOSList;