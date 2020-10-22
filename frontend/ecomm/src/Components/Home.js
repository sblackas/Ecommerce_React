import React from 'react';
import Header from './Header'
import '../Css/styleHome.css'
import 'bootstrap/dist/css/bootstrap.min.css'



class Home extends React.Component{
render() {
  return (
    <div className="Home">
       <Header/>
    <p>Welcome here </p>


    </div>
  );
}
}

export default Home;
