import React, { Fragment } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navigation from './Component/Navbar/Navigation'
import Header from './Component/Header/Header'
const App = () => {
  return (
    <Fragment>
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route element={<Header />} path='/' />
            </Routes>
        </BrowserRouter>
    </Fragment>
  )
}

export default App