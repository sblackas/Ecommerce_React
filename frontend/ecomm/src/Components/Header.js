import React from 'react';
// import {NavLink} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Nav from 'react-bootstrap/Nav'




class Header extends React.Component {
    render() {

        return(

            
            // <div>
            //   <nav>
            //     <ul>
            //       <li>
            //         <NavLink to="/">Home<i className="fa fab-typo3" /></NavLink>
            //       </li>
            //       <li>
            //         <NavLink to="/signup">Sign Up</NavLink>
            //       </li>
            //       <li>
            //         <NavLink to="/signin">Sign In</NavLink>
            //       </li>
            //     </ul>
            //   </nav>
            //   </div>
              
              <Navbar bg="light" variant="light">
              <Navbar.Brand href="#home">Tech</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/signin">Sign In</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
              </Form>
            </Navbar>

        )

       
       
    }
}


export default Header;