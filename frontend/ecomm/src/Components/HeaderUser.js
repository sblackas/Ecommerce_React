import React from 'react';
// import {NavLink} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Nav from 'react-bootstrap/Nav'


class HeaderUser extends React.Component {

    render() {

        return(

            
            // <div>
            //   <nav>
            //     <ul>
            //       <li>
            //         <NavLink to="/addproduct">ajout produits</NavLink>
            //       </li>
            //       <li>
            //         <NavLink to="/productlist">Vos produits</NavLink>
            //       </li>
            //     </ul>
            //   </nav>
            //   </div>
              
            <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">Tech</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/addproduct">Ajout Produit</Nav.Link>
              <Nav.Link href="/productlist">Vos Produits</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar>
             

        )

       
       
    }
}


export default HeaderUser;

