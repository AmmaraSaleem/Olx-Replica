import React, { Component } from 'react';
import CARDIMAGES from '../cards/phone.jpg'
import bike from '../cards/bike.jpg'
import LCD from '../cards/lcd.jpg'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

class PopularSearch_Motercycle extends Component {
    render() {
        return (
            <div  >
                <nav class="navbar navbar-expand-lg navbar-light  ">
                    <ul class="navbar-nav">
                        <li class="nav-item ">
                            <a class="nav-link" href="#"><b>Popular Search:</b> </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#">honda 125  -</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">yamaha -</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">kawaski -</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">honda 70 -</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">suzuki -</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ybr -</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">unique -</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">heavy bike -</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">super power -</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">road prince</a>
                        </li>





                    </ul>




                </nav>
                <div style={{ marginTop: "20px", marginLeft: "20px", fontSize: "15px" }}>
                    <p>Home/Bikes</p>
                    <h2>Motercycles</h2>
                </div>
            </div>



        )
    }
}





class Categories_Motercycle extends Component {

    render() {
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
                                    <a href="#" style={{ fontSize: "15px" }}>Bikes</a>
                                    <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}><b>Motorcycles (22913)</b></a>
                                    <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Spare Parts (4764)</a>
                                    <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Bicycles (6572)</a>
                                    <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>ATV Quads (995)</a>
                                    <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Scooters (257)</a>
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
                                    <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Azad Kashmir (258)</a>

                                    <div data-toggle="collapse" data-target="#demo" style={{ cursor: "pointer", marginLeft: "45px", color: "blue",fontSize:"15px" }}>View more</div>
                                    <div id="demo" class="collapse">

                                        <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Punjab (125265)</a>
                                    </div>

                                </div>


                                <hr></hr>
                                <button class="dropdown-btn"><b>MAKE</b>
                                    <i class="fa fa-caret-down"></i>
                                </button>
                                <div class="dropdown-container">

                                    <a href="#" style={{ fontSize: "15px" }}>Honda (49312)</a>
                                    <a href="#" style={{ fontSize: "15px" }}>Other Brands (42257)</a>
                                    <a href="#" style={{ fontSize: "15px" }}>Yamaha(21991)</a>
                                    <a href="#" style={{ fontSize: "15px" }}>Suzuki(20003)</a>
                                    <a href="#" style={{ fontSize: "15px" }}>United(11254)</a>

                                    <div data-toggle="collapse" data-target="#demo" style={{ cursor: "pointer", marginLeft: "15px",fontSize:"15px" }}>View all</div>
                                    <div id="demo" class="collapse">

                                        <a href="#" style={{ fontSize: "15px" }}>Punjab (125265)</a>
                                    </div>

                                </div>
                                

                               


                            </div>



                        </div>

                    </div>





                    <div class="col-md-9">
                        <br/>
                        
                        
                        <p>22,913 ads in <b>Pakistan</b><b style={{float:"right"}}>VIEW</b></p>
                        
                        <hr></hr>

                        <div class="card-deck card-row" >

                            <div class="card  " >
                                <FavoriteBorderIcon className="heart_icon" />
                                <img src={CARDIMAGES} class="card-img-top " alt="..." />

                                <div class="card-body bg-light">
                                    <h5 class="card-title"><b>Rs 47,000</b></h5>
                                    <p class="card-text">huawei P20 pro</p>
                                </div>



                            </div>




                            <div class="card ">
                                <FavoriteBorderIcon className="heart_icon" />
                                <img src={bike} class="card-img-top " alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"><b>Rs 47,000</b></h5>
                                    <p class="card-text small"><b>Brand new zero Meter 2020 Sports</b></p>


                                </div>
                            </div>
                            <div class="card ">
                                <FavoriteBorderIcon className="heart_icon" />
                                <img src={bike} class="card-img-top " alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"><b>Rs 47,000</b></h5>
                                    <p class="card-text small"><b>Brand new zero Meter 2020 Sports</b></p>


                                </div>
                            </div>



                            <div class="card">
                                <FavoriteBorderIcon className="heart_icon" />
                                <img src={LCD} class="card-img-top " alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"><b>Rs 47,000</b></h5>
                                    <p class="card-text small"><b>Limmited offer 60 inch Smart LCD</b></p>


                                </div>
                            </div>


                        </div>

                        <br />
                        <div class="card-deck card-row" >

                            <div class="card  " >
                                <FavoriteBorderIcon className="heart_icon" />
                                <img src={CARDIMAGES} class="card-img-top " alt="..." />

                                <div class="card-body bg-light">
                                    <h5 class="card-title"><b>Rs 47,000</b></h5>
                                    <p class="card-text">huawei P20 pro</p>
                                </div>



                            </div>




                            <div class="card ">
                                <FavoriteBorderIcon className="heart_icon" />
                                <img src={bike} class="card-img-top " alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"><b>Rs 47,000</b></h5>
                                    <p class="card-text small"><b>Brand new zero Meter 2020 Sports</b></p>


                                </div>
                            </div>
                            <div class="card ">
                                <FavoriteBorderIcon className="heart_icon" />
                                <img src={bike} class="card-img-top " alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"><b>Rs 47,000</b></h5>
                                    <p class="card-text small"><b>Brand new zero Meter 2020 Sports</b></p>


                                </div>
                            </div>



                            <div class="card">
                                <FavoriteBorderIcon className="heart_icon" />
                                <img src={LCD} class="card-img-top " alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"><b>Rs 47,000</b></h5>
                                    <p class="card-text small"><b>Limmited offer 60 inch Smart LCD</b></p>


                                </div>
                            </div>


                        </div>
                        <br />
                        <br />

                        <div class="card-deck card-row" >

                            <div class="card  " >
                                <FavoriteBorderIcon className="heart_icon" />
                                <img src={CARDIMAGES} class="card-img-top " alt="..." />

                                <div class="card-body bg-light">
                                    <h5 class="card-title"><b>Rs 47,000</b></h5>
                                    <p class="card-text">huawei P20 pro</p>
                                </div>



                            </div>




                            <div class="card ">
                                <FavoriteBorderIcon className="heart_icon" />
                                <img src={bike} class="card-img-top " alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"><b>Rs 47,000</b></h5>
                                    <p class="card-text small"><b>Brand new zero Meter 2020 Sports</b></p>


                                </div>
                            </div>
                            <div class="card ">
                                <FavoriteBorderIcon className="heart_icon" />
                                <img src={bike} class="card-img-top " alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"><b>Rs 47,000</b></h5>
                                    <p class="card-text small"><b>Brand new zero Meter 2020 Sports</b></p>


                                </div>
                            </div>



                            <div class="card">
                                <FavoriteBorderIcon className="heart_icon" />
                                <img src={LCD} class="card-img-top " alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"><b>Rs 47,000</b></h5>
                                    <p class="card-text small"><b>Limmited offer 60 inch Smart LCD</b></p>


                                </div>
                            </div>


                        </div>

                        <br />
                        <div class="card-deck card-row" >

                            <div class="card  " >
                                <FavoriteBorderIcon className="heart_icon" />
                                <img src={CARDIMAGES} class="card-img-top " alt="..." />

                                <div class="card-body bg-light">
                                    <h5 class="card-title"><b>Rs 47,000</b></h5>
                                    <p class="card-text">huawei P20 pro</p>
                                </div>



                            </div>




                            <div class="card ">
                                <FavoriteBorderIcon className="heart_icon" />
                                <img src={bike} class="card-img-top " alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"><b>Rs 47,000</b></h5>
                                    <p class="card-text small"><b>Brand new zero Meter 2020 Sports</b></p>


                                </div>
                            </div>
                            <div class="card ">
                                <FavoriteBorderIcon className="heart_icon" />
                                <img src={bike} class="card-img-top " alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"><b>Rs 47,000</b></h5>
                                    <p class="card-text small"><b>Brand new zero Meter 2020 Sports</b></p>


                                </div>
                            </div>



                            <div class="card">
                                <FavoriteBorderIcon className="heart_icon" />
                                <img src={LCD} class="card-img-top " alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"><b>Rs 47,000</b></h5>
                                    <p class="card-text small"><b>Limmited offer 60 inch Smart LCD</b></p>


                                </div>
                            </div>


                        </div>
                        <br />

                        <div class="card-deck card-row" >

                            <div class="card  " >
                                <FavoriteBorderIcon className="heart_icon" />
                                <img src={CARDIMAGES} class="card-img-top " alt="..." />

                                <div class="card-body bg-light">
                                    <h5 class="card-title"><b>Rs 47,000</b></h5>
                                    <p class="card-text">huawei P20 pro</p>
                                </div>



                            </div>




                            <div class="card ">
                                <FavoriteBorderIcon className="heart_icon" />
                                <img src={bike} class="card-img-top " alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"><b>Rs 47,000</b></h5>
                                    <p class="card-text small"><b>Brand new zero Meter 2020 Sports</b></p>


                                </div>
                            </div>
                            <div class="card ">
                                <FavoriteBorderIcon className="heart_icon" />
                                <img src={bike} class="card-img-top " alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"><b>Rs 47,000</b></h5>
                                    <p class="card-text small"><b>Brand new zero Meter 2020 Sports</b></p>


                                </div>
                            </div>



                            <div class="card">
                                <FavoriteBorderIcon className="heart_icon" />
                                <img src={LCD} class="card-img-top " alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"><b>Rs 47,000</b></h5>
                                    <p class="card-text small"><b>Limmited offer 60 inch Smart LCD</b></p>


                                </div>
                            </div>


                        </div>







                    </div>





                </div>

            </div>







        )
    }

}


export { PopularSearch_Motercycle, Categories_Motercycle };
