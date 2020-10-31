import React, { Component } from 'react';
import { Header, Navbar,Footer } from '../components/Home'
import  {PopularSearch_cars,Categories_cars} from '../components/Car'




function CarsCall() {

    return (
      <>
  
 
                  <Header />
                  <Navbar />
                  <PopularSearch_cars />
                  <Categories_cars/>
                  <Footer/>
                 
                 
  
  
            
  
      </>
  
    )
  }
  export default CarsCall