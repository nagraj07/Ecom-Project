import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Productpage from '../Components/Productpage'
import Watch from '../Components/Watch'
import Footer from '../Components/Footer'
import Sidemenu from '../Components/Sidemenu'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Watch />
      <div className='flex'>
        <Sidemenu/>

        <Productpage />
      </div>
      <Footer />
    </div>
  )
}

export default Home;