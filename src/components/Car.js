import React, { Component } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';


function Cards(props) {

    return (
        <>

            <div class="card  " style={{ width: "250px" }} >

                <FavoriteBorderIcon className="heart_icon" />

                <img src={props.imgsrc} class="card-img-top  " alt="..." />


                <div>

                    <h5 class="card-title"><b style={{ marginLeft: "10px" }}>{props.title}</b></h5>
                    <p class="card-text " style={{ fontSize: "14px", marginLeft: "10px" }}>{props.text}</p>
                    <p style={{ fontSize: "10px", marginLeft: "10px" }}>{props.small} <p style={{ fontSize: "10px", float: "right", marginLeft: "10px" }}>{props.date}</p></p>

                </div>


            </div>


        </>

    )
}

class PopularSearch_cars extends Component {
    render() {
        return (
            <div  >
                <nav class="navbar navbar-expand-lg navbar-light  " >
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
                    <p>Home/Vicles</p>
                    <h2>Cars</h2>
                </div>




            </div>



        )
    }
}





function Categories_cars() {

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
                                <a href="#" style={{ fontSize: "15px" }}>Vehicles</a>
                                <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}><b>Cars (58010)</b></a>
                                <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Cars on Installments (11217)</a>
                                <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Cars Accessories (11604)</a>
                                <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Spare Parts (9276)</a>
                                <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Buses,Vans & truck (5480)</a>
                                <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Rickshaw & Chingchi</a>
                                <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Other Vehicles (8438)</a>
                                <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Boats (320)</a>
                                <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Tractors & Trailers (1519)</a>
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

                                <VieMore_content1 />

                            </div>


                            <hr></hr>
                            <button class="dropdown-btn"><b>MAKE AND MODEL</b>
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-container">

                                <a href="#" style={{ fontSize: "15px" }}>Suzuki (49312)</a>
                                <a href="#" style={{ fontSize: "15px" }}>Toyota (42257)</a>
                                <a href="#" style={{ fontSize: "15px" }}>Honda (21991)</a>
                                <a href="#" style={{ fontSize: "15px" }}>Daihastsu (20003)</a>
                                <a href="#" style={{ fontSize: "15px" }}>Nissan(11254)</a>

                                <VieMore_content2 />

                            </div>
                            <hr />

                            <button class="dropdown-btn"><b>Price</b>
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-container">

                                <TextField id="filled-basic" label="Min" variant="filled" style={{ width: "130px" }} /><span><TextField id="filled-basic" label="Max" variant="filled" style={{ width: "130px", marginLeft: "10px" }} /></span>


                            </div>
                            <hr />

                            <button class="dropdown-btn"><b>Year</b>
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-container">

                                <TextField id="filled-basic" label="Min" variant="filled" style={{ width: "130px" }} /><span><TextField id="filled-basic" label="Max" variant="filled" style={{ width: "130px", marginLeft: "10px" }} /></span>


                            </div>

                            <hr />

                            <br />


                        </div>



                    </div>
                </div>




                <div className="col-9">

                    <div class="container">
                        <div class="row ">







                        </div>
                    </div>








                </div>

















            </div>










        </div>

















    )
}
function VieMore_content1() {
    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
        <p className="extra-content">
            <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Azad Kashmir (319)</a>
            <a href="#" style={{ marginLeft: "30px", fontSize: "15px" }}>Northern Area(5)</a>
        </p>
    </div>
    const linkName = readMore ? 'View less ' : 'View more'
    return (
        <div className="">
            <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h2 style={{ fontSize: "15px", marginLeft: "30px", color: "blue" }}>{linkName}</h2></a>
            {readMore && extraContent}
        </div>
    );
}
function VieMore_content2() {
    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
        <a href="#" style={{ fontSize: "15px" }}>Suzuki (49312)</a>
        <a href="#" style={{ fontSize: "15px" }}>Mitsubishi (967)</a>
        <a href="#" style={{ fontSize: "15px" }}>Hyundai (933)</a>
        <a href="#" style={{ fontSize: "15px" }}>Other Brands (554)</a>
        <a href="#" style={{ fontSize: "15px" }}>KIA(445)</a>
        <a href="#" style={{ fontSize: "15px" }}>FAW(288)</a>
        <a href="#" style={{ fontSize: "15px" }}>Mitsubishi (967)</a>
        <a href="#" style={{ fontSize: "15px" }}>Mercedes(229)</a>
        <a href="#" style={{ fontSize: "15px" }}>Other Brands (554)  </a>

    </div>
    const linkName = readMore ? 'View less ' : 'View more'
    return (
        <div className="">
            <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h2 style={{ fontSize: "15px", color: "blue" }}>{linkName}</h2></a>
            {readMore && extraContent}
        </div>
    );
}




export { PopularSearch_cars, Categories_cars }
