import React, { Fragment } from 'react'
import UserAuthCro from '../Crousel/UserAuthCro'


const IMG_PATH = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const UserRegistration = ({setNavbar}) => {
  return (
    <Fragment>
        <div className="bannerContainer  container-fluid m-0 p-0 d-flex justify-content-center align-items-center">          
          <div className="leftSide w-50" style={{ backgroundImage : `url(${IMG_PATH})`, backgroundSize : "cover", height : "100vh"}} >              
              <input type="text" className="form-input w-50" placeholder='Enter Your Email : ' />
              <button onClick={() => {setNavbar(true)}}>True</button>                              
          </div>
          <div className="rightSide w-50">
              <UserAuthCro />
          </div>
        </div>              
    </Fragment>
  )
}

export default UserRegistration