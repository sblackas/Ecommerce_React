import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import Header from './Header'

class SignIn extends React.Component{
    state = {
        email: "",
        password: "",
        redirection: false
    
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
            this.setState({ redirection: true})
            console.log(res);
            console.log(res.data);
            localStorage.setItem("token", res.data.token) //Une fois que ca donne un token il faut le stocker, je le recupere dans addProduct
        })
    }
render() {
    const { redirection } = this.state;
    if (redirection){
        return <Redirect to='/dashboard/'/>
    }

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

export default SignIn;
