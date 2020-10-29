import React from 'react';
import Header from './Header'
import '../Components/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import salon from '../Images/salon.jpeg'
import decosalon from '../Videos/decosalon.MP4'
// import {Link} from "react-router-dom";
// import Nav from 'react-bootstrap/Nav'



class Home extends React.Component{



render() {
  return (
    <div className="Home">
       <Header/>
    {/* <p>Welcome here </p> */}
    <img src={ salon } alt="" cover/>
    <video autoPlay loop muted id="bgvid">
      <source src={ decosalon } type="video/mp4"/>
    </video>
    
    <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
   <button  className="modal-button">Click here to know about our private content !</button>  

    </div>
  );
}
}

export default Home;
