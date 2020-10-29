import React from 'react';
import HeaderUser from './HeaderUser'
import axios from 'axios'
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/esm/Button';
// import Card from 'react-bootstrap/Card'
// import ListGroup from 'react-bootstrap/ListGroup'
// import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { connect } from 'react-redux'
import { listProducts } from '../Store/actions/products';
import './ProductListPage.css'



class ProductListPage extends React.Component{
        state = {
          products : []
        }

    componentDidMount() {
    axios.get('http://localhost:8000/products')
    .then(res => {
      this.setState({products: res.data})

      this.props.listProducts(res.data)
    })

    }

render() {
  return (
    <div>
      <div className="Head"><HeaderUser/></div>
<div className="ProductListPage">
    
   <div className="title"><h1>&bull; Products List &bull;</h1></div> 

{console.log(this.state.products)}
{/* {this.props.products.map(elem => {
  return (
    <Card key={elem.id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={elem.picture} />
  <Card.Body>
  <Card.Title>{elem.name}</Card.Title>
    <Card.Text>
      {elem.description}
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>{elem.price}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Link to={`/product/ ${elem.id}`} > <Button variant="primary">Détails</Button></Link>
  </Card.Body>
</Card>
  )
})} */}
<div className="cards-container">
{this.props.products.map(elem => {
  return (
    
    <div className="container" key={elem.id} style={{backgroundImage: `url(${elem.picture})`, backgroundPositionY: 'center', backgroundPositionX: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
     {/* <div className="pics" src={elem.picture}>{elem.picture}</div> */}
      
  <div className="overlay" >
    <div className = "items"></div>
    <div className = "items head">
  <p>{elem.name}</p>
  <p>{elem.description}</p>
      <hr/>
    </div>
    <div className = "items price">
      
      <p className="new">{elem.price}€</p>
    </div>
    <div className="items cart">
      <i className="fa fa-shopping-cart"></i>
      <Link to={`/product/ ${elem.id}`} ><span>DETAILS</span></Link>
  </div>
</div>
</div>


  )
})}
</div>



</div>
</div>
  );
}
}

const mapStateToProps = (state /*, ownProps*/) => {
  return { products : state.productsReducer.products
  }
}

const mapDispatchToProps = { listProducts }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListPage) ;