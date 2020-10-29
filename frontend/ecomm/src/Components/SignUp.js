import React from 'react';
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import axios from 'axios' // importer tout ce qu'on utiliser dans le component
import Header from './Header'
import salon from '../Images/salon.jpeg'
import decosalon from '../Videos/decosalon.MP4'
import '../Components/SignUp.css'

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

       <img src={ salon } alt="" cover/>
<video autoPlay loop muted id="bgvid">
      <source src={ decosalon } type="video/mp4"/>
    </video>

{/* <Form onSubmit={this.handleSubmit}> 

<Form.Group controlId="formBasicName" >
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
  </Form> */}

<div className="login-box" >
<h2>Hello mon cornichon !</h2>
<p>Enter your personal details and start journey with us</p>
<br></br>
  <form className="form" onSubmit={this.handleSubmit}>
  <div className="user-box">
      <input type="name"  onChange={this.inputName} />
      <label>Name</label>
    </div>
    <div className="user-box">
      <input type="email" onChange={this.inputEmail}/>
      <label>Email</label>
    </div>
    <div className="user-box">
      <input type="password"  onChange={this.inputPassword} />
      <label>Password</label>
    </div>
    <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
    {/* <div id="btn" type="submit"><span className="noselect">Submit</span><div id="circle"></div></div> */}
    <button id="btn" type="submit"><span className="noselect">Submit</span><div id="circle"></div></button>

  </form>
</div>

          </div>
        )
    }
}

export default SignUp;
