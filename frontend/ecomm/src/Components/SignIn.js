import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
// import {Redirect} from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux'
import { loginUser } from '../Store/actions/user';
// import { logoutUser } from '../Store/actions/user';

class SignIn extends React.Component{
    state = {
        email: "",
        password: "",
        // redirection: false
    
    };
    
    // Chaque input necessite sa fonction
    inputEmail = event => {
        this.setState({email:event.target.value})
    };
    inputPassword = event => {
        this.setState({password:event.target.value})
    };
    
    // fonction pour notre Submit
    handleSubmit = event => {
        event.preventDefault();
    
        const user = {
            email: this.state.email,
            password: this.state.password
        };
    
        axios.post('http://localhost:8000/users/sign-in', user)
        .then(res => {
            // this.setState({ redirection: true})
            // console.log(res);                   // -----> ces lignes étaient là avant qu'on fasse le store
            // console.log(res.data);
            if(res.status === 200) {
              console.log(res);
              let decoded = jwt.decode(res.data.token);
              let loggedUser = {
                token: res.data.token,
                email: decoded.email,
                id: decoded.id
              };
              
              this.props.loginUser(loggedUser)
              this.props.history.push('/dashboard');
            } 
            // localStorage.setItem("token", res.data.token) //Une fois que ca donne un token il faut le stocker, je le recupere dans addProduct
        })
        .catch(err => {
          console.log(err.response.data);
        })
    }
render() {
    // const { redirection } = this.state;
    // if (redirection){
    //     return <Redirect to='/dashboard/'/>
    // }

  return (
      <div>

<Header/>

<Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={this.inputEmail} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={this.inputPassword}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </div>
  );
}
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    // counter: state.counter
  }
}

const mapDispatchToProps = { loginUser }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn) ;
