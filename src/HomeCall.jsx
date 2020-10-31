import React, { Component } from 'react';
import { Header, Navbar, Slider, Banner, Footer } from './components/Home'
import Card from './components/Card'

import Heading from './components/Heading'



import './App.css'


class Home extends Component {



  render() { // attribute=prop   App say data pass karan toh wo prop hota hai
    return (
      <div  >
        <Header />

        <Navbar />
        <Slider />


        <Heading />

        <Card />
        <Banner />
        <Footer />


      </div>



    )
  }
}








export default Home;
