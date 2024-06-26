import React, { Fragment, useState } from 'react'
import categories from '../Data/dataArrays'
import MenuModal from '../Modal/MenuModal'
import Footer from '../Footer/Footer'
import SubMenu from '../SubMenu/SubMenu'
import Home from '../Home/Home'
const Header = () => {  
  const [subMenu,setSubMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();
  return subMenu ? <SubMenu selectedCategory={selectedCategory} /> : (
    <Fragment>
      <TopHeader setSubMenu={setSubMenu} setSelectedCategory={setSelectedCategory} />
      <MenuModal />
      <Home />
      <Footer />
    </Fragment>
  )
}



const TopHeader = ({setSubMenu, setSelectedCategory}) => {
  return (
    <Fragment >
      <div className="container">
        <p align="center" className=' fs-2 lead'>What's on your mind....?</p>
      </div>
      <div className="container rounded-3 bg-black p-3 d-flex justify-content-between">
        {
          categories.map((element, index) => (
            <div className="card bg-black" style={{ width: '18rem' }} key={index} onClick={() => {setSubMenu(true); setSelectedCategory(element)}}>
              <p className='text-white'>{element.name}</p>
              <img src={element.photo_url} className='img-fluid h-75 w-75 rounded-1 ' alt="" />
            </div>
          ))
        }
        <button type="button" className="btn bg-light rounded-3 h-25" data-bs-toggle="modal" data-bs-target="#exampleModal" >
          <img src="https://cdn-icons-png.flaticon.com/512/4813/4813075.png" alt="" style={{ height: "70px", mixBlendMode: 'darken' }} />
        </button>
      </div>
    </Fragment>
  )
}

export default Header