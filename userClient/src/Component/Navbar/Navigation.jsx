import React, { Fragment, useState } from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = ({setNavbar}) => {
    let [navigation, setNavigation] = useState(["Home", "About" , "Trading", "Restaurants"]);
    return (
        <Fragment>
            <div className="container-fluid bg-light h-25 d-flex justify-content-between align-items-center">
                <div className="logoIcon">
                    <img src="../images/brand_image.png" />
                </div>
                <div className="userAddress d-flex w-50 justify-content-between">                    
                    <div className="navIcons">
                        {
                            navigation.map((element, index) => (                                
                                <Link to={element.toLowerCase()} key={index} className='ms-3 text-decoration-none fs-5 text-dark'>{element}</Link>
                            ))
                        }
                    </div>                    
                    <div className="iconsContainer d-flex w-25 justify-content-evenly">
                        <Link to="/registration" onClick={() => setNavbar(false)}>
                            <div className="userProfile bg-black rounded-2">
                                <i className="bi bi-person-add text-white m-2 fs-5"></i>
                            </div>
                        </Link>
                        <div className="cartIcon bg-black rounded-2">
                            <i className="bi bi-cart fs-5 m-2 text-white"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="addressBar text-black d-flex justify-content-end me-4">                
                {/* Address Naya Bazar Ajmer Rajasthan */}
            </div>
        </Fragment>
    )
}

export default Navigation