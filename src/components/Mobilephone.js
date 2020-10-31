import React, { Component } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link } from 'react-router-dom';
import Iphonex1 from '../cards/iphonex1.jpg'
import HorizontalSplitTwoToneIcon from '@material-ui/icons/HorizontalSplitTwoTone';
import TextField from '@material-ui/core/TextField';



function Cards(props) {

  return (
    <>

      <div class="card  " style={{ width: "250px", color: "black", margin: "20px" }} >

        <FavoriteBorderIcon className="heart_icon" />

        <img src={props.imgsrc} class="card-img-top  " alt="..." />


        <div>

          <h5 class="card-title"><b style={{ marginLeft: "10px" }}>{props.title}</b></h5>
          <p class="card-text " style={{ fontSize: "14px", marginLeft: "10px" }}>{props.text}</p>
          <p style={{ fontSize: "10px", marginLeft: "10px" }}>{props.small} <p style={{ fontSize: "10px", float: "right", marginLeft: "10px", marginRight: "10px" }}>{props.date}</p></p>

        </div>


      </div>


    </>

  )
}

class PopularSearch extends Component {
  render() {
    return (
      <div  >
        <nav class="navbar navbar-expand-lg navbar-light  ">
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link" href="#"><b>Popular Search</b> </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">iphone  - </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">samsung -</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">oppo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">infinix</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">vivo s1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">huawei</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">nokia</a>
            </li>

          </ul>




        </nav>
        <div style={{ marginTop: "20px", marginLeft: "20px", fontSize: "15px" }}>
          <p>Home/Mobiles</p>
          <h2>Mobile Phones</h2>
        </div>




      </div>



    )
  }
}





function Categories(props) {

  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }

  return (

    <div className="container-fluid" >
      <div className="row">
        <div className="col-md-3">


          <div>
            <p style={{ fontSize: "20px", marginLeft: '50px', marginTop: '30px' }}><b>Filters</b></p>
            <hr></hr>
            <div class="sidenav">

              <button class="dropdown-btn"><b>CATEGORIES</b>
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-container">
                <a href="#" style={{ fontSize: "15px" }} >All Categories</a>
                <a href="#" style={{ fontSize: "15px" }}>Mobiles</a>
                <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Tablets(6720)</a>
                <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Accessories(29658)</a>
                <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}><b>Mobile Phones (201937)</b></a>
              </div>
              <hr></hr>
              <br />



              <button class="dropdown-btn"><b>LOCATION</b>
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-container">
                <a href="#" style={{ fontSize: "15px" }} ><b>PAKISTAN</b></a>
                <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Punjab (125265)</a>
                <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Sindh (48437)</a>
                <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Khyber Pakhtunkhwa (14568)</a>
                <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Islamabad Capital Territory (10710)</a>
                <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Balochistan (1754)</a>

                <div data-toggle="collapse" data-target="#demo" style={{ cursor: "pointer", marginLeft: "45px", color: "blue" }}>View more</div>
                <div id="demo" class="collapse">

                  <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Punjab (125265)</a>
                </div>

              </div>


              <hr></hr>
              <button class="dropdown-btn"><b>MAKE</b>
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-container">

                <a href="#" style={{ fontSize: "15px" }}>Samsung (49312)</a>
                <a href="#" style={{ fontSize: "15px" }}>Applde (42257)</a>
                <a href="#" style={{ fontSize: "15px" }}>Huawei (21991)</a>
                <a href="#" style={{ fontSize: "15px" }}>OPPO (20003)</a>
                <a href="#" style={{ fontSize: "15px" }}>Vivo (11254)</a>

                <div data-toggle="collapse" data-target="#demo" style={{ cursor: "pointer", marginLeft: "15px" }}>View all</div>
                <div id="demo" class="collapse">

                  <a href="#" style={{ fontSize: "15px" }}>Punjab (125265)</a>
                </div>

              </div>
              <hr />
              <button class="dropdown-btn"><b>Price</b>
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-container">

                <TextField id="filled-basic" label="Min" variant="filled" style={{width:"130px"}} /><span><TextField id="filled-basic" label="Max" variant="filled" style={{width:"130px",marginLeft:"10px"}} /></span>
                
               
              </div>

              <hr />
              <button class="dropdown-btn"><b>Condition</b>
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-container">

                <label class="container"> <p style={{ marginLeft: "30px" }}>used (12468)</p>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="container"><p style={{ marginLeft: "30px" }}>new (5968)</p>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>


                <div id="demo" class="collapse">

                  <a href="#" style={{ fontSize: "15px" }}>Punjab (125265)</a>
                </div>

              </div>

              <br />


            </div>



          </div>
        </div>




        <div className="col-9">

          <div class="container">
            <div >
              <p >178,352 ads in Pakistan<div style={{ fontSize: "20px", float: "right" }}><b style={{ margin: "10px" }}>VIEW</b><HorizontalSplitTwoToneIcon />
                <i class="fas fa-laptop" style={{ margin: "10px" }}></i><i class="fas fa-columns"></i><span style={{ fontSize: "15px" }}>
                </span>  </div></p>
              <hr></hr>
            </div>



            <div class="row mt-sm-3 mb-sm-1  ">


              <Link to='/home_card2' > <Cards imgsrc="http://localhost:3000/static/media/Samsung%20phone%201.a3e6997a.jpg" title="  Rs 49,000" text="Sasmung a90 6gb 128gb non pta" small="Gaddafi Stadium, Lahore, Punjab
         " date="6 days ago"
              /></Link>
              <Link to='/home_card4' >        <Cards imgsrc={Iphonex1} title='Rs 75,000' text='iphone x 64gb' small="Central Jacob Lines, Karachi, Sindh

"  date='Today' /></Link>
              <Link to='/home_card5' >
                <Cards imgsrc='https://apollo-singapore.akamaized.net/v1/files/n4pg5frjqn3d2-PK/image;s=1080x1080' title='Rs 16,500' text='Moto G6 plus' small="Saddar,Karachi,Sindh

           "  date='sep 23' /></Link>







            </div>
            <div class="row mt-sm-3 mb-sm-1  ">

              <Link to='/home_card2' > <Cards imgsrc="http://localhost:3000/static/media/Samsung%20phone%201.a3e6997a.jpg" title="  Rs 49,000" text="Sasmung a90 6gb 128gb non pta" small="Gaddafi Stadium, Lahore, Punjab
" date="6 days ago"
              /></Link>
              <Link to='/home_card4' >        <Cards imgsrc={Iphonex1} title='Rs 75,000' text='iphone x 64gb' small="Central Jacob Lines, Karachi, Sindh

"  date='Today' /></Link>
              <Link to='/home_card5' >
                <Cards imgsrc='https://apollo-singapore.akamaized.net/v1/files/n4pg5frjqn3d2-PK/image;s=1080x1080' title='Rs 16,500' text='Moto G6 plus' small="Saddar,Karachi,Sindh

"  date='sep 23' /></Link>







            </div>
            <div class="row mt-sm-3 mb-sm-1  ">

              <Link to='/home_card2' > <Cards imgsrc="http://localhost:3000/static/media/Samsung%20phone%201.a3e6997a.jpg" title="  Rs 49,000" text="Sasmung a90 6gb 128gb non pta" small="Gaddafi Stadium, Lahore, Punjab
" date="6 days ago"
              /></Link>
              <Link to='/home_card4' >        <Cards imgsrc={Iphonex1} title='Rs 75,000' text='iphone x 64gb' small="Central Jacob Lines, Karachi, Sindh

"  date='Today' /></Link>
              <Link to='/home_card5' >
                <Cards imgsrc='https://apollo-singapore.akamaized.net/v1/files/n4pg5frjqn3d2-PK/image;s=1080x1080' title='Rs 16,500' text='Moto G6 plus' small="Saddar,Karachi,Sindh

"  date='sep 23' /></Link>







            </div>
            <div class="row mt-sm-3 mb-sm-1  ">

              <Link to='/home_card2' > <Cards imgsrc="http://localhost:3000/static/media/Samsung%20phone%201.a3e6997a.jpg" title="  Rs 49,000" text="Sasmung a90 6gb 128gb non pta" small="Gaddafi Stadium, Lahore, Punjab
" date="6 days ago"
              /></Link>
              <Link to='/home_card4' >        <Cards imgsrc={Iphonex1} title='Rs 75,000' text='iphone x 64gb' small="Central Jacob Lines, Karachi, Sindh

"  date='Today' /></Link>
              <Link to='/home_card5' >
                <Cards imgsrc='https://apollo-singapore.akamaized.net/v1/files/n4pg5frjqn3d2-PK/image;s=1080x1080' title='Rs 16,500' text='Moto G6 plus' small="Saddar,Karachi,Sindh

"  date='sep 23' /></Link>







            </div>





          </div>

        </div>




























      </div>










    </div>

















  )
}




export { PopularSearch, Categories };
