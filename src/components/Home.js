import React, { Component } from 'react';
import LOCOIMAGES from '../logos/Capture.PNG'
import SELLIMAGES from '../logos/Sell.PNG'
import SearchIcon from '@material-ui/icons/Search';
import SLIDERIMAGES from '../logos/slider.png'

import FOOTERIMAGE from '../logos/footer1.png'
import GOOGLEAPP from '../logos/googleApp.PNG'
import APPSTORE from '../logos/Appstore.PNG'
import SocialFollow from '../socialFollow'
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'
import facebook_login from '../../src/store/action'
import Long_search from '../components/Rw'










class Header extends Component {

  render() {

    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light main_navbar ">

        <Logo />
        <Textfield />
        <Long_search />

      </nav>


    )
  }
}



class Logo extends Component {

  render() {
    return (

      <div>
        <img src={LOCOIMAGES} className="" alt="" />


      </div>

    )
  }
}



function Textfield() {
  return (

    <select class="ui dropdown"><i> <SearchIcon /></i>


      <option>Pakistan</option>



      <option value="0" style={{ fontSize: "20px" }}>Female</option>
    </select>
  );
}
// class Redux extends Component {




//   render() {



//     return (

//       <div>

//         <button onClick={() => this.props.facebook_login(this.props.history)}>Facebook login </button>
//       </div>






//     )
//   }

// }
// class Long_search extends Component {




//   render() {

//     console.log('props=>', this.props)
//     return (

//       <div class="input-container">


//         <input class="  input-field" type="text" placeholder="Find Cars, Mobile Phone andMore" name="usrnm" id="val" />
//         <i class=" icon">  <SearchIcon /></i>
//         <a href="" className="login"  >Login</a>


//         <img data-toggle="modal" data-target="#myModal" src={SELLIMAGES} className="ml-4" alt="" />







//         <div class="modal fade" id="myModal" role="dialog">
//           <div class="modal-dialog">


//             <div class="modal-content">
//               <div class="modal-header">
//                 <button type="button" class="close" data-dismiss="modal">X</button>

//               </div>
//               <div class="modal-body">
//                 <div style={{ marginTop: "200px" }}>
//                   <div className="auth"><p>Continue with phone</p></div>
//                   <br />
//                   <Redux />

//                   <br />
//                   <div className="auth"><p>Continue with google</p></div>
//                   <br />
//                   <div className="auth"><p>Continue with google</p></div>
//                 </div>

//               </div>

//             </div>

//           </div>
//         </div>

//       </div >







//     )
//   }

// }

class Navbar extends Component {

  render() {

    return (
      <nav class="navbar navbar-expand-lg navbar-light navbar_shadow">
        <a class="navbar-brand" href="#">





          <NavDropdown title="Categories" id="collasible-nav-dropdown" style={{ padding: "10px" }}>



            <Container>
              <Row>
                <Col xs={3}>

                  <NavDropdown.Item style={{ width: "1200px" }}><b>Vehicles</b></NavDropdown.Item>
                  <NavDropdown.Item>Boats</NavDropdown.Item>
                  <NavDropdown.Item>Other vehicles</NavDropdown.Item>
                  <NavDropdown.Item>Rikshaw & chingchi</NavDropdown.Item>
                  <NavDropdown.Item>Buses, Vans & Trucks</NavDropdown.Item>
                  <NavDropdown.Item>Spare Parts</NavDropdown.Item>
                  <NavDropdown.Item>Cars Accessories</NavDropdown.Item>
                  <NavDropdown.Item>Cars on Installments</NavDropdown.Item>
                  <NavDropdown.Item>Cars</NavDropdown.Item>
                  <br />
                  <br />
                  <NavDropdown.Item><b>Mobiles</b></NavDropdown.Item>
                  <NavDropdown.Item>Mobile Phones</NavDropdown.Item>
                  <NavDropdown.Item>Accessories</NavDropdown.Item>
                  <NavDropdown.Item>Tablets</NavDropdown.Item>

                  <br />
                  <NavDropdown.Item><b>Elecronics & Home Appliances</b></NavDropdown.Item>
                  <NavDropdown.Item>Washing Machines & Dryers</NavDropdown.Item>
                  <NavDropdown.Item>Fridges & Freezers</NavDropdown.Item>
                  <NavDropdown.Item>AC & Coolers</NavDropdown.Item>
                  <NavDropdown.Item>Kitchen Appliances</NavDropdown.Item>
                  <NavDropdown.Item>Generators, UPS & Power Solutions</NavDropdown.Item>
                  <NavDropdown.Item>Other Home Appliance</NavDropdown.Item>
                  <NavDropdown.Item>Games & Entertainment</NavDropdown.Item>
                  <NavDropdown.Item>Cameras & Accessories</NavDropdown.Item>
                  <NavDropdown.Item>TV - Video - Audio</NavDropdown.Item>
                  <NavDropdown.Item>Computers & Accessories</NavDropdown.Item>

                  <br />
                  <NavDropdown.Item><b>Property for Sale</b></NavDropdown.Item>
                  <NavDropdown.Item>Portions & Floors</NavDropdown.Item>
                  <NavDropdown.Item>Shops - Offices - Commercial Space</NavDropdown.Item>
                  <NavDropdown.Item>Apartments & Flats</NavDropdown.Item>
                  <NavDropdown.Item>Houses</NavDropdown.Item>
                  <NavDropdown.Item>Land & Plots</NavDropdown.Item>

                </Col>
                <Col xs={2}>
                  <NavDropdown.Item><b>Animals</b></NavDropdown.Item>
                  <NavDropdown.Item>Other Animals</NavDropdown.Item>
                  <NavDropdown.Item>Pet Food & Accessories</NavDropdown.Item>
                  <NavDropdown.Item>Horses</NavDropdown.Item>
                  <NavDropdown.Item> Livestock</NavDropdown.Item>
                  <NavDropdown.Item> Dogs</NavDropdown.Item>
                  <NavDropdown.Item> Cats</NavDropdown.Item>
                  <NavDropdown.Item>Hens & Aseel</NavDropdown.Item>
                  <NavDropdown.Item>    Birds</NavDropdown.Item>
                  <NavDropdown.Item>Fish & Aquariums</NavDropdown.Item>
                  <br />
                  <br />
                  <NavDropdown.Item><b>Furniture & Home Decor</b></NavDropdown.Item>
                  <NavDropdown.Item>Other Household Items</NavDropdown.Item>
                  <NavDropdown.Item>Office Furniture</NavDropdown.Item>
                  <NavDropdown.Item>Curtains & Blinds</NavDropdown.Item>
                  <NavDropdown.Item>Rugs & Carpets</NavDropdown.Item>
                  <NavDropdown.Item>Painting & Mirrors</NavDropdown.Item>
                  <NavDropdown.Item>Garden & Outdoor</NavDropdown.Item>
                  <NavDropdown.Item>Tables & Dining</NavDropdown.Item>
                  <NavDropdown.Item>Home Decoration</NavDropdown.Item>
                  <NavDropdown.Item>Beds & Wardrobes</NavDropdown.Item>
                  <NavDropdown.Item>Sofa & Chairs</NavDropdown.Item>



                  <NavDropdown.Item><b>Business, Industrial & Agriculture</b></NavDropdown.Item>
                  <NavDropdown.Item>Medical & Pharma</NavDropdown.Item>
                  <NavDropdown.Item>Other Business & Industry</NavDropdown.Item>
                  <NavDropdown.Item>Agriculture</NavDropdown.Item>
                  <NavDropdown.Item>Construction & Heavy Machinery</NavDropdown.Item>
                  <NavDropdown.Item>Business for Sale</NavDropdown.Item>
                  <br />
                  <br />

                  <NavDropdown.Item><b>Bikes</b></NavDropdown.Item>
                  <NavDropdown.Item>Scooters</NavDropdown.Item>
                  <NavDropdown.Item>ATV & Quads</NavDropdown.Item>

                  <NavDropdown.Item>Bicycles</NavDropdown.Item>
                  <NavDropdown.Item>Spare Parts</NavDropdown.Item>
                  <NavDropdown.Item>Motorcycles</NavDropdown.Item>
                </Col>

                <Col xs={3}>
                  <NavDropdown.Item><b>Fashion & Beauty</b></NavDropdown.Item>
                  <NavDropdown.Item>Other Fashion</NavDropdown.Item>
                  <NavDropdown.Item>Couture</NavDropdown.Item>
                  <NavDropdown.Item>Lawn & Pret</NavDropdown.Item>
                  <NavDropdown.Item>Wedding</NavDropdown.Item>
                  <NavDropdown.Item>Watches</NavDropdown.Item>

                  <NavDropdown.Item>Skin & Hair</NavDropdown.Item>
                  <NavDropdown.Item>Make Up</NavDropdown.Item>
                  <NavDropdown.Item>Jewellery</NavDropdown.Item>
                  <NavDropdown.Item>Footwear</NavDropdown.Item>
                  <NavDropdown.Item>Clothes</NavDropdown.Item>
                  <NavDropdown.Item>Accessories</NavDropdown.Item>
                  <br />
                  <br />
                  <NavDropdown.Item><b>Property for Rent</b></NavDropdown.Item>
                  <NavDropdown.Item>Land & Plots</NavDropdown.Item>
                  <NavDropdown.Item>Vacation Rentals - Guest Houses</NavDropdown.Item>
                  <NavDropdown.Item>Roommates & Paying Guests</NavDropdown.Item>
                  <NavDropdown.Item>Rooms</NavDropdown.Item>
                  <NavDropdown.Item>Shops - Offices - Commercial Space</NavDropdown.Item>
                  <NavDropdown.Item>Portions & Floors</NavDropdown.Item>
                  <NavDropdown.Item>Apartments & Flats</NavDropdown.Item>
                  <NavDropdown.Item>Houses</NavDropdown.Item>
                </Col>

                <Col xs={3}>


                  <NavDropdown.Item>Boats</NavDropdown.Item>
                  <NavDropdown.Item>Other vehicles</NavDropdown.Item>
                  <NavDropdown.Item>Rikshaw & chingchi</NavDropdown.Item>
                  <NavDropdown.Item>Buses, Vans & Trucks</NavDropdown.Item>
                  <NavDropdown.Item>Spare Parts</NavDropdown.Item>
                  <NavDropdown.Item>Cars Accessories</NavDropdown.Item>
                  <NavDropdown.Item>Cars on Installments</NavDropdown.Item>
                  <NavDropdown.Item>Cars</NavDropdown.Item>
                  <br />
                  <br />
                  <NavDropdown.Item><b>Mobiles</b></NavDropdown.Item>
                  <NavDropdown.Item>Mobile Phones</NavDropdown.Item>
                  <NavDropdown.Item>Accessories</NavDropdown.Item>
                  <NavDropdown.Item>Tablets</NavDropdown.Item>

                  <br />
                  <NavDropdown.Item><b>Elecronics & Home Appliances</b></NavDropdown.Item>
                  <NavDropdown.Item>Washing Machines & Dryers</NavDropdown.Item>
                  <NavDropdown.Item>Fridges & Freezers</NavDropdown.Item>
                  <NavDropdown.Item>AC & Coolers</NavDropdown.Item>
                  <NavDropdown.Item>Kitchen Appliances</NavDropdown.Item>
                  <NavDropdown.Item>Generators, UPS & Power Solutions</NavDropdown.Item>
                  <NavDropdown.Item>Other Home Appliance</NavDropdown.Item>
                  <NavDropdown.Item>Games & Entertainment</NavDropdown.Item>
                  <NavDropdown.Item>Cameras & Accessories</NavDropdown.Item>
                  <NavDropdown.Item>TV - Video - Audio</NavDropdown.Item>
                  <NavDropdown.Item>Computers & Accessories</NavDropdown.Item>

                  <br />
                  <NavDropdown.Item><b>Property for Sale</b></NavDropdown.Item>
                  <NavDropdown.Item>Portions & Floors</NavDropdown.Item>
                  <NavDropdown.Item>Shops - Offices - Commercial Space</NavDropdown.Item>
                  <NavDropdown.Item>Apartments & Flats</NavDropdown.Item>
                  <NavDropdown.Item>Houses</NavDropdown.Item>
                  <NavDropdown.Item>Land & Plots</NavDropdown.Item>

                </Col>



              </Row>

            </Container>
          </NavDropdown>

        </a>



        <div class="collapse navbar-collapse" id="navbarNavDropdown" >
          <ul class="navbar-nav">
            <li class="nav-item text" >
              <Link to='/mobilephone' class="nav-link">Mobile phones</Link>
            </li>
            <li class="nav-item text">
              <Link to='/cars' class="nav-link">Cars</Link>
            </li>
            <li class="nav-item text">

              <Link to='/motercycle' class="nav-link">Motercycles</Link>
            </li>
            <li class="nav-item text">
              <a class="nav-link" href="#">Houses</a>
            </li>
            <li class="nav-item text">
              <a class="nav-link" href="#">Tv-Video-Audio</a>
            </li>
            <li class="nav-item text">
              <a class="nav-link" href="#">Tablets</a>
            </li>
            <li class="nav-item text">
              <a class="nav-link" href="#">Land & Ploats</a>
            </li>

          </ul>

        </div>


      </nav>

    )
  }
}






class Slider extends Component {

  render() {
    return (



      <div>
        <img src={SLIDERIMAGES} className="slider" alt="" />





      </div>



    )
  }
}




class Banner extends Component {
  render() {
    return (
      <div className="footer_image">
        <div className="container" >
          <div className="row">
            <div className="col-md-4">
              <img src={FOOTERIMAGE} className="image" alt="" />
            </div>


            <div className="col-md-5">
              <h1 style={{ marginLeft: "30px", marginTop: "20px" }}>TRY THE OLX APP</h1>
              <p style={{ marginLeft: "30px", fontSize: "20px" }}>Buy, sell and find just about anything using the app on your mobile.</p>
            </div>


            <div className="col-md-3" >
              <div className="vertical_line" ></div>

              <h5 style={{ marginLeft: "30px", marginTop: "50px" }}>GET YOUR APP TODAY</h5>

              <div style={{ marginLeft: "30px", marginTop: "50px" }}>
                <img src={APPSTORE} alt="" />
                <img src={GOOGLEAPP} alt="" />
              </div>





            </div>
          </div>





        </div>
      </div>

    )
  }
}

class Footer extends Component {




  render() {
    return (


      <div>


        <section className="big-footer" >
          <div class="container-fluid  ">
            <div class="row text-center text-xs-center text-sm-left text-md-left " style={{ marginLeft: "20px" }}>
              <div class="col-xs-12 col-sm-4 col-md-2  " style={{ marginTop: "20px" }}>
                <h6>POPULAR CATEGORIES</h6>
                <ul class="list-unstyled quick-links">

                  <li>Cars</li>
                  <li>Flats for rent</li>
                  <li>Jobs</li>
                  <li>Mobile Phones</li>


                </ul>
              </div>

              <div class="col-xs-12 col-sm-4 col-md-2  " style={{ marginTop: "20px" }}>
                <h6>TRENDING SEARCHES</h6>
                <ul class="list-unstyled quick-links">
                  <li>Bikes</li>
                  <li>Watches</li>
                  <li>Books</li>
                  <li>Dogs</li>

                </ul>
              </div>

              <div class="col-xs-12 col-sm-4 col-md-2 " style={{ marginTop: "20px" }}>
                <h6>Quick links</h6>


                <ul class="list-unstyled quick-links">
                  <li>About OLX Group</li>
                  <li>OLX Blog</li>
                  <li>Contact Us</li>
                  <li>OLX for Businesses</li>

                </ul>

              </div>




              <div class="col-xs-12 col-sm-4 col-md-3 link" style={{ marginTop: "20px" }}>
                <h6>OLX</h6>


                <ul class="list-unstyled quick-">
                  <li>Help</li>
                  <li>Sitemap</li>
                  <li>Legal & Privacy information</li>


                </ul>

              </div>




              <div class="col-xs-12 col-sm-4 col-md-2  link ">
                <h4>FOLLOW US</h4>
                <div >
                  <div><SocialFollow /></div>






                </div>



              </div>
            </div>


          </div>




        </section>
        <div class="footer-copyright text-left py-3  "><p className="text-white small ml-5"><b>Other Countries </b >  India - South Africa - Indonesia<span class="footer-text"><b>Free Classifieds in Pakistan.</b> © 2006-2020 OLX</span></p>

        </div>







      </div >







    )
  }
}


export {
  Header,
  Slider,
  Navbar,
  Banner,
  Footer
}

// const mapStateToProps = (state) => ({
//   users: state.users
// })
// const mapDispatchToProps = (dispatch) => ({
//   // set_data:()=>dispatch(set_data()),
//   facebook_login: (history) => dispatch(facebook_login(history)),

// })
// export default connect(mapStateToProps, mapDispatchToProps)(Header)

