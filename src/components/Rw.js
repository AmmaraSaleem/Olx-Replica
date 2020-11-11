import { connect } from 'react-redux'
import facebook_login from '../../src/store/action'
import SELLIMAGES from '../logos/Sell.PNG'
import SearchIcon from '@material-ui/icons/Search';

import React, { Component } from 'react';




class Long_search extends Component {




  render() {

    console.log('props=>', this.props)
    return (

      <div class="input-container">


        <input class="  input-field" type="text" placeholder="Find Cars, Mobile Phone andMore" name="usrnm" id="val" />
        <i class=" icon">  <SearchIcon /></i>
        <a href="" className="login"  >Login</a>


        <img data-toggle="modal" data-target="#myModal" src={SELLIMAGES} className="ml-4" alt="" />







        <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog">


            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">X</button>

              </div>
              <div class="modal-body">
                <div style={{ marginTop: "200px" , cursor:"pointer" }}>
                  <div className="auth"><p>Continue with phone</p></div>
                  <br />
                  <div className="auth" onClick={() => this.props.facebook_login(this.props.history)}> <p>Continue with Facebook </p> </div>

                  <br />
                  <div className="auth"><p>Continue with google</p></div>
                  <br />
                  <div className="auth"><p>Continue with google</p></div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div >







    )
  }

}




const mapStateToProps = (state) => ({
  users: state.users
})
const mapDispatchToProps = (dispatch) => ({
  // set_data:()=>dispatch(set_data()),
  facebook_login: (history) => dispatch(facebook_login(history)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Long_search)