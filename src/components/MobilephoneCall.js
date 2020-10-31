import React, { Component } from 'react';
import { Header, Navbar,Footer } from '../components/Home'
import  {PopularSearch,Categories} from '../components/Mobilephone'






class Mobilephone extends Component {

    render() {
        return (
            <div>
                <Header />
                <Navbar/>
                <PopularSearch />
                <Categories/>
                <Footer/>
               
               


            </div>






        )
    }

}

export default Mobilephone;