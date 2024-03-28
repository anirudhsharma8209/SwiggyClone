import React, { Fragment, useEffect, useState } from 'react'
import Slider from "react-slick";
import { IMG_CDN_URL } from '../Constant';
import axios from 'axios'
import './Crousel.css'
const Crousel = () => {    
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true
    };
    const [restaurant, setRetaurant] = useState();
    const fetchRestaurant = async () => {
        await axios.get("https://food-sale-server.vercel.app/api/restaurants").then((data) => setRetaurant(data?.data?.data?.cards[0].card.card.gridElements.infoWithStyle.info))
    }
    useEffect( () => {
        fetchRestaurant();        
    }, [])
    return (
        <div className="container  mt-4">      
            <div className="headerText lead">
                What's on your mind...?
            </div>          
            <Slider {...settings}>
              {
                restaurant != undefined &&
                restaurant.map((Element, index) => (
                    <img src={IMG_CDN_URL + Element.imageId} className='img-fluid h-50 w-50 mt-2' key={index} alt="" />                    
                ))
              }
            </Slider>
        </div>
    );
}

export default Crousel;