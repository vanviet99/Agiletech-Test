import React from 'react'
import Header from '../Header/Header'
import Features from '../Features/Features'
import Testimonials from '../Testimonials/Testimonials'
import Banner from '../Banner/Banner'
import Footer from '../footer/Footer'
import './home.css'
function Home() {
  return (
    <div className='main'>
         <Header></Header>
          <Banner></Banner>
          <Features></Features>
          <Testimonials></Testimonials>
          <Footer></Footer>
    </div>
  )
}

export default Home