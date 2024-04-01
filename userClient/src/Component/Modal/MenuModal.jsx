import React, { Fragment, useEffect, useState } from 'react'
import MenuCrousel from '../Crousel/MenuCrousel'
import axios from 'axios'

const MenuModal = () => {    
    const [tranding, setTranding] = useState()
    const fetchDishes = async () => {
        await axios.get('https://food-sale-server.vercel.app/api/restaurants').then(data => setTranding(data?.data?.data?.cards[0].card.card?.imageGridCards?.info));
      }
      useEffect(() => {
          fetchDishes();
      }, [])
    return (
        <Fragment>            
            <div className="modal modal-xl fade"  style={{height: '600px'}} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Our Dishes</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">                        
                            <MenuCrousel tranding={tranding} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn text-white" style={{backgroundColor: '#fc8019'}} data-bs-dismiss="modal">Close</button>                            
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MenuModal