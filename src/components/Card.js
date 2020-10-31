import React, { Component } from 'react';
import Car1 from '../cards/car1.webp'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import HandSanitaizer1 from '../cards/HandSanitaizer1.jpg'
import Iphonex1 from '../cards/iphonex1.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class Featured extends Component {

  render() {

    return (
      <p style={{ backgroundColor: "yellow", width: '50px', fontWeight: "bold", color: "black", marginLeft: "10px ", textAlign: "center", fontSize: "10px" }} >FEATURED </p>


    )
  }
}
function CardViewMore() {
  const [readMore, setReadMore] = useState(false);
  const extraContent = <span>
    <Container className="viewMore_Cards" className="extra-content">


      <Row >
        <Link to='/home_card5' >
          <Cards imgsrc='https://apollo-singapore.akamaized.net/v1/files/n4pg5frjqn3d2-PK/image;s=1080x1080' title='Rs 16,500' text='Moto G6 plus' small="Saddar,Karachi,Sindh

           "  date='sep 23' /></Link>
        <Link to='/home_card1' ><Cards imgsrc={Car1} title='Rs 440,000 - 7' text=' Years Toyota Gli 2013' small=' F-7, Islamabad, Islamabad Capital Territory' date="sep 30" /></Link>

        <Link to='/home_card2' > <Cards imgsrc="http://localhost:3000/static/media/Samsung%20phone%201.a3e6997a.jpg" title="  Rs 49,000" text="Sasmung a90 6gb 128gb non pta" small="Gaddafi Stadium, Lahore, Punjab
" date="6 days ago"
        /></Link>

        <Link to='/home_card9' > <Cards imgsrc='https://apollo-singapore.akamaized.net/v1/files/3w4x2zrwow6-PK/image;s=1080x1080' title="Rs 18,000" text="Kids cot in very good condition with.." small="Adiala Road, Rawalpindi, Punjab

" date="Today" />
        </Link>
      </Row>
    </Container >

  </span>
  const linkName = readMore ? 'See Less  ' : 'Load More '
  return (
    <div className="App">
      <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><span>{linkName}</span></a>
      {readMore && extraContent}
    </div>
  );
}



// ////////////////////////////CARCOUSEL////////////////////////////////////////

// function ControlledCarousel(props) {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect} style={{ marginLeft: "40px" }}>
//       <Carousel.Item>
//         <img
//           style={{ height: '500px' }}
//           className="d-block w-100"
//           src={props.imgsrc1}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           style={{ height: '500px' }}
//           className="d-block w-100"
//           src={props.imgsrc2}
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           style={{ height: '500px' }}
//           className="d-block w-100"
//           src={props.imgsrc3}
//           alt="Third slide"
//         />


//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }





// //////////////////////////////////////////All Card Props////////////////////////////////




function Cards(props) {

  return (
    <>

      <div class="card  " style={{ width: "250px", margin: "10px", marginLeft: "20px", color: "black", textDecoration: "none" }} >

        <FavoriteBorderIcon className="heart_icon" />
        <Featured />
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
// /////////////////////////////////////////FullScreenDialog 1////////////////////////////////////





class Card extends Component {



  render() {


    return (




      <div class="container">
        <div class="row ">




          <Link to='/home_card1' ><Cards imgsrc={Car1} title='Rs 440,000 - 7' text=' Years Toyota Gli 2013' small=' F-7, Islamabad, Islamabad Capital Territory' date="sep 30" /></Link>

          <Link to='/home_card2' > <Cards imgsrc="http://localhost:3000/static/media/Samsung%20phone%201.a3e6997a.jpg" title="  Rs 49,000" text="Sasmung a90 6gb 128gb non pta" small="Gaddafi Stadium, Lahore, Punjab
         " date="6 days ago"
          /></Link>
          <Link to='/home_card3' >    <Cards imgsrc={HandSanitaizer1} title='Rs 200' text='Handsanitizer' small="DHA Phase 2, Lahore, Punjab
          "  date='Sep 25' /></Link>
          <Link to='/home_card4' >        <Cards imgsrc={Iphonex1} title='Rs 75,000' text='iphone x 64gb' small="Central Jacob Lines, Karachi, Sindh

           "  date='Today' /></Link>










        </div>



        <div class="row mt-sm-3 mb-sm-1  ">

          <Link to='/home_card5' >
            <Cards imgsrc='https://apollo-singapore.akamaized.net/v1/files/n4pg5frjqn3d2-PK/image;s=1080x1080' title='Rs 16,500' text='Moto G6 plus' small="Saddar,Karachi,Sindh

           "  date='sep 23' /></Link>
          <Link to='/home_card6' >
            <Cards imgsrc='https://apollo-singapore.akamaized.net/v1/files/hdbxed1tlbss2-PK/image;s=1080x1080' text="Office and gaming chair _ Contact..." title='Rs 23,000' small="Rehmanabad, Rawalpindi, Punjab
" date="Today" /></Link>
          <Link to='/home_card7' > <Cards imgsrc='https://apollo-singapore.akamaized.net/v1/files/rqrn9vcqynbj1-PK/image;s=1080x1080' title="Rs 35,550" text="Ye bed,2 sidetables with dressing full.." small="Amer Pura, Rawalpindi, Punjab" date="Sep 26" />

          </Link>
          <Link to='/home_card8' > <Cards imgsrc='https://apollo-singapore.akamaized.net/v1/files/bqqlihfno10x-PK/image;s=300x600;q=60' text="Suzuki GD110s Red for sale" title="Rs 115,000" small="Model Colony, Karachi, Sindh

" date="3 days ago" /></Link>






        </div>




        <div class="row mt-sm-3 mb-sm-1  ">
          <Link to='/home_card9' > <Cards imgsrc='https://apollo-singapore.akamaized.net/v1/files/3w4x2zrwow6-PK/image;s=1080x1080' title="Rs 18,000" text="Kids cot in very good condition with.." small="Adiala Road, Rawalpindi, Punjab

" date="Today" />
          </Link>
          <Link to='/home_card10' >  <Cards imgsrc='https://apollo-singapore.akamaized.net/v1/files/3p8notyeqhxt3-PK/image;s=1080x1080' text=" Aloe Vera Gel bottle" title="200" small="Wahdat Road, Lahore, Punjab
" date="Oct 03" />
          </Link>
          <Link to='/home_card11' > <Cards imgsrc='https://apollo-singapore.akamaized.net/v1/files/ruklft5qlsn7-PK/image;s=1080x1080' text="Kids Red Car with music 1 to 4 year.." title="Rs 3,000" small="Gulistan-e-Jauhar Block 18, Karachi, Sindh

" date="Sep 26" />
          </Link>
          <Link to='/home_card12' > <Cards imgsrc='https://apollo-singapore.akamaized.net/v1/files/rqrn9vcqynbj1-PK/image;s=300x600;q=60' text="Ye bed,2 sidetables with dressing full.." title="Rs 35,550" small="Amer Pura, Rawalpindi, Punjab
" date="Sep 26" /> </Link>

          <CardViewMore />


        </div>






      </div>


















    )
  }
}
export default Card