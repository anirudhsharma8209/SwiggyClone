import React, { Fragment } from 'react'

const Footer = () => {
    return (
        <Fragment>
            <div className="container-fluid d-flex  justify-content-between align-items-center" style={{backgroundColor : "#fa8019", height: "200px"}}>
                <div className="first w-25 h-50  d-flex justify-content-center align-items-center">
                    <div className="logo d-block">
                        <center>
                            <img src="images/brand_image.png" className=' bg-light h-50 w-50' style={{mixBlendMode : "multiply"}} alt="" />                            
                            <p className='lead text-white fw-bold'>
                                May I Feed You
                            </p>
                        </center>                               
                    </div>
                </div>
                <div className="second w-25">
                    <div className="socailMedia d-flex text-white justify-content-center">
                        <p className='fs-4'>Social Media</p>
                    </div>
                    <div className="icons fs-4 d-flex justify-content-around align-items-center">
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-twitter-x"></i>
                        <i class="bi bi-meta"></i>
                    </div>
                </div>
                <div className="third w-25">
                    <div className="formContainer bg-light rounded-3 p-1" style={{height : "180px"}}>
                    <p className='lead text-center fw-bold'>Connect with us....</p>
                        <form action="">
                            <div className="form-group w-100 d-flex justify-content-between align-items-center">
                                <label htmlFor="" className='form-label'>Your name : </label>
                                <input type="text" className='form-input' placeholder='Enter your name ' name="" id="" />
                            </div>
                            <div className="form-group d-flex justify-content-between align-items-center mt-2">
                                <label htmlFor="" className='form-label'>Your email : </label>
                                <input type="text" className='form-input' placeholder='Enter your email ' name="" id="" />
                            </div>
                            <div className="form-group">
                                <button className='btn text-white' style={{backgroundColor : "#fa8019"}}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer