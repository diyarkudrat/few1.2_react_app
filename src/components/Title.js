import React from 'react';
import '../styles/Title.css';
import { NavLink } from 'react-router-dom';
import RandomSpace from './RandomSpace';

function Title(props) {
    return (
        <div className="container">
            <div className="Title">
              <header>
                <h1>SF POPOS</h1>
                <div className="Title-Subtitle"><h5>San Francisco's Privately Owned Public Spaces</h5></div>

                <div>
                    <NavLink 
                      className="nav-link" 
                      activeClassName="nav-link-active"
                      exact
                      to="/">List</NavLink>
                    <NavLink 
                      className="nav-link" 
                      activeClassName="nav-link-active"
                      exact
                      to="/about">About</NavLink>
                    <RandomSpace />
                </div>
              </header>
            </div>
        </div>
    );
}

export default Title;