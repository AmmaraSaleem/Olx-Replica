import React, { Component } from 'react';
import { Header, Navbar, Footer } from '../components/Home'
import { useEffect, useState } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Mapiphonex from '../cards/Mapiphonex.png'
import SamsungPhone1 from '../cards/Samsung phone 1.jpg'
import SamsungPhone2 from '../cards/Samsung phone 2.jpg'
import SamsungPhone3 from '../cards/Samsung phone 3.jpg'
import MapFawadCar from '../cards/MapFawadCar.png'
import LocalPhoneOutlinedIcon from '@material-ui/icons/LocalPhoneOutlined';
import HandSanitaizer1 from '../cards/HandSanitaizer1.jpg'
import HandSanitaizer2 from '../cards/HandSanitaizer2.jpg'
import HandSanitaizer3 from '../cards/HandSanitaizer3.jpg'
import Iphonex1 from '../cards/iphonex1.jpg'
import Iphonex2 from '../cards/iphonex2.jpg'
import Iphonex3 from '../cards/iphonex3.jpg'
import Car1 from '../cards/car1.webp'




function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} style={{ marginLeft: "40px" }}>
        <Carousel.Item>
          <img
            style={{ height: '500px' }}
            className="d-block w-100"
            src={props.imgsrc1}
            alt="First slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '500px' }}
            className="d-block w-100"
            src={props.imgsrc2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '500px' }}
            className="d-block w-100"
            src={props.imgsrc3}
            alt="Third slide"
          />
  
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  function Homeitem_card1(props) {
 
    return (
      <div>
        
  
            <div class="container-fluid">
              <div class="row">
  
                <div class="col-7">
  
  
                  <ControlledCarousel imgsrc1={Car1} imgsrc2={Car1} imgsrc3={Car1} />
  
  
  
  
                  <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%", height: "40px" }}>
  
  
                  </div>
                  <br />
  
                  <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%" }}>
                    <div className="container-fuild " style={{ fontSize: "15px" }}>
                      <div className="row">
                        <div className="col-12" className="dis_heading">
                          <h1>Details</h1>
                        </div>
                      </div>
  
                      <div className="row">
                        <div className="col-3" className="dis_heading">
                          <p> Make <br />
                      Year<br />
                      Transmission <br />
                      Down Payment (Rs)<br />
                      Instalment Plan<br />
                      Transaction Type</p>
  
                        </div>
  
  
                        <div className="col-3">
                          <p>Tayota <br />
                          2013 <br />
                     Manual<br />
                      Rs 440,000<br />
                      7 Years<br />
                      Financing</p>
  
                        </div>
                        <div className="col-3">
                          <p>Corolla GRL<br />
                      Used<br />
                          Yes<br />
                      26217<br />
                      Non Banking Company</p>
  
                        </div>
  
                        <div className="col-3">
                          <p> Make <br />
                        Year<br />
                        TransmissionDown Payment<br />
                            Instalment Plan<br />
                         Transaction Type</p>
  
  
  
  
  
  
  
  
  
  
                        </div>
  
  
                        <div className="col-12" style={{ padding: "40px" }}>
                          <hr style={{ border: "1px solid black" }}></hr>
                        </div>
  
                        <div className="col-12" className="dis_heading">
                          <h1>Description</h1>
                        </div>
                      </div>
  
                      <div className="col-12" className="discription">
  
                        <p>  Corporate Automobiles Private Limited </p>
                        <p>#Auto Finance</p>
  
                        <p>#Apni psand ki koi b car ap Finance krwa sakty hn 1995 sy 2020 tk koi b model</p>
  
                        <p>Corporate Automobiles Pvt LTD is giving you a chance to become the owner of your personal car on easy monthly installment plan with the lowest markup rate as compate to Market price</p>
  
                        <p>-you Just pay 20% Down payment</p>
  
                        <p>-1 to 7 year Monthly Installment Plane</p>
                        <p>-Free Tracker</p>
  
                        <p>-Free Tracker</p>
  
                        <p>-No Processing Fee</p>
                        <p>
                          -For More details kindly contact or visit our office</p>
                        <p>#For Appling Case Documents</p>
                        <p>#Applicant</p>
                        <p>-CNIC Copy</p>
  
                        <p>-4 photographer</p>
  
                        <p>-Utlity Bill copy</p>
  
                        <p>Two Gaurentier</p>
  
                        <p>-CNIC Copy</p>
                        <p>-Phone Number</p>
  
  
                        <p>#Regard: FAWAD</p>
  
                        <p>Address#City Center First Floor Office No FF 139 Bank Road Saddar Rawalpindi</p>
  
                        <p>Contact on whatsaap or call</p>
  
                        <p>Contact#O33O9890127</p>
                      </div>
  
  
  
                    </div>
  
                  </div>
  
  
                </div>
  
  
                <div class="col-5">
  
  
                  <div className="Dialog_inner_box">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3><b>Rs 440,000 - 7 Years</b> <div style={{ float: "right" }}><ShareIcon /><FavoriteBorderIcon /></div></h3>
                    </div>
  
                    <div style={{ marginLeft: "10px" }}>
                      <p>Get Toyota Gli 2013 On easy Installment
                         <br /> with 20% Downpayment Only</p>
  
  
                         F-7, Islamabad, Islamabad Capital Territory
                     <span style={{ float: "right", marginRight: "10px" }}>Sep 20</span>
  
  
  
                    </div>
  
  
  
  
  
  
  
                  </div>
  
                  <div className="Dialog_inner_box2">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3>Seller description</h3>
                    </div>
  
                    <div style={{ marginLeft: "40px" }}>
                    
  
                      <h3 class="fas fa-user"> Fawad</h3>
                      <p> Member since Apr 2019 </p>
  
  
  
                    </div>
                    <div style={{ textAlign: "center", padding: "10px" }} >
  
  
                      <button className="chat_with_seller">Chat with seller</button>
                      <div style={{ height: "20px" }}><LocalPhoneOutlinedIcon />*******</div>
                    </div>
  
  
  
  
  
  
                  </div>
  
                  <div className="Dialog_inner_box2">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3>Posted in</h3>
                    </div>
  
                    <div style={{ marginLeft: "40px" }}>
  
                      <p>F-7, Islamabad, Islamabad Capital Territory</p>
  
                    </div>
  
                    <img src={MapFawadCar} className="mapFawadcar" />
  
                  </div>
                  <div style={{ width: "450px", marginLeft: "30px" }}>
                    <h5 >AD ID 1021645372
                  <h5 style={{ float: "right" }}>AD ID 1021645372</h5></h5>
                  </div>
  
  
  
                </div>
              </div>
  
  
  
  
            </div>
  
  
  
  
  
  
  
  
  
  
        
  
      </div >
    );
  }
  
  function Homeitem_card2(props) {

    return (
<div>
      <Header />

      <Navbar />
  
      <Container fluid>
        <Row>

        <nav class="navbar navbar-expand-lg navbar-light mobilephone_popup_link  " >
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link" href="#">Home
              / </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">  Mobile Phones
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> Mobile Phones in Sindh
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mobile Phones in Karachi
              /
             </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> Mobile Phones in Saddar
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Motorola in Saddar</a>
            </li>
            

          </ul>




        </nav>
          
  
        </Row>
        <Row>
  
          <Col xs={7}>
  
  
            <ControlledCarousel imgsrc1={SamsungPhone2} imgsrc2={SamsungPhone1} imgsrc3={SamsungPhone3} />
  
  
  
  
            <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%", height: "40px" }}>
  
  
            </div>
            <br />
  
            <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%" }}>
              <Container fluid style={{ fontSize: "15px" }}>
                <Row>
                  <Col xs={12} className="dis_heading">
                    <h1>Details</h1>
                  </Col>
                </Row>
  
                <Row>
                  <Col xs={3} className="dis_heading">
                    <p> Make </p>
  
                  </Col>
  
  
                  <Col xs={3}>
                    <p>Samsung </p>
  
                  </Col>
                  <Col xs={3}>
                    <p>Condition</p>
  
                  </Col>
  
                  <Col xs={1}>
                    <p> Used</p>
  
                  </Col>
  
                </Row>
                <Row>
                  <Col xs={12} style={{ padding: "40px" }}>
                    <hr style={{ border: "1px solid black" }}></hr>
                  </Col>
                </Row>
                <Row>
                  < Col xs={12} className="dis_heading">
                    <h1>Description</h1>
                  </Col>
                </Row>
  
                <Row>
                  <Col xs={12} className="discription">
  
                    <p>  Assalam o Alaikum</p>
  
  
  
  
  
  
                    <p>Single sim</p>
  
                    <p>6gb/128gb</p>
  
                    <p> Non Pta</p>
  
                    <p>price 49000</p>
                    <p>Sim will work 60 days</p>
  
                    <p>10/10 condition</p>
  
                    <p>Black & white colour</p>
                    <p>
                      Note</p>
                    <p>7 days shop warranty</p>
                    <p>The cell city (The name of trust)</p>
                    <p>  InshaAllah</p>
  
                    <p>Address: shop # LG22 IT Tower opposite chenone ,Hali Road Gulberg 3 lahore</p>
  
                    <p>Shop timing:11pmAM to 9:30PM</p>
  
                    <p>Friday :3:00PM to 9:30PM</p>
  
                    <p>Sunday of</p>
                    <p>Call only plz</p>
  
  
                    <p>Non pta</p>
  
  
                  </Col>
                </Row>
              </Container>
  
            </div>
          </Col>
  
  
  
  
  
  
  
  
  
  
          <Col xs={5}>
  
  
            <div className="Dialog_inner_box">
              <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                <h3><b>Rs 49,000</b> <div style={{ float: "right" }}><ShareIcon /><FavoriteBorderIcon /></div></h3>
              </div>
  
              <div style={{ marginLeft: "10px" }}>
                <p>Sasmung a90 6gb 128gb non pta</p>
  
  
                      Gaddafi Stadium, Lahore, Punjab
  
                     <span style={{ float: "right", marginRight: "10px" }}>6 days ago</span>
  
  
  
              </div>
  
  
  
  
  
  
  
            </div>
  
            <div className="Dialog_inner_box2">
              <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                <h3>Seller description</h3>
              </div>
  
              <div style={{ marginLeft: "40px" }}>
  
                <h3 class="fas fa-user"> The Cell City</h3>
                <p> Member since Mar 2019 </p>
  
  
  
              </div>
              <div style={{ textAlign: "center", padding: "10px" }} >
  
  
                <button className="chat_with_seller">Chat with seller</button>
                <div style={{ height: "20px" }}><LocalPhoneOutlinedIcon />*******</div>
              </div>
  
  
  
  
  
  
            </div>
  
            <div className="Dialog_inner_box2">
              <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                <h3>Posted in</h3>
              </div>
  
              <div style={{ marginLeft: "40px" }}>
  
                <p>Gaddafi Stadium, Lahore, Punjab</p>
  
              </div>
  
              <img src={MapFawadCar} className="mapFawadcar" />
  
            </div>
            <div style={{ width: "450px", marginLeft: "30px" }}>
              <h5 >AD ID 1021434802
  
                  <h5 style={{ float: "right" }}>REPORT THIS AD</h5></h5>
            </div>
  
  
  
          </Col>
        </Row>
  
  
  
  
      </Container>
  
  
<Footer/>
</div>
  
    );
  }
  


  function Homeitem_card3(props) {


    return (
      <div>
  
  <Header />

<Navbar />

  
  
      
          

  <Container fluid>
  <Row>
  

  <nav class="navbar navbar-expand-lg navbar-light mobilephone_popup_link  " >
    <ul class="navbar-nav">
      <li class="nav-item ">
        <a class="nav-link" href="#">Home
            /
           
          
   </a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">   Fashion & Beauty
            /
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">   Accessories
            
        /</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> Accessories in Punjab
            
        /
       </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> Mobile Phones in Saddar
        /</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Accessories in DHA Phase 2
        /</a>
      </li>
      

    </ul>




  </nav>
  </Row>
  
        
          <Row>
  
            <Col xs={7}>
  
  
              <ControlledCarousel imgsrc1={HandSanitaizer1} imgsrc2={HandSanitaizer2} imgsrc3={HandSanitaizer3} />
  
  
  
  
              <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%", height: "40px" }}>
  
  
              </div>
              <br />
  
              <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%" }}>
                <Container fluid style={{ fontSize: "15px" }}>
                  <Row>
                    <Col xs={12} className="dis_heading">
                      <h1>Details</h1>
                    </Col>
                  </Row>
  
                  <Row>
                    <Col xs={3} className="dis_heading">
                      <p> Condition </p>
  
                    </Col>
  
  
                    <Col xs={3}>
                      <p>New</p>
  
                    </Col>
                    <Col xs={2}>
                      <p>Type</p>
  
                    </Col>
  
                    <Col xs={3}>
                      <p> Accessories for Women</p>
  
                    </Col>
  
                  </Row>
                  <Row>
                    <Col xs={12} style={{ padding: "40px" }}>
                      <hr style={{ border: "1px solid black" }}></hr>
                    </Col>
                  </Row>
                  <Row>
                    < Col xs={12} className="dis_heading">
                      <h1>Description</h1>
                    </Col>
                  </Row>
  
                  <Row>
                    <Col xs={12} className="discription">
  
                      <p>Best quality handsanitizers approved by DRAP too. We guarantee no one can challenge this. </p>
  
  
  
  
  
  
  
                    </Col>
                  </Row>
                </Container>
  
              </div>
            </Col>
  
  
  
  
  
  
  
  
  
  
            <Col xs={5}>
  
  
              <div className="Dialog_inner_box">
                <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                  <h3><b>Rs 200</b> <div style={{ float: "right", marginRight: "10px" }}><ShareIcon /><FavoriteBorderIcon /></div></h3>
                </div>
  
                <div style={{ marginLeft: "10px" }}>
                  <p>Handsanitizer</p>
  
  
  
  
                  <p>DHA Phase 2, Lahore, Punjab<div style={{ float: "right", marginRight: "10px" }}>Sep 25</div></p>
  
  
  
                </div>
  
  
  
  
  
  
  
              </div>
  
              <div className="Dialog_inner_box2">
                <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                  <h3>Seller description</h3>
                </div>
  
                <div style={{ marginLeft: "40px" }}>
  
                  <h3 class="fas fa-user"> Mrs. Usman</h3>
                  <p> Member since April 2016 </p>
  
  
  
                </div>
                <div style={{ textAlign: "center", padding: "10px" }} >
  
  
                  <button className="chat_with_seller">Chat with seller</button>
                  <div style={{ height: "20px" }}><LocalPhoneOutlinedIcon />*******</div>
                </div>
  
  
  
  
  
  
              </div>
  
              <div className="Dialog_inner_box2">
                <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                  <h3>Posted in</h3>
                </div>
  
                <div style={{ marginLeft: "40px" }}>
  
                  <p>DHA Phase 2, Lahore, Punjab</p>
  
                </div>
  
                <img src={MapFawadCar} className="mapFawadcar" />
  
              </div>
              <div style={{ width: "450px", marginLeft: "30px" }}>
                <h5 >AD ID 1021885764
  
  
                  <h5 style={{ float: "right" }}>REPORT THIS AD</h5></h5>
              </div>
  
  
  
            </Col>
          </Row>
  
  
  
  
        </Container>
  
  
  <Footer/>
      </div >
  
    );
  }



  function Homeitem_card4(props) {
 

    return (
      <div>
  
  
  
        <Container fluid>
          <Row>
          <nav class="navbar navbar-expand-lg navbar-light mobilephone_popup_link  " >
    <ul class="navbar-nav">
      <li class="nav-item ">
        <a class="nav-link" href="#">Home
            /
           
          
   </a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">   Fashion & Beauty
            /
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">   Accessories
            
        /</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> Accessories in Punjab
            
        /
       </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">  Mobile Phones in Central Jacob Lines
            
        /</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> Apple in Central Jacob Lines  
        /</a>
      </li>
      

    </ul>




  </nav>
           
 
  
          </Row>
          <Row>
  
            <Col xs={7}>
  
  
              <ControlledCarousel imgsrc1={Iphonex1} imgsrc2={Iphonex2} imgsrc3={Iphonex3} />
  
  
  
  
              <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%", height: "40px" }}>
  
  
              </div>
              <br />
  
              <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%" }}>
                <Container fluid style={{ fontSize: "15px" }}>
                  <Row>
                    <Col xs={12} className="dis_heading">
                      <h1>Details</h1>
                    </Col>
                  </Row>
  
                  <Row>
                    <Col xs={3} className="dis_heading">
                      <p> Make </p>
  
                    </Col>
  
  
                    <Col xs={3}>
                      <p>Apple </p>
  
                    </Col>
                    <Col xs={3}>
                      <p>Condition</p>
  
                    </Col>
  
                    <Col xs={1}>
                      <p> Used</p>
  
                    </Col>
  
                  </Row>
                  <Row>
                    <Col xs={12} style={{ padding: "40px" }}>
                      <hr style={{ border: "1px solid black" }}></hr>
                    </Col>
                  </Row>
                  <Row>
                    < Col xs={12} className="dis_heading">
                      <h1>Description</h1>
                    </Col>
                  </Row>
  
                  <Row>
                    <Col xs={12} className="discription">
  
                      <p>just face id failed baki pura phone okay hai</p>
  
  
  
  
  
  
                      <p>PTA Approved</p>
  
                      <p>original panel</p>
  
                      <p> Battery health 99% new battery dalwai hai new original phone se nikal wake</p>
  
                      <p>only serious buyers contact</p>
  
  
                    </Col>
                  </Row>
                </Container>
  
              </div>
            </Col>
  
  
  
  
  
  
  
  
  
  
            <Col xs={5}>
  
  
              <div className="Dialog_inner_box">
                <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                  <h3><b>Rs 75,000</b> <div style={{ float: "right" }}><ShareIcon /><FavoriteBorderIcon /></div></h3>
                </div>
  
                <div style={{ marginLeft: "10px" }}>
                  <p>iphone x 64gb</p>
  
                  <p>Central Jacob Lines, Karachi, Sindh<div style={{ float: "right", marginRight: "10px" }}>Today</div></p>
  
  
  
  
                </div>
  
  
  
  
  
  
  
              </div>
  
              <div className="Dialog_inner_box2">
                <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                  <h3>Seller description</h3>
                </div>
  
                <div style={{ marginLeft: "40px" }}>
  
                  <h3>Hammad Sajid</h3>
                  <p> Member since jun 2016 </p>
  
  
  
                </div>
                <div style={{ textAlign: "center", padding: "10px" }} >
  
  
                  <button className="chat_with_seller">Chat with seller</button>
                  <div style={{ height: "20px" }}><LocalPhoneOutlinedIcon />*******</div>
                </div>
  
  
  
  
  
  
              </div>
  
              <div className="Dialog_inner_box2">
                <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                  <h3>Posted in</h3>
                </div>
  
                <div style={{ marginLeft: "40px" }}>
  
                  <p>Central Jacob Lines, Karachi, Sindh</p>
  
                </div>
  
                <img src={Mapiphonex} className="mapFawadcar" />
  
              </div>
              <div style={{ width: "450px", marginLeft: "30px" }}>
                <h5 >AD ID 1023257657
  
  
                  <h5 style={{ float: "right" }}>REPORT THIS AD</h5></h5>
              </div>
  
  
  
            </Col>
          </Row>
  
  
  
  
        </Container>
  
   <Footer/>
      </div>
  
    );
  }


  function Homeitem_card5(props) {

    return (
      <div>
       
           
            <Container fluid>
              <Row>
              
  <nav class="navbar navbar-expand-lg navbar-light mobilephone_popup_link  " >
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link" href="#">Home
              / </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">  Mobile Phones
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> Mobile Phones in Sindh
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mobile Phones in Karachi
              /
             </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> Mobile Phones in Saddar
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Motorola in Saddar</a>
            </li>
            

          </ul>




        </nav>
  
              </Row>
              <Row>
  
                <Col xs={7}>
  
  
                  <ControlledCarousel imgsrc1="https://apollo-singapore.akamaized.net/v1/files/n4pg5frjqn3d2-PK/image;s=1080x1080" imgsrc2="https://apollo-singapore.akamaized.net/v1/files/64q0t08lk4372-PK/image;s=1080x1080" imgsrc3="https://apollo-singapore.akamaized.net/v1/files/k7ym015b9p391-PK/image;s=1080x1080" />
  
  
  
  
                  <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%", height: "40px" }}>
  
  
                  </div>
                  <br />
  
                  <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%" }}>
                    <Container fluid style={{ fontSize: "15px" }}>
                      <Row>
                        <Col xs={12} className="dis_heading">
                          <h1>Details</h1>
                        </Col>
                      </Row>
  
                      <Row>
                        <Col xs={3} className="dis_heading">
                          <p> Make </p>
  
                        </Col>
  
  
                        <Col xs={3}>
                          <p>Motorola</p>
  
                        </Col>
                        <Col xs={3}>
                          <p>Condition</p>
  
                        </Col>
  
                        <Col xs={1}>
                          <p> Used</p>
  
                        </Col>
  
                      </Row>
                      <Row>
                        <Col xs={12} style={{ padding: "40px" }}>
                          <hr style={{ border: "1px solid black" }}></hr>
                        </Col>
                      </Row>
                      <Row>
                        < Col xs={12} className="dis_heading">
                          <h1>Description</h1>
                        </Col>
                      </Row>
  
                      <Row>
                        <Col xs={12} className="discription">
  
                          <p>Moto G6 Plus</p>
  
  
                          <br />
                          <p>Single Sim PTA approved</p>
  
                          <p>4 GB 64 GB</p>
  
                          <p> Finger print sensor</p>
  
                          <p>3200 mAh Battary</p>
                          <br />
                          <p>Available @ MOBI WAYY</p>
                          <p>Shop no 284, 2nd floor star city mall saddar Karachi.</p>
  
  
                        </Col>
                      </Row>
                    </Container>
  
                  </div>
                </Col>
  
  
  
  
  
  
  
  
  
  
                <Col xs={5}>
  
  
                  <div className="Dialog_inner_box">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3><b>Rs 16,500</b> <div style={{ float: "right" }}><ShareIcon /><FavoriteBorderIcon /></div></h3>
                    </div>
  
                    <div style={{ marginLeft: "10px" }}>
                      <p>Moto G6 plus</p>
  
                      <p>Saddar, Karachi, Sindh<div style={{ float: "right", marginRight: "10px" }}>Sep 23</div></p>
  
  
  
  
                    </div>
  
  
  
  
  
  
  
                  </div>
  
                  <div className="Dialog_inner_box2">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3>Seller description</h3>
                    </div>
  
                    <div style={{ marginLeft: "40px" }}>
  
                      <h3>MobiWay</h3>
                      <p> Member since Sep 2018 </p>
  
  
  
                    </div>
                    <div style={{ textAlign: "center", padding: "10px" }} >
  
  
                      <button className="chat_with_seller">Chat with seller</button>
                      <div style={{ height: "20px" }}><LocalPhoneOutlinedIcon />*******</div>
                    </div>
  
  
  
  
  
  
                  </div>
  
                  <div className="Dialog_inner_box2">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3>Posted in</h3>
                    </div>
  
                    <div style={{ marginLeft: "40px" }}>
  
                      <p>Saddar, Karachi, Sindh</p>
  
                    </div>
  
                    <img src={Mapiphonex} className="mapFawadcar" />
  
                  </div>
                  <div style={{ width: "450px", marginLeft: "30px" }}>
                    <h5 >AD ID 1021751139
  
  
                  <h5 style={{ float: "right" }}>REPORT THIS AD</h5></h5>
                  </div>
  
  
  
                </Col>
              </Row>
  
  
  
  
            </Container>
  
  
      </div >
  
    );
  }
  /////////////////////////////////////////////Card 6///////////////////////////////////
  function Homeitem_card6(props) {
   
    return (
      <div>
        <Header/>
        <Navbar/>
            <Container fluid>
              <Row>
               
  <nav class="navbar navbar-expand-lg navbar-light mobilephone_popup_link  " >
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link" href="#">Home
              / </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">  Mobile Phones
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> Mobile Phones in Sindh
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mobile Phones in Karachi
              /
             </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">  Mobile Phones in Central Jacob Lines
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Apple in Central Jacob Lines </a>
            </li>
            

          </ul>




        </nav>
  
  
              </Row>
              <Row>
  
                <Col xs={7}>
  
  
                  <ControlledCarousel imgsrc1="https://apollo-singapore.akamaized.net/v1/files/hdbxed1tlbss2-PK/image;s=1080x1080" imgsrc2="https://apollo-singapore.akamaized.net/v1/files/uu2j5n0zdfvh3-PK/image;s=1080x1080" imgsrc3="https://apollo-singapore.akamaized.net/v1/files/lxhkfsev4wel2-PK/image;s=1080x1080" />
  
  
  
  
                  <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%", height: "40px" }}>
  
  
                  </div>
                  <br />
  
                  <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%" }}>
                    <Container fluid style={{ fontSize: "15px" }}>
                      <Row>
                        <Col xs={12} className="dis_heading">
                          <h1>Details</h1>
                        </Col>
                      </Row>
  
                      <Row>
                        <Col xs={3} className="dis_heading">
                          <p> Make </p>
  
                        </Col>
  
  
                        <Col xs={3}>
                          <p>New </p>
  
                        </Col>
                        <Col xs={3}>
                          <p></p>
  
                        </Col>
  
                        <Col xs={1}>
                          <p> </p>
  
                        </Col>
  
                      </Row>
                      <Row>
                        <Col xs={12} style={{ padding: "40px" }}>
                          <hr style={{ border: "1px solid black" }}></hr>
                        </Col>
                      </Row>
                      <Row>
                        < Col xs={12} className="dis_heading">
                          <h1>Description</h1>
                        </Col>
                      </Row>
  
                      <Row>
                        <Col xs={12} className="discription">
  
                          <p>Imported office & gaming chair <br />
  
  Up and dow easy adjustable<br />
  
  Lock and relax options<br />
  
  Easy and comfortable sitting<br />
  
  Moveable & Adjustable arms<br />
  
  Back adjustable at 180 degree<br />
  
  Heavy strong base<br />
  
  Noise free wheels<br />
  
  Executive machine<br />
  
  With lock and relax options<br />
  
  Long time working chair<br />
  
  Display Center : Malikabad shopping mall 1st floor shop No.F-16 (Upsides of Dhaka sweets) Near Rabi Center Murree Road RWP</p>
  
  
                        </Col>
                      </Row>
                    </Container>
  
                  </div>
                </Col>
  
  
  
  
  
  
  
  
  
  
                <Col xs={5}>
  
  
                  <div className="Dialog_inner_box">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3><b>Rs 75,000</b> <div style={{ float: "right" }}><ShareIcon /><FavoriteBorderIcon /></div></h3>
                    </div>
  
                    <div style={{ marginLeft: "10px" }}>
                      <p>iphone x 64gb</p>
  
                      <p>Central Jacob Lines, Karachi, Sindh<div style={{ float: "right", marginRight: "10px" }}>Today</div></p>
  
  
  
  
                    </div>
  
  
  
  
  
  
  
                  </div>
  
                  <div className="Dialog_inner_box2">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3>Seller description</h3>
                    </div>
  
                    <div style={{ marginLeft: "40px" }}>
  
                      <h3>Hammad Sajid</h3>
                      <p> Member since jun 2016 </p>
  
  
  
                    </div>
                    <div style={{ textAlign: "center", padding: "10px" }} >
  
  
                      <button className="chat_with_seller">Chat with seller</button>
                      <div style={{ height: "20px" }}><LocalPhoneOutlinedIcon />*******</div>
                    </div>
  
  
  
  
  
  
                  </div>
  
                  <div className="Dialog_inner_box2">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3>Posted in</h3>
                    </div>
  
                    <div style={{ marginLeft: "40px" }}>
  
                      <p>Central Jacob Lines, Karachi, Sindh</p>
  
                    </div>
  
                    <img src={Mapiphonex} className="mapFawadcar" />
  
                  </div>
                  <div style={{ width: "450px", marginLeft: "30px" }}>
                    <h5 >AD ID 1023257657
  
  
                  <h5 style={{ float: "right" }}>REPORT THIS AD</h5></h5>
                  </div>
  
  
  
                </Col>
              </Row>
  
  
  
  
            </Container>
  
  
            <Footer/>
      </div>
      
  
    );
  }
  ///////////////////////////////////////////////////Card 7/////////////////////////////////////
  function Homeitem_card7(props) {
    
  
    return (
      <div>
        <Header/>
        <Navbar/>
        
            <Container fluid>
              <Row>
              <nav class="navbar navbar-expand-lg navbar-light mobilephone_popup_link  " >
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link" href="#">Home
              / </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">  Mobile Phones
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> Mobile Phones in Sindh
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mobile Phones in Karachi
              /
             </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">  Beds & Wardrobes in Rawalpindi
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Beds & Wardrobes in Amer Pura </a>
            </li>
            

          </ul>




        </nav>
              
  
              </Row>
              <Row>
  
                <Col xs={7}>
  
  
                  <ControlledCarousel imgsrc1="https://apollo-singapore.akamaized.net/v1/files/rqrn9vcqynbj1-PK/image;s=1080x1080" imgsrc="https://apollo-singapore.akamaized.net/v1/files/e8uglnftzwzj3-PK/image;s=1080x1080" imgsrc3="https://apollo-singapore.akamaized.net/v1/files/rqrn9vcqynbj1-PK/image;s=1080x1080" />
  
  
  
  
                  <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%", height: "40px" }}>
  
  
                  </div>
                  <br />
  
                  <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%" }}>
                    <Container fluid style={{ fontSize: "15px" }}>
                      <Row>
                        <Col xs={12} className="dis_heading">
                          <h1>Details</h1>
                        </Col>
                      </Row>
  
                      <Row>
                        <Col xs={3} className="dis_heading">
                          <p> Make </p>
  
                        </Col>
  
  
                        <Col xs={3}>
                          <p>New </p>
  
                        </Col>
                        <Col xs={3}>
                          <p></p>
  
                        </Col>
  
                        <Col xs={1}>
                          <p> </p>
  
                        </Col>
  
                      </Row>
                      <Row>
                        <Col xs={12} style={{ padding: "40px" }}>
                          <hr style={{ border: "1px solid black" }}></hr>
                        </Col>
                      </Row>
                      <Row>
                        < Col xs={12} className="dis_heading">
                          <h1>Description</h1>
                        </Col>
                      </Row>
  
                      <Row>
                        <Col xs={12} className="discription">
  
                          <p>We are whole sale diller we make all kind of funrture we make furniture on odder for giving odder and for more information call us
  
  Location: near murree road gold point in zari market Rawalpindi</p>
  
  
                        </Col>
                      </Row>
                    </Container>
  
                  </div>
                </Col>
  
  
  
  
  
  
  
  
  
  
                <Col xs={5}>
  
  
                  <div className="Dialog_inner_box">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3><b>Rs 35,550</b> <div style={{ float: "right" }}><ShareIcon /><FavoriteBorderIcon /></div></h3>
                    </div>
  
                    <div style={{ marginLeft: "10px" }}>
                      <p>Ye bed,2 sidetables with dressing full kushan ma.with out pafi hai</p>
  
                      <p>Amer Pura, Rawalpindi, Punjab
  <div style={{ float: "right", marginRight: "10px" }}>Sep 26</div></p>
  
  
  
  
                    </div>
  
  
  
  
  
  
  
                  </div>
  
                  <div className="Dialog_inner_box2">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3>Seller description</h3>
                    </div>
  
                    <div style={{ marginLeft: "40px" }}>
  
                      <h3>Subhan Furniture 2</h3>
                      <p> Member since Aug 2017</p>
  
  
  
                    </div>
                    <div style={{ textAlign: "center", padding: "10px" }} >
  
  
                      <button className="chat_with_seller">Chat with seller</button>
                      <div style={{ height: "20px" }}><LocalPhoneOutlinedIcon />*******</div>
                    </div>
  
  
  
  
  
  
                  </div>
  
                  <div className="Dialog_inner_box2">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3>Posted in</h3>
                    </div>
  
                    <div style={{ marginLeft: "40px" }}>
  
                      <p>Amer Pura, Rawalpindi, Punjab</p>
  
                    </div>
  
                    <img src={Mapiphonex} className="mapFawadcar" />
  
                  </div>
                  <div style={{ width: "450px", marginLeft: "30px" }}>
                    <h5 >AD ID 1016200708
  
  
                  <h5 style={{ float: "right" }}>REPORT THIS AD</h5></h5>
                  </div>
  
  
  
                </Col>
              </Row>
  
  
  
  
            </Container>
  
  <Footer/>
      </div >
  
    );
  }
  /////////////////////////////////////////////Card 8///////////////////////////////////
  function Homeitem_card8(props) {
   
  
    return (
      <div>
       
            <Container fluid>
              <Row>
        
  <nav class="navbar navbar-expand-lg navbar-light mobilephone_popup_link  " >
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link" href="#">Home
              / </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">  Bikes
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> Motercycles in Sindh
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Motercyles in Karachi
              /
             </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">    Motorcycles in Model Colony
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> Suzuki in Model Colony  </a>
            </li>
            

          </ul>




        </nav>
              
  
  
              </Row>
              <Row>
  
                <Col xs={7}>
  
  
                  <ControlledCarousel imgsrc1="https://apollo-singapore.akamaized.net/v1/files/bqqlihfno10x-PK/image;s=1080x1080" imgsrc2="https://apollo-singapore.akamaized.net/v1/files/quw00z1r7q1u-PK/image;s=1080x1080" imgsrc="https://apollo-singapore.akamaized.net/v1/files/u4atut5gsu1a1-PK/image;s=1080x1080" />
  
  
  
  
                  <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%", height: "40px" }}>
  
  
                  </div>
                  <br />
  
                  <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%" }}>
                    <Container fluid style={{ fontSize: "15px" }}>
                      <Row>
                        <Col xs={12} className="dis_heading">
                          <h1>Details</h1>
                        </Col>
                      </Row>
  
                      <Row>
                        <Col xs={3} className="dis_heading">
                          <p> Make </p>
                          <p>Condition </p>
  
                        </Col>
  
  
                        <Col xs={3}>
                          <p>Suzuki</p>
                          <p> Used</p>
  
                        </Col>
                        <Col xs={3}>
                          <p>Year</p>
  
                        </Col>
  
                        <Col xs={1}>
                          <p>2017 </p>
  
                        </Col>
  
                      </Row>
                      <Row>
                        <Col xs={12} style={{ padding: "40px" }}>
                          <hr style={{ border: "1px solid black" }}></hr>
                        </Col>
                      </Row>
                      <Row>
                        < Col xs={12} className="dis_heading">
                          <h1>Description</h1>
                        </Col>
                      </Row>
  
                      <Row>
                        <Col xs={12} className="discription">
  
                          <p>Suzuki GD-110s 2017 Model
  
                          Excellent condition, No work required
  
                          Complete documents
  
                          Suzuki Showroom maintained
  
                          Rear tyre New (General) 4 month warranty remaining
  
                          Front tyre New (Diamond) 4 month warranty remaining
  
                          Engine, parts everything is original 100%
  
                          First Owner - personal used
  
                          Very Comfortable
  
                          Leave a message, WhatsApp or call
  
  Only serious buyers contact</p>
  
  
                        </Col>
                      </Row>
                    </Container>
  
                  </div>
                </Col>
  
  
  
  
  
  
  
  
  
  
                <Col xs={5}>
  
  
                  <div className="Dialog_inner_box">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3><b>Rs 115,000</b> <div style={{ float: "right" }}><ShareIcon /><FavoriteBorderIcon /></div></h3>
                    </div>
  
                    <div style={{ marginLeft: "10px" }}>
                      <p>Suzuki GD110s Red for sale</p>
  
                      <p>Model Colony, Karachi, Sindh
  <div style={{ float: "right", marginRight: "10px" }}>3 days ago</div></p>
  
  
  
  
                    </div>
  
  
  
  
  
  
  
                  </div>
  
                  <div className="Dialog_inner_box2">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3>Seller description</h3>
                    </div>
  
                    <div style={{ marginLeft: "40px" }}>
  
                      <h3>M Azam</h3>
                      <p> Member since Aug 2014</p>
  
  
  
                    </div>
                    <div style={{ textAlign: "center", padding: "10px" }} >
  
  
                      <button className="chat_with_seller">Chat with seller</button>
                      <div style={{ height: "20px" }}><LocalPhoneOutlinedIcon />*******</div>
                    </div>
  
  
  
  
  
  
                  </div>
  
                  <div className="Dialog_inner_box2">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3>Posted in</h3>
                    </div>
  
                    <div style={{ marginLeft: "40px" }}>
  
                      <p>Model Colony, Karachi, Sindh</p>
  
                    </div>
  
                    <img src={Mapiphonex} className="mapFawadcar" />
  
                  </div>
                  <div style={{ width: "450px", marginLeft: "30px" }}>
                    <h5 >AD ID 1016200708
  
  
                  <h5 style={{ float: "right" }}>REPORT THIS AD</h5></h5>
                  </div>
  
  
  
                </Col>
              </Row>
  
  
  
  
            </Container>
  
  
        <Footer/>
      </div >
  
    );
  }
  /////////////////////////////////// Card 9///////////////////////////////////////////////
  function Homeitem_card9(props) {
   
    return (
      <div>
       <Header/>
       <Navbar/>
        
            <Container fluid>
              <Row>
              
  <nav class="navbar navbar-expand-lg navbar-light mobilephone_popup_link  " >
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link" href="#">Home
              / </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">    Beds & Wardrobes
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">   Beds & Wardrobes in Punjab
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Beds & Wardrobes in Rawalpindi
              /
             </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">    Beds & Wardrobes in Adiala Road 
              /</a>
            </li>
           
            

          </ul>




        </nav>
              
  
              </Row>
              <Row>
  
                <Col xs={7}>
  
  
                  <ControlledCarousel imgsrc1="https://apollo-singapore.akamaized.net/v1/files/3w4x2zrwow6-PK/image;s=1080x1080" imgsrc2="https://apollo-singapore.akamaized.net/v1/files/j2lu26dmotac3-PK/image;s=1080x1080" imgsrc3="https://apollo-singapore.akamaized.net/v1/files/o605x3piiyzu1-PK/image;s=1080x1080" />
  
  
  
  
                  <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%", height: "40px" }}>
  
  
                  </div>
                  <br />
  
                  <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%" }}>
                    <Container fluid style={{ fontSize: "15px" }}>
                      <Row>
                        <Col xs={12} className="dis_heading">
                          <h1>Details</h1>
                        </Col>
                      </Row>
  
                      <Row>
                        <Col xs={3} className="dis_heading">
                          <p>Condition</p>
  
                        </Col>
  
  
                        <Col xs={3}>
                          <p>Used</p>
  
                        </Col>
                        <Col xs={3}>
                          <p></p>
  
                        </Col>
  
                        <Col xs={1}>
                          <p> </p>
  
                        </Col>
  
                      </Row>
                      <Row>
                        <Col xs={12} style={{ padding: "40px" }}>
                          <hr style={{ border: "1px solid black" }}></hr>
                        </Col>
                      </Row>
                      <Row>
                        < Col xs={12} className="dis_heading">
                          <h1>Description</h1>
                        </Col>
                      </Row>
  
                      <Row>
                        <Col xs={12} className="discription">
  
                          <p>Kids cot with two mattresses, two spacious drawers, with rollers wheels, easily movable with tires, all wooden. Good condition and very reasonable price. Price slightly negotiable.</p>
  
  
                        </Col>
                      </Row>
                    </Container>
  
                  </div>
                </Col>
  
  
  
  
  
  
  
  
  
  
                <Col xs={5}>
  
  
                  <div className="Dialog_inner_box">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3><b>      Rs 18,000</b> <div style={{ float: "right" }}><ShareIcon /><FavoriteBorderIcon /></div></h3>
                    </div>
  
                    <div style={{ marginLeft: "10px" }}>
                      <p>Kids cot in very good condition with two mattresses for sale</p>
  
                      <p>Adiala Road, Rawalpindi, Punjab
  <div style={{ float: "right", marginRight: "10px" }}>Today</div></p>
  
  
  
  
                    </div>
  
  
  
  
  
  
  
  
  
  
                  </div>
  
                  <div className="Dialog_inner_box2">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3>Seller description</h3>
                    </div>
  
                    <div style={{ marginLeft: "40px" }}>
  
                      <h3>Abdul</h3>
                      <p> Member since Dec 2019</p>
  
  
  
                    </div>
                    <div style={{ textAlign: "center", padding: "10px" }} >
  
  
                      <button className="chat_with_seller">Chat with seller</button>
                      <div style={{ height: "20px" }}><LocalPhoneOutlinedIcon />*******</div>
                    </div>
  
  
  
  
  
  
                  </div>
  
                  <div className="Dialog_inner_box2">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3>Posted in</h3>
                    </div>
  
                    <div style={{ marginLeft: "40px" }}>
  
                      <p>Adiala Road, Rawalpindi, Punjab</p>
  
                    </div>
  
                    <img src={Mapiphonex} className="mapFawadcar" />
  
                  </div>
                  <div style={{ width: "450px", marginLeft: "30px" }}>
                    <h5 >AD ID 1016200708
  
  
                  <h5 style={{ float: "right" }}>REPORT THIS AD</h5></h5>
                  </div>
  
  
  
                </Col>
              </Row>
  
  
  
  
            </Container>
  
  <Footer/>
      </div>
  
    );
  }
  ///////////////////////////////////////Card 10////////////////////////////////////////////////////////
  function Homeitem_card10(props) {
   
    return (
      <div>
       <Header/>
       <Navbar/>
            <Container fluid>
              <Row>

              <nav class="navbar navbar-expand-lg navbar-light mobilephone_popup_link  " >
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link" href="#">Home
              / </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">     Fashion & Beauty
              
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">    Skin & Hair
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> Skin & Hair in Punjab
              /
             </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">    Skin & Hair in Lahore
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">    Skin & Hair in Wahdat Road
              /</a>
            </li>
           
            

          </ul>




        </nav>
              
               
  
  
              </Row>
              <Row>
  
                <Col xs={7}>
  
  
                  <ControlledCarousel imgsrc1="https://apollo-singapore.akamaized.net/v1/files/3p8notyeqhxt3-PK/image;s=1080x1080" imgsrc2="https://apollo-singapore.akamaized.net/v1/files/qp4cox8fzzf01-PK/image;s=1080x1080" imgsrc3="https://apollo-singapore.akamaized.net/v1/files/pzm2us9vr3dr2-PK/image;s=1080x1080" />
  
  
  
  
                  <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%", height: "40px" }}>
  
  
                  </div>
                  <br />
  
                  <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%" }}>
                    <Container fluid style={{ fontSize: "15px" }}>
                      <Row>
                        <Col xs={12} className="dis_heading">
                          <h1>Details</h1>
                        </Col>
                      </Row>
  
                      <Row>
                        <Col xs={3} className="dis_heading">
                          <p> Make </p>
  
                        </Col>
  
  
                        <Col xs={3}>
                          <p>New </p>
  
                        </Col>
                        <Col xs={3}>
                          <p></p>
  
                        </Col>
  
                        <Col xs={1}>
                          <p> </p>
  
                        </Col>
  
                      </Row>
                      <Row>
                        <Col xs={12} style={{ padding: "40px" }}>
                          <hr style={{ border: "1px solid black" }}></hr>
                        </Col>
                      </Row>
                      <Row>
                        < Col xs={12} className="dis_heading">
                          <h1>Description</h1>
                        </Col>
                      </Row>
  
                      <Row>
                        <Col xs={12} className="discription">
  
                          <p>Keywords: Aloe vera, health and beauty, skin</p>
                          <br />
                          <p>The Aloe vera plant has been known and used for centuries for its health, beauty, medicinal and skin care properties. The name Aloe vera derives from the Arabic word “Alloeh” meaning “shining bitter substance,” while “vera” in Latin means “true.” 2000 years ago, the Greek scientists regarded Aloe vera as the universal panacea. The Egyptians called Aloe “the plant of immortality.” Today, the Aloe vera plant has been used for various purposes in dermatology.</p>
  
                          <br />
                          <p>A product by handsome cosmetics</p>
                          <br />
                          <p>We give good profit margin to destributers</p>
                          <br />
                          <p>Contact us:<br />
  
                          O3OO 94O3633<br />
  
                         O3O9 481O939</p>
  
                        </Col>
                      </Row>
                    </Container>
  
                  </div>
                </Col>
  
  
  
  
  
  
  
  
  
  
                <Col xs={5}>
  
  
                  <div className="Dialog_inner_box">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3><b>Rs 200</b> <div style={{ float: "right" }}><ShareIcon /><FavoriteBorderIcon /></div></h3>
                    </div>
  
                    <div style={{ marginLeft: "10px" }}>
                      <p>Aloe Vera Gel bottle</p>
  
                      <p>Wahdat Road, Lahore, Punjab
  <div style={{ float: "right", marginRight: "10px" }}>Oct 03</div></p>
  
                    </div>
  
  
  
  
  
  
  
                  </div>
  
                  <div className="Dialog_inner_box2">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3>Seller description</h3>
                    </div>
  
                    <div style={{ marginLeft: "40px" }}>
  
                      <h3>Al_Qadeer Ad</h3>
                      <p> Member since Feb 2019</p>
  
  
  
                    </div>
                    <div style={{ textAlign: "center", padding: "10px" }} >
  
  
                      <button className="chat_with_seller">Chat with seller</button>
                      <div style={{ height: "20px" }}><LocalPhoneOutlinedIcon />*******</div>
                    </div>
  
  
  
  
  
  
                  </div>
  
                  <div className="Dialog_inner_box2">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3>Posted in</h3>
                    </div>
  
                    <div style={{ marginLeft: "40px" }}>
  
                      <p>Wahdat Road, Lahore, Punjab</p>
  
                    </div>
  
                    <img src={Mapiphonex} className="mapFawadcar" />
  
                  </div>
                  <div style={{ width: "450px", marginLeft: "30px" }}>
                    <h5 >AD ID 1016200708
  
  
                  <h5 style={{ float: "right" }}>REPORT THIS AD</h5></h5>
                  </div>
  
  
  
                </Col>
              </Row>
  
  
  
  
            </Container>
  <Footer/>
  
        
      </div>
  
    );
  }
  ////////////////////////////////////////////Card11/////////////////////
  function Homeitem_card11(props) {
    
  
    return (
      <div>
        <Header/>
        <Footer/>
            <Container fluid>
              <Row>
               
               <nav class="navbar navbar-expand-lg navbar-light mobilephone_popup_link  " >
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link" href="#">Home
              / </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#"> Kids
              
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Kids bikes in sindh
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> kids bike in karachi
              /
             </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">    Kids Bikes in Gulistan-e-Jauhar Block 18
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">    Skin & Hair in Wahdat Road
              </a>
            </li>
           
            

          </ul>




        </nav>
              
  
              </Row>
              <Row>
  
                <Col xs={7}>
  
  
                  <ControlledCarousel imgsrc1="https://apollo-singapore.akamaized.net/v1/files/rqrn9vcqynbj1-PK/image;s=1080x1080" imgsrc2="https://apollo-singapore.akamaized.net/v1/files/e8uglnftzwzj3-PK/image;s=1080x1080" />
  
  
  
  
                  <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%", height: "40px" }}>
  
  
                  </div>
                  <br />
  
                  <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%" }}>
                    <Container fluid style={{ fontSize: "15px" }}>
                      <Row>
                        <Col xs={12} className="dis_heading">
                          <h1>Details</h1>
                        </Col>
                      </Row>
  
                      <Row>
                        <Col xs={3} className="dis_heading">
                          <p> Make </p>
  
                        </Col>
  
  
                        <Col xs={3}>
                          <p>New </p>
  
                        </Col>
                        <Col xs={3}>
                          <p></p>
  
                        </Col>
  
                        <Col xs={1}>
                          <p> </p>
  
                        </Col>
  
                      </Row>
                      <Row>
                        <Col xs={12} style={{ padding: "40px" }}>
                          <hr style={{ border: "1px solid black" }}></hr>
                        </Col>
                      </Row>
                      <Row>
                        < Col xs={12} className="dis_heading">
                          <h1>Description</h1>
                        </Col>
                      </Row>
  
                      <Row>
                        <Col xs={12} className="discription">
  
                          <p>We are whole sale diller we make all kind of funrture we make furniture on odder for giving odder and for more information call us
  
  Location: near murree road gold point in zari market Rawalpindi</p>
  
  
                        </Col>
                      </Row>
                    </Container>
  
                  </div>
                </Col>
  
  
  
  
  
  
  
  
  
  
                <Col xs={5}>
  
  
                  <div className="Dialog_inner_box">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3><b>Rs 35,550</b> <div style={{ float: "right" }}><ShareIcon /><FavoriteBorderIcon /></div></h3>
                    </div>
  
                    <div style={{ marginLeft: "10px" }}>
                      <p>Ye bed,2 sidetables with dressing full kushan ma.with out pafi hai</p>
  
                      <p>Amer Pura, Rawalpindi, Punjab
  <div style={{ float: "right", marginRight: "10px" }}>Sep 26</div></p>
  
  
  
  
                    </div>
  
  
  
  
  
  
  
                  </div>
  
                  <div className="Dialog_inner_box2">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3>Seller description</h3>
                    </div>
  
                    <div style={{ marginLeft: "40px" }}>
  
                      <h3>Subhan Furniture 2</h3>
                      <p> Member since Aug 2017</p>
  
  
  
                    </div>
                    <div style={{ textAlign: "center", padding: "10px" }} >
  
  
                      <button className="chat_with_seller">Chat with seller</button>
                      <div style={{ height: "20px" }}><LocalPhoneOutlinedIcon />*******</div>
                    </div>
  
  
  
  
  
  
                  </div>
  
                  <div className="Dialog_inner_box2">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3>Posted in</h3>
                    </div>
  
                    <div style={{ marginLeft: "40px" }}>
  
                      <p>Amer Pura, Rawalpindi, Punjab</p>
  
                    </div>
  
                    <img src={Mapiphonex} className="mapFawadcar" />
  
                  </div>
                  <div style={{ width: "450px", marginLeft: "30px" }}>
                    <h5 >AD ID 1016200708
  
  
                  <h5 style={{ float: "right" }}>REPORT THIS AD</h5></h5>
                  </div>
  
  
  
                </Col>
              </Row>
  
  
  
  
            </Container>
  
  
      <Footer/>
      </div>
     
  
    );
  }
  /////////////////////////////////////////Card12////////////////////////////////////
  function Homeitem_card12(props) {
   
    return (
      <div>
       <Header/>
       <Footer/>
            <Container fluid>
              <Row>
                
  <nav class="navbar navbar-expand-lg navbar-light mobilephone_popup_link  " >
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link" href="#">Home
              / </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#"> Kids
              
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Kids bikes in sindh
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> kids bike in karachi
              /
             </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">    Kids Bikes in Gulistan-e-Jauhar Block 18
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">    Skin & Hair in Wahdat Road
              /</a>
            </li>
           
            

          </ul>




        </nav>
              
  
              </Row>
              <Row>
  
                <Col xs={7}>
  
  
                  <ControlledCarousel imgsrc1="https://apollo-singapore.akamaized.net/v1/files/rqrn9vcqynbj1-PK/image;s=1080x1080" imgsrc2="https://apollo-singapore.akamaized.net/v1/files/e8uglnftzwzj3-PK/image;s=1080x1080" />
  
  
  
  
                  <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%", height: "40px" }}>
  
  
                  </div>
                  <br />
  
                  <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%" }}>
                    <Container fluid style={{ fontSize: "15px" }}>
                      <Row>
                        <Col xs={12} className="dis_heading">
                          <h1>Details</h1>
                        </Col>
                      </Row>
  
                      <Row>
                        <Col xs={3} className="dis_heading">
                          <p> Make </p>
  
                        </Col>
  
  
                        <Col xs={3}>
                          <p>New </p>
  
                        </Col>
                        <Col xs={3}>
                          <p></p>
  
                        </Col>
  
                        <Col xs={1}>
                          <p> </p>
  
                        </Col>
  
                      </Row>
                      <Row>
                        <Col xs={12} style={{ padding: "40px" }}>
                          <hr style={{ border: "1px solid black" }}></hr>
                        </Col>
                      </Row>
                      <Row>
                        < Col xs={12} className="dis_heading">
                          <h1>Description</h1>
                        </Col>
                      </Row>
  
                      <Row>
                        <Col xs={12} className="discription">
  
                          <p>We are whole sale diller we make all kind of funrture we make furniture on odder for giving odder and for more information call us
  
  Location: near murree road gold point in zari market Rawalpindi</p>
  
  
                        </Col>
                      </Row>
                    </Container>
  
                  </div>
                </Col>
  
  
  
  
  
  
  
  
  
  
                <Col xs={5}>
  
  
                  <div className="Dialog_inner_box">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3><b>Rs 35,550</b> <div style={{ float: "right" }}><ShareIcon /><FavoriteBorderIcon /></div></h3>
                    </div>
  
                    <div style={{ marginLeft: "10px" }}>
                      <p>Ye bed,2 sidetables with dressing full kushan ma.with out pafi hai</p>
  
                      <p>Amer Pura, Rawalpindi, Punjab
  <div style={{ float: "right", marginRight: "10px" }}>Sep 26</div></p>
  
  
  
  
                    </div>
  
  
  
  
  
  
  
                  </div>
  
                  <div className="Dialog_inner_box2">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3>Seller description</h3>
                    </div>
  
                    <div style={{ marginLeft: "40px" }}>
  
                      <h3>Subhan Furniture 2</h3>
                      <p> Member since Aug 2017</p>
  
  
  
                    </div>
                    <div style={{ textAlign: "center", padding: "10px" }} >
  
  
                      <button className="chat_with_seller">Chat with seller</button>
                      <div style={{ height: "20px" }}><LocalPhoneOutlinedIcon />*******</div>
                    </div>
  
  
  
  
  
  
                  </div>
  
                  <div className="Dialog_inner_box2">
                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <h3>Posted in</h3>
                    </div>
  
                    <div style={{ marginLeft: "40px" }}>
  
                      <p>Amer Pura, Rawalpindi, Punjab</p>
  
                    </div>
  
                    <img src={Mapiphonex} className="mapFawadcar" />
  
                  </div>
                  <div style={{ width: "450px", marginLeft: "30px" }}>
                    <h5 >AD ID 1016200708
  
  
                  <h5 style={{ float: "right" }}>REPORT THIS AD</h5></h5>
                  </div>
  
  
  
                </Col>
              </Row>
  
  
  
  
            </Container>
  
  
         <Footer/>
      </div>
  
    );
  }
  
class Itemcard1 extends Component {




    render() { // attribute=prop   App say data pass karan toh wo prop hota hai
        return (
            <div  >


                <Header />

                <Navbar />
                <Container fluid>
                <Row>


                <nav class="navbar navbar-expand-lg navbar-light mobilephone_popup_link  " >
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link" href="#">Home
              / </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">  Mobile Phones
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> Mobile Phones in Sindh
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mobile Phones in Karachi
              /
             </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> Mobile Phones in Saddar
              /</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Motorola in Saddar</a>
            </li>
            

          </ul>




        </nav>
             

            </Row>
            <Row>

              <Col xs={7}>


                <ControlledCarousel imgsrc1="https://apollo-singapore.akamaized.net/v1/files/n4pg5frjqn3d2-PK/image;s=1080x1080" imgsrc2="https://apollo-singapore.akamaized.net/v1/files/64q0t08lk4372-PK/image;s=1080x1080" imgsrc3="https://apollo-singapore.akamaized.net/v1/files/k7ym015b9p391-PK/image;s=1080x1080" />




                <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%", height: "40px" }}>


                </div>
                <br />

                <div style={{ border: "1px solid gray", marginLeft: "20px", width: "100%" }}>
                  <Container fluid style={{ fontSize: "15px" }}>
                    <Row>
                      <Col xs={12} className="dis_heading">
                        <h1>Details</h1>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={3} className="dis_heading">
                        <p> Make </p>

                      </Col>


                      <Col xs={3}>
                        <p>Motorola</p>

                      </Col>
                      <Col xs={3}>
                        <p>Condition</p>

                      </Col>

                      <Col xs={1}>
                        <p> Used</p>

                      </Col>

                    </Row>
                    <Row>
                      <Col xs={12} style={{ padding: "40px" }}>
                        <hr style={{ border: "1px solid black" }}></hr>
                      </Col>
                    </Row>
                    <Row>
                      < Col xs={12} className="dis_heading">
                        <h1>Description</h1>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={12} className="discription">

                        <p>Moto G6 Plus</p>


                        <br />
                        <p>Single Sim PTA approved</p>

                        <p>4 GB 64 GB</p>

                        <p> Finger print sensor</p>

                        <p>3200 mAh Battary</p>
                        <br />
                        <p>Available @ MOBI WAYY</p>
                        <p>Shop no 284, 2nd floor star city mall saddar Karachi.</p>


                      </Col>
                    </Row>
                  </Container>

                </div>
              </Col>










              <Col xs={5}>


                <div className="Dialog_inner_box">
                  <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                    <h3><b>Rs 16,500</b> <div style={{ float: "right" }}><ShareIcon /><FavoriteBorderIcon /></div></h3>
                  </div>

                  <div style={{ marginLeft: "10px" }}>
                    <p>Moto G6 plus</p>

                    <p>Saddar, Karachi, Sindh<div style={{ float: "right", marginRight: "10px" }}>Sep 23</div></p>




                  </div>







                </div>

                <div className="Dialog_inner_box2">
                  <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                    <h3>Seller description</h3>
                  </div>

                  <div style={{ marginLeft: "40px" }}>

                    <h3>MobiWay</h3>
                    <p> Member since Sep 2018 </p>



                  </div>
                  <div style={{ textAlign: "center", padding: "10px" }} >


                    <button className="chat_with_seller">Chat with seller</button>
                    <div style={{ height: "20px" }}><LocalPhoneOutlinedIcon />*******</div>
                  </div>






                </div>

                <div className="Dialog_inner_box2">
                  <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                    <h3>Posted in</h3>
                  </div>

                  <div style={{ marginLeft: "40px" }}>

                    <p>Saddar, Karachi, Sindh</p>

                  </div>

                  <img src={Mapiphonex} className="mapFawadcar" />

                </div>
                <div style={{ width: "450px", marginLeft: "30px" }}>
                  <h5 >AD ID 1021751139


                <h5 style={{ float: "right" }}>REPORT THIS AD</h5></h5>
                </div>



              </Col>
            </Row>




          </Container>



                <Footer />







            </div>



        )
    }
}
class Itemcard2 extends Component {




    render() { // attribute=prop   App say data pass karan toh wo prop hota hai
        return (
            <div  >


                <Header />

                <Navbar />


                <Footer />







            </div>



        )
    }
}













export { Itemcard1, Itemcard2,Homeitem_card1,Homeitem_card2,Homeitem_card3,Homeitem_card4,Homeitem_card5,Homeitem_card6,Homeitem_card7,Homeitem_card8,Homeitem_card9,Homeitem_card10,Homeitem_card11,Homeitem_card12
}