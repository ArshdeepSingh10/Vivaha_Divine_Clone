import React from 'react'
import Banner from './Banner/Banner'
import AboutUs from './AboutUs/AboutUs'
import '../../index.css'
import SuccessStories from './SuccessStories/SuccessStories'
import Proccess from './Proccess/Proccess'
import Features from './Features/Features'
import ContactUs from './ContactUs/ContactUs'
import Footer from '../Footer/Footer'

const Index:React.FC = () => {
  return (
    <>
    <Banner/>
    <AboutUs/>
    <SuccessStories/ >
    <Proccess/>
    <Features/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default Index;