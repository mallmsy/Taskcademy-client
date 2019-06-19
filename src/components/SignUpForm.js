import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Field, Control, Input, Title, Hero, Container } from 'reactbulma'

class SignUpForm extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    console.log("made it to fetch")
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user: this.state
      })
    })
    .then(res => res.json())
    .then(user => {
      console.log("Returned User", user)
      this.props.signUp(user)
    })
  }

  render() {
    return (
      <div>
      <Hero>
        <Hero.Body>
          <Container>
            <Title>Sign Up</Title>
            <Field groupedCentered>
              <Control>
                <Input
                onChange={this.handleChange}
                name="first_name"
                value={this.state.first_name}
                type="text"
                placeholder="first name" />
              </Control>

              <Control>
              <Input
              onChange={this.handleChange}
              name="last_name"
              value={this.state.last_name}
              type="text"
              placeholder="last name"/>
              </Control>

              <Control>
              <Input
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
              type="text"
              placeholder="email"/>
              </Control>

              <Control>
              <Input
              onChange={this.handleChange}
              name="password"
              value={this.state.password}
              type="password"
              placeholder="password"/>
              </Control>

              <Control>
              <Input
              onChange={this.handleChange}
              name="bio"
              value={this.state.bio}
              type="text"
              placeholder="bio"/>
              </Control>

              <Control>
              <Input
              onChange={this.handleChange}
              name="img_url"
              value={this.state.img_url}
              type="text"
              placeholder="image url"/>
              </Control>

              <Link to="/home"><Button onClick={this.handleSubmit}primary>Sign Up</Button></Link>
            </Field>
          </Container>
        </Hero.Body>
      </Hero>
      </div>
    );
  }

}

export default SignUpForm;
