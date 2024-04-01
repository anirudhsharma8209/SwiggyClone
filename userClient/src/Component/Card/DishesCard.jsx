import React, { Fragment } from 'react'
import './DishesCard.css'
import { ingredients } from '../Data/dataArrays'
import axios from 'axios'
const DishesCard = ({image ,dishData, selectedCategory}) => {
  // const checkUrl  = async (url) => {
  //   const res = await fetch(url, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json'}
  //   });
  //   const buff = await res.blob();
  //   return buff.type.startsWith('image/')
  // }
  return (
    <Fragment>                     
      {
        console.log(ingredients)
      }              
      <div className="card overflow-hidden" style={{width : "15rem", height : "200px"}} >                    
        <div className="imageContainer d-flex justify-content-end align-items-end overflow-hidden align-items-top h-100" style={{backgroundImage: `url(${image})`, backgroundSize : "cover", backgroundPosition : "center"}}>             
        {/* {checkUrl(image)?.then((data) => console.log(data))} */}
          {/* <button className='btn h-25 text-white fw-bold m-2' style={{backgroundColor : "#fa8c19"}}>View Detail</button> */}
        </div>                    
      </div> 
    </Fragment>
  )
}

export default DishesCard