import React from 'react'
import '../pages/home.module.scss'
import HeroSection from '../components/Hero-section/hero-section'
import Navbar from '../components/Navbar/navbar'
import OurServices from '../components/Our-services/our-services'
import WhyChoose from '../components/Whychoose/whychoose'
import AboutUs from '../components/Aboutus/aboutus'
import CaseStudies from '../components/CaseStudies/caseStudies'


function Home() {
  return (
    <div >
      <Navbar />
      <HeroSection />
      <OurServices />
      <WhyChoose />
      <AboutUs />
      <CaseStudies />
      
    </div>
  )
}

export default Home
