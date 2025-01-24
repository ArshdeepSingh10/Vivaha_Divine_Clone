import React from 'react'
import './Banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner:React.FC = () => {
  return (
    <>
    <div className="BannerImage d-flex justify-content-center align-items-center">
      <div className="Overlay"></div> 
     
      <h1 className='text-white  text-capitalize text-shadow z-2'>Be a part of Vivaha Divine to find you life partner</h1>
    </div>
    </>
  )
}

export default Banner