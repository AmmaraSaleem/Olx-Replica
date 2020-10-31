import React, { Component } from 'react';
import { Header, Navbar,Footer } from '../components/Home'
import  {PopularSearch_Motercycle, Categories_Motercycle } from '../components/Motercycle'






class Motercycle extends Component {

    render() {
        return (
            <div>
                <Header />
                <Navbar  />
                <PopularSearch_Motercycle />
                <Categories_Motercycle/>
                <Footer/>
               
               


            </div>






        )
    }

}

export default Motercycle;