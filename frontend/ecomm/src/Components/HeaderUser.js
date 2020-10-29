import React from 'react';
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
// import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import logo from '../Images/logo.jpg'
import './HeaderUser.css';
import { connect } from 'react-redux'
import { logoutUser } from '../Store/actions/user';

class HeaderUser extends React.Component {

  state = {
    email: "",
    password: "",

};



logOutSubmit = () => {
  
  this.props.logoutUser()
  this.props.history.push('/');
}



    render() {

        return(

            <Navbar bg="white" variant="light">
            <Navbar.Brand href="/"><img src={logo}  className="logoheader" alt=""/> </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/addproduct">Ajout Produit</Nav.Link>
              <Nav.Link as={Link} to="/productlist">Vos Produits</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            </Nav>
            {/* <Form inline> */}
              {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
              {/* <Button variant="outline-primary">Search</Button> */}
              <Navbar.Brand href="/"  onClick={ this.logOutSubmit } >Sign Out</Navbar.Brand>
            {/* </Form> */}
          </Navbar>
             

        )
       
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {}
}

const mapDispatchToProps = { logoutUser }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderUser) ;
