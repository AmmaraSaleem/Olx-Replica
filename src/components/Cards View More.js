import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import React, { useState } from 'react';



function ViewMore(props)  {
  
        return (
            <div>

                <Container className="viewMore_Cards">
                    <ViewMoreCardHeading />



                    <Row style={{ marginLeft: "20px" }} >
                        <Cards imgsrc="https://apollo-singapore.akamaized.net/v1/files/9hhnldatpeg6-PK/image;s=300x600;q=60" text='Vintage Swiss Longines Diamond Dia..' date='4 days ago'title='Rs 75,000'/>
                        <Cards imgsrc='https://apollo-singapore.akamaized.net/v1/files/qz2q4i6mq0m72-PK/image;s=300x600;q=60' text='Toyota Vitz 1.5 On Easy Installments'title='Rs 400,000 - Flexible' date='sep 29'/>
                        <Cards  imgsrc='https://apollo-singapore.akamaized.net/v1/files/2jr1m71bfnkp1-PK/image;s=300x600;q=60'title='Rs 300,000 - Flexible' text='Toyota corolla Gli 2012 Get On Easy..' date="oct 8"/>
                        <Cards imgsrc='https://apollo-singapore.akamaized.net/v1/files/r9srdc4rvxmd-PK/image;s=300x600;q=60' title='Rs 46,000' text='60inch Smart++A+' date='sep 16'/>
                    </Row>
                </Container >
            </div>


        )
    }

class Featured extends React.Component {

    render() {

        return (
            <p style={{ backgroundColor: "yellow", width: '50px', fontWeight: "bold", color: "black", marginLeft: "10px ", textAlign: "center", fontSize: "10px" }} >FEATURED </p>


        )
    }
}

class ViewMoreCardHeading extends React.Component {

    render() {

        return (
            <p className="ViewMoreCardHeading">More on Mobile Phone</p>


        )
    }
}


function Cards(props) {

    return (
        <>

            <div class="card  " style={{ width: "250px", margin: "10px" }} >

                <FavoriteBorderIcon className="heart_icon" />
                <Featured />
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
export default ViewMore