import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { recipes } from '../Data/dataArrays'
import DishesCard from '../Card/DishesCard';
const SubMenu = ({ selectedCategory }) => {
    const [filteredDishes, setFilteredDishes] = useState();
    const filterSelectedCategoryDishes = () => {
        const filteredDishes = recipes.filter((element) => element.categoryId == selectedCategory.id)
        setFilteredDishes(filteredDishes);
    }
    useEffect(() => {
        filterSelectedCategoryDishes()
        console.log(selectedCategory)
    }, [])
    return (
        <Fragment>            
            <div className="bannerContainer d-block">
                <div className="topSection d-flex justify-content-around align-items-top p-3">
                    <div className="leftSide w-50 rounded"  style={{height : "300px" , backgroundImage : `url(${selectedCategory.photo_url})`, backgroundSize : "cover", backgroundPosition : "center"}}>
                    
                    </div>
                    <div className="rightSide w-50 ms-3 overflow-scroll text-center border " style={{height : '300px'}}>
                        <h1>{selectedCategory.name}</h1>
                        <p className='text-justify'>                                                   
                            {
                                filteredDishes != undefined &&
                                filteredDishes.map((element) => (
                                    filteredDishes[element.categoryId]?.description 
                                ))
                            }                         
                        </p>                     
                    </div>
                </div>
                <div className="bottomSection flex-wrap p-3 container gap-3 border d-flex justify-content-around">                                        
                    {
                        filteredDishes != undefined &&
                        filteredDishes.map((element, index) => (
                            <DishesCard image={element.photo_url} dishData={element} />
                        ))                        
                    }
                </div>
            </div>             
        </Fragment >
    )
}

export default SubMenu;