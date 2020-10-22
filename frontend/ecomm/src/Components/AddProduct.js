import React from 'react';
import HeaderUser from './HeaderUser'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
// import Swal from 'sweetalert2'
// import Row from 'react-bootstrap/Row'

class AddProduct extends React.Component{
    state = {
        name: "",
        marque: "",
        price: "",
        category:"",
        description: "",
        picture: "",
    
    };

     
// /!\ Bien écrire les elements exactement comme dans la db
    inputNameProduct = event => {
        this.setState({name:event.target.value})
    };
    inputMarque = event => {
        this.setState({marque:event.target.value})
    };
    inputPrice = event => {
        this.setState({price:event.target.value})
    };
    inputCategory = event => {
        this.setState({category:event.target.value})
    };
    inputDesc = event => {
        this.setState({description:event.target.value})
    };
    inputPicture = event => {
        this.setState({picture:event.target.value})
    };
    
    handleSubmit = event => {
        event.preventDefault();
    
        const product = {
            name: this.state.name,
            marque : this.state.marque,
            price: this.state.price,
            category: this.state.category,
            description: this.state.description,
            picture: this.state.picture,

        };
        
        axios.post('http://localhost:8000/products', product, {headers: {authorization: localStorage.getItem("token")}} )
        //recuperation du token stocké dans le localStorage comme ca y'a plus "no token"
        .then(res => {
            console.log(res);
            console.log(res.data);
        })

  }



render() {
  return (
    <div className="">

        <HeaderUser/>

        <header>
          ADD PRODUCT
        </header>
      
      <Form onSubmit={this.handleSubmit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Nom du produit</Form.Label>
      <Form.Control type="name" placeholder="Enter Product Name" onChange={this.inputNameProduct}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Marque</Form.Label>
      <Form.Control type="name" placeholder="Enter a marque" onChange={this.inputMarque}/>
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Prix</Form.Label>
    <Form.Control placeholder="enter a price" onChange={this.inputPrice}/>
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Catégorie</Form.Label>
    <Form.Control placeholder="" onChange={this.inputCategory}/>
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Description</Form.Label>
    <Form.Control placeholder="short description" onChange={this.inputDesc}/>
  </Form.Group>

  <Form.Row>
  <Form.Group>
    <Form.Label>Image du Produit</Form.Label>
    <Form.Control onChange={this.inputPicture} >
    {/* <Form.File id="exampleFormControlFile1" label="Picture" /> */}
    </Form.Control>
  </Form.Group>
  </Form.Row>


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

    </div>
  );
}
}

export default AddProduct;