import React from 'react';
import HeaderUser from './HeaderUser'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'


class ProductListPage extends React.Component{
        state = {
          products : []
        }

    componentDidMount() {
    axios.get('http://localhost:8000/products')
    .then(res => {
      this.setState({products: res.data})
    })

    }

render() {
  return (
<div>
    <HeaderUser/>
<p>PRODUCT LIST PAGE</p>

{console.log(this.state.products)}
{this.state.products.map(elem => {
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
    {/*exact path='/product/:id' component={ProductPage} */}
    {/* to={"/product" + elem.id}*/}
  </Card.Body>
</Card>
  )
})}
</div>
  );
}
}

export default ProductListPage;