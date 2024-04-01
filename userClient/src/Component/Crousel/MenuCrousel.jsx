import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import { CDN_URL, IMG_CDN_URL } from "../Utils/Constent";
import data from '../Data/mockData'
import Loader from "../Loader/Loader";
const MenuCrousel = ({tranding}) => {    
    var crouselSetting = {        
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,        
    };       
    return !tranding ? <Loader /> :  (
        <Fragment>
            <div className="silder-container ms-5">                                  
                <Slider {...crouselSetting}>                             
                        {
                            tranding.map((element, index) => (                                        
                                <div key={element.action.text} className="h-50 ms-5">                                 
                                    <img src={CDN_URL + element.imageId} className="img-fluid h-50 w-50" />
                                </div>                    
                            ))
                        }                
                </Slider>
            </div>            
        </Fragment>
    );
}
export default MenuCrousel;