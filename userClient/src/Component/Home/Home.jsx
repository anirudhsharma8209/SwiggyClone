import React, { Fragment } from 'react'
import data from '../Data/mockData'
import RestaurantCard from '../Card/RestaurantCard'

const Home = () => {
    return (
        <Fragment>
            <div className="container-fluid mt-3" >                
                <div className="restaurantCard bg-light rounded-top-3 p-3 d-flex flex-wrap gap-4 align-items justify-content-center">
                    {
                        data.map((element, index) => (
                            <div key={index}>
                                <RestaurantCard cardInformation={element} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Home