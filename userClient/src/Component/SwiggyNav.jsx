import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './SwiggyNav.css'
import Home from './Home'
const SwiggyNav = () => {    
    const [navigationTabs, setNavigationTabs] = useState([{
        text : "Home",
        icon : "<bi bi-house"
    }, 
    {
        text : "About",
        icon : "bi bi-file-person"
    },
    {
        text : "Tranding",
        icon : "bi bi-heart-fill"
    },
    {
        text : "Restaurant",
        icon : "bi bi-bell"
    },
    {
        text : "Contact Us",
        icon : "bi bi-person-lines-fill"
    }]);    
    return (
        <Fragment>
            <nav className='d-flex justify-content-between align-items-center'>
                <div className="logoIcon">
                    <img src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" className='m-3'  />
                </div>
                <div className="navigation d-flex me-4">
                    {
                        navigationTabs.map((elem, index) => (
                            <>
                                <div className="textIcon">
                                    <Link to={elem.text.toLowerCase()} className='ms-3 text-decoration-none text-dark fs-5'>{elem.text}</Link>                        
                                </div>
                                <div className="subIcon ms-2 fs-5">                                    
                                    <i className={elem.icon}></i>
                                </div>
                            </>                  
                        ))
                    }
                </div>
            </nav>
        </Fragment>
    )
}

export default SwiggyNav