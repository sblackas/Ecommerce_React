import React from 'react';
import HeaderUser from './HeaderUser'
import axios from 'axios'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Col from 'react-bootstrap/Col'
import { connect } from "react-redux";
import { newProduct } from '../Store/actions/products';
// import Swal from 'sweetalert2'
// import Row from 'react-bootstrap/Row'
import './AddProduct.css'

class AddProduct extends React.Component{
    state = {
        name: "",
        marque: "",
        price: "",
        category:"",
        description: "",
        picture: "",
        msgSuccess: ""
    
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
        
        axios.post('http://localhost:8000/products', product, {headers: {authorization: this.props.token}} )
        //recuperation du token stocké dans le localStorage comme ca y'a plus "no token"
        // {headers: {authorization: localStorage.getItem("token")}}
        .then(res => {
            console.log(res);
            console.log(res.data);

            this.setState({ msgSuccess: "Bien ajouté"})
            this.props.newProduct(res.data[0])
        })

  }



render() {
  return (
    <div className="AddProduct">

      

        <HeaderUser/>

        <div className="containerForm">
  <h1>&bull; Add Your Product &bull;</h1>
  <div className="underline">
  </div>
  <p>{this.state.msgSuccess}</p>
  <form onSubmit={this.handleSubmit} id="contact_form">
    <div className="name">
      <label for="Name"></label>
      <input type="name" id="name_input" placeholder="NAME" onChange={this.inputNameProduct}/>
    </div>
    <div className="brand">
      <label for="email"></label>
      <input type="text"   id="brand_input" placeholder="BRAND" onChange={this.inputMarque}/>
    </div>
    <div className="category">
      <label for="name"></label>
      <input type="text"  id="cate_input" placeholder="CATEGORY" onChange={this.inputCategory}/>
    </div>
    <div className="prix">
      <label for="Price"></label>
      <input type="text"   id="price_input"  placeholder="PRICE" onChange={this.inputPrice}/>
    </div>
    <div className="picture">
      <label for="Picture"></label>
      <input type="text"  id="picture_input" placeholder="PICTURE" onChange={this.inputPicture}/>
    </div>
    <div className="message">
      <label for="Description"></label>
      <textarea  placeholder="Put a short description of the product" id="message_input" cols="30" rows="5" onChange={this.inputDesc}></textarea>
    </div>
    <div className="submit">
      <button type="submit" value="Submit" id="form_button" ><span>Submit</span><div id="circle"></div></button>
    </div>
  </form>
</div>
      
      {/* <Form onSubmit={this.handleSubmit}>
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
    </Form.Control>
  </Form.Group>
  </Form.Row>


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> */}




      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    product : state.productsReducer.payload,
    token: state.userReducer.token,
  }
}

const mapDispatchToProps = { newProduct }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct) ;