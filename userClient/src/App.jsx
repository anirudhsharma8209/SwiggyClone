import React, { Fragment, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navigation from './Component/Navbar/Navigation'
import Header from './Component/Header/Header'
import UserRegistration from './Component/UserAuthoncation/UserRegistration'
import SubMenu from './Component/SubMenu/SubMenu'
import About from './Component/About/About'
const App = () => {
  const [navbar, setNavbar] = useState(true);
  return (
    <Fragment>
        <BrowserRouter>
        {
          console.log(navbar)
        }
            {navbar == true && <Navigation setNavbar={setNavbar} /> }
            <Routes>                
                {['home', '/'].map(path => <Route element={<Header />} path={path}  />)}
                <Route element={<SubMenu />} path='/submenu' />
                <Route element={<UserRegistration setNavbar={setNavbar} />} path='registration' />
                <Route element={<About />} path='/about' />
            </Routes>
        </BrowserRouter>
    </Fragment>
  )
}

export default App