import React from 'react';
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import HeaderUser from './HeaderUser'


// import { Link } from 'react-router-dom';


class ProductPage extends React.Component{
  constructor() {
    super()
      this.state = {
        details: {}
        
              }
      }

      componentDidMount(){
        let {id} = this.props.match.params
        axios.get(`http://localhost:8000/products/${id}`)
        .then(res => {
        this.setState({details: res.data[0]});
           }); 
        
        }

        render() {
          const productdetails = this.state.details ? (
              <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={this.state.details.picture} />
                  <Card.Body>
                      <Card.Title>{this.state.details.name}</Card.Title>
                      <Card.Text>{this.state.details.price}</Card.Text> 
                      <Card.Text>{this.state.details.description}</Card.Text>
                      <Button variant="success">Add to Basket</Button>
                  </Card.Body>
              </Card>
  
  
          ) : (
                  <div className="attente">Loading product...</div>
              )
          console.log(productdetails)
          return (
              <div className="container">
                <HeaderUser/>
                  {productdetails}
              </div>
  
          )
      }
  }

export default ProductPage;