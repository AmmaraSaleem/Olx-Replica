import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import HomeCall from '../HomeCall'
import MobilephoneCall from '../components/MobilephoneCall'
import CarsCall from '../components/CarsCall'
import MotercycleCall from '../components/MotercycleCall'
import { Homeitem_card1,Homeitem_card2, Homeitem_card3, Homeitem_card4, Homeitem_card5, Homeitem_card6, Homeitem_card7, Homeitem_card8, Homeitem_card9, Homeitem_card10, Homeitem_card11, Homeitem_card12, Itemcard1, Itemcard2 } from '../components/item'

class AppRouter extends Component {

  render() {
    return (

      <Switch>
        <Route exact path='/' component={HomeCall} />
        <Route path='/mobilephone' component={MobilephoneCall} />
        <Route path='/home_card1' component={Homeitem_card1} />
        <Route path='/home_card2' component={Homeitem_card2} />
        <Route path='/home_card3' component={Homeitem_card3} />
        <Route path='/home_card4' component={Homeitem_card4} />
        <Route path='/home_card5' component={Homeitem_card5} />
        <Route path='/home_card6' component={Homeitem_card6} />
        <Route path='/home_card7' component={Homeitem_card7} />
        <Route path='/home_card8' component={Homeitem_card8} />
        <Route path='/home_card9' component={Homeitem_card9} />
        <Route path='/home_card10' component={Homeitem_card10} />
        <Route path='/home_card11' component={Homeitem_card11} />
        <Route path='/home_card12' component={Homeitem_card12} />
        <Route path='/cars' component={CarsCall} />
        <Route path='/motercycle' component={MotercycleCall} />
        <Route path='/card1' component={Itemcard1} />
        <Route path='/card2' component={Itemcard2} />




      </Switch>



    )
  }
}

export default AppRouter;

