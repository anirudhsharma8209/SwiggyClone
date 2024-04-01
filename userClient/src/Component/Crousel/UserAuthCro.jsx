import React, { Component } from "react";
import Slider from "react-slick";
import { crousel } from "../Data/userAuthCorusel.js";

const UserAuthCro = () => {    
    const settings = {
        // dots: true,
        infinite: true,
        fade: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };
    return (
        <div className="slider-container overflow-hidden">      
            <Slider {...settings}>
                {
                    crousel.map((Element, index) => (
                        <div className="" key={index}>
                            <img src={Element.url} alt="" style={{height : "592px", width: "100%"}} />
                        </div>                                              
                    ))
                }
            </Slider>
        </div>
    );
}

export default UserAuthCro;
