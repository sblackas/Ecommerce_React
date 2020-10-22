import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios' // importer tout ce qu'on utiliser dans le component
import Header from './Header'

class SignUp extends React.Component{
    //State correpond à la data
state = {
    name: "",
    email: "",
    password: ""

};

// Chaque input necessite sa fonction
inputName = event => {
    this.setState({name:event.target.value})
};
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
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
    };

    axios.post('http://localhost:8000/users/sign-up', user)
    .then(res => {
        console.log(res);
        console.log(res.data);
    })
}

// Correspond à l'affichage comme le template
render() {
  return (
   <div>

       <Header/>
<Form onSubmit={this.handleSubmit}> {/* onSubmit au clique ca enclenche ma fonction handleSubmit*/}

<Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Name" onChange={this.inputName} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={this.inputEmail} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={this.inputPassword} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          </div>
        )
    }
}

export default SignUp;
