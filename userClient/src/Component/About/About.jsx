import React, { Fragment } from 'react'
import './About.css'
const bannerSection = "https://images.unsplash.com/photo-1585759071429-1646f76ab8c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const About = () => {
    
    return (
        <Fragment>
            <div className="container d-flex justify-content-center align-items-end" style={{fontSize : "30px"}}>
                <span className='fs-1 fw-bold' style={{color : "#fc8019"}}>A</span> <span className='fs-4 ms-1'>bout Us</span>
            </div>
            <div className="aboutBannerSection container-fluid  d-flex justify-content-around align-content-center">
                <div className="customerReview1 me-3 ">
                    <div className="detailsSection">
                        <div className="userImg d-flex justify-content-center align-items-center">
                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='rounded-pill' style={{height : "70px", width : "70px"}} />
                        </div>
                        <p className='text-center'>
                            Review one
                        </p>
                    </div>
                    <div className="bar d-flex justify-content-center align-items-center">                        
                        <div style={{width : "170px", height : "2px", backgroundColor : "black"}} className='mt-3 text-center' > </div>
                    </div>
                </div>
                <div className="imgSection border" style={{height : "400px", width : "700px"}}>                        
                    <img src="https://images.unsplash.com/photo-1585759071429-1646f76ab8c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='' style={{height : "100%", width : "100%"}} />
                </div>
                <div className="customerReview2 ms-3 text-white">                    
                    <div className="detailsSection">
                        <div className="userImg  d-flex justify-content-center align-items-center" >
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='rounded-pill' style={{height : "70px" ,width : "70px"}} alt="" />
                        </div>
                        <p className='text-center'>
                            Review two
                        </p>
                    </div>
                    <div className="bar d-flex justify-content-center align-items-center">
                        <div style={{width : "170px", height : "2px", backgroundColor : "#fc8019"}} className='mt-3 text-center' > </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About