import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { CDN_URL, IMG_CDN_URL } from "../Utils/Constent";
import axios from 'axios'
const MenuCrousel = ({tranding}) => {    
    var crouselSetting = {        
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,        
    };       
    return !tranding ? console.log("Loader") :  (
        <div className="silder-container ms-5">
            <div>
                Anirud
            </div>
            <Slider {...crouselSetting}>                             
                    {
                        tranding.map((element, index) => (                                        
                            <div key={element.action.text} className="h-50">                                 
                                <img src={CDN_URL + element.imageId} className="img-fluid h-50 w-50 bg-dark" />
                            </div>                    
                        ))
                    }
                
            </Slider>
        </div>
    );
}
export default MenuCrousel;