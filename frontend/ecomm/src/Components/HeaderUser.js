import React from 'react';
// import {NavLink} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Nav from 'react-bootstrap/Nav'
import { connect } from 'react-redux'
import { logoutUser } from '../Store/actions/user';
// import jwt from 'jsonwebtoken';

class HeaderUser extends React.Component {

  state = {
    email: "",
    password: "",

};

componentDidMount(){
let loggedOutUser = {
  token: null,
  email: null,
  id: null
};
this.props.logoutUser(loggedOutUser)
this.props.history.push('/');
}

    render() {

        return(

            <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">Tech</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/addproduct">Ajout Produit</Nav.Link>
              <Nav.Link href="/productlist">Vos Produits</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
              <Navbar.Brand href="/">Sign Out</Navbar.Brand>
            </Form>
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
