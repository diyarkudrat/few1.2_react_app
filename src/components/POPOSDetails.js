import React from 'react';
import data from '../sfpopos-data.js';
import '../styles/POPOSDetails.css';
import POPOSFeature from './POPOSFeature.js';
import POPOSFeatureList from './POPOSFeatureList';

function POPOSDetails(props) {
    const { id } = props.match.params;
    const { images, title, desc, hours, features, geo } = data[id];

    return (
        <div className="POPOSDetails">
          <div className="POPOSDetails-image">
              <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt="header" />
          </div>

          <div className="POPOSDetails-info">
              <h1 className="POPOSDetails-title">{ title }</h1>
              <p className="POPOSDetails-desc">{ desc }</p>
              <p className="POPOSDetails-hours">{ hours }</p>
              <POPOSFeatureList features={features} />
              <p className="POPOSDetails-geo">{ geo.lat } { geo.lon }</p>
          </div>

        </div>
    );
}

export default POPOSDetails;