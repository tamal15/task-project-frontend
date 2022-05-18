import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
 
    return (
        <div>

<nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand d-flex align-items-center" href="https://www.google.com/">  <img src="http://www.logo-designer.co/wp-content/uploads/2017/10/2017-Green-Textile-rebranding-Signet-Mills-logo-design-3.png" alt="" width="50" height="49" className="d-inline-block align-text-top "/>
                <span className="ms-3 ">Zagroo Tech.</span></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse "  id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                  <li className="nav-item">
                  
                    <Link className="nav" to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                  
                    <Link className="nav" to="/add">AddProduct</Link>
                  </li>
                  <li className="nav-item">
                  
                    <Link className="nav" to="/about">About</Link>
                  </li>


            
                  



                
                 
                
                </ul>
               
              </div>
            </div>
          </nav>


    
            
        </div>
    );
};

export default Navigation;