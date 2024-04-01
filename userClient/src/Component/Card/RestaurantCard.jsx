import React, { Fragment, useEffect, useState } from 'react'
import { CDN_URL } from '../Utils/Constent'
import './RestauranrCard.css'
import { Link } from 'react-router-dom';
const RestaurantCard = ({cardInformation}) => {           
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    useEffect(() => {
        navigator.geolocation.watchPosition(async (position) => {
            let latitude =  await position.coords.latitude
            let longitude = await position.coords.longitude                        
            setLatitude(latitude)
            setLongitude(longitude);
        });       
    },[])
    return (        
        <Fragment>            
            {
                cardInformation.info.totalRatingsString.slice(0, 2) >= 10 &&        
                <div className="card overflow-hidden bg-transparent border-0 d-flex justify-content-center align-items-center " style={{width : "17rem", backgroundColor: "", height : "300px"}} >
                    <div className="imgContainer m-2 rounded-top-3" style={{backgroundImage : `url(${CDN_URL + cardInformation.info.cloudinaryImageId})`}}>                                                                                
                        <div className="vegImage " style={{position : 'relative', top : "-5px", right : "19px"}}>
                            {
                                cardInformation.info.veg &&
                                <img src="https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/vegetarian-icon.png" alt="" className=' overflow-hidden   h2-5 w-25' style={{transform : "rotate(310deg)"}} />                    
                            }
                        </div>
                        {
                            cardInformation.info.aggregatedDiscountInfoV3?.header != undefined &&
                            <div className="discountContainer fs-4 rounded-start-4 fw-bold bg-dark text-white" style={{marginTop : "0px", marginLeft : "10px", paddingLeft : "20px"}}>
                                {cardInformation.info.aggregatedDiscountInfoV3?.header}                          
                                <br/>
                                <p className='fw-normal' style={{fontSize : "13px", marginLeft : "90px"}}> 
                                    {cardInformation.info.costForTwo}                                
                                </p>
                            </div>                
                        }
                    </div>              
                    <div className="container">
                        <p className='fs-6 fw-bold d-flex justify-content-start w-100'>                     
                            {cardInformation.info.name}                        
                        </p>
                        <div className='d-flex justify-content-between align-items-center w-75' style={{marginTop : "-14px", height : "30px"}}>                         
                            <div className="ratings d-flex justify-content-evenly align-items-center">
                                <i className="bi bi-star-fill d-flex justify-content-center align-items-center rounded-pill bg-success text-white" style={{height : "25px", width : "25px"}}></i>                                                
                                <p className='fw-bold ms-1 d-flex align-items-center mt-3 justify-content-center '>
                                    {cardInformation.info.avgRating}  
                                    <span className='ps-2'>
                                        {cardInformation.info.totalRatingsString}  Order's
                                    </span>
                                </p>
                            </div>                      
                            <Link to={cardInformation.cta.link} className='text-decoration-none '>                     
                                <i className="bi bi-geo-alt-fill text-decoration-none fs-5 rounded-pill d-flex justify-content-center align-items-center text-white" style={{backgroundColor: "#fc8019", height : "25px", width : "25px"}}></i>
                            </Link>
                        </div>
                        <div className="container text-dark d-flex justify-content-start p-0">
                            {cardInformation.info.locality}
                        </div>
                    </div>
                </div>            
            }
        </Fragment>
    )
}

export default RestaurantCard