import React, { Component } from 'react';
import { Button, Field, Control, Input, Title, Hero, Container } from 'reactbulma'

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  }

  handleSubmit = () => {
    fetch("http://localhost:3000/api/v1/login", {
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
      this.props.login(user)
      this.props.history.push("/home")
    })


  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>

      <Hero>
        <Hero.Body>
          <Container>
            <Title>
              Login
            </Title>
              <Field groupedCentered>
                <Control>

                  <Input
                  onChange={this.handleChange}
                  name="email"
                  value={this.state.email}
                  type="text"
                  placeholder="email" />

              </Control>
              <Control>

                <Input
                onChange={this.handleChange}
                name="password"
                value={this.state.password}
                type="password"
                placeholder="password"/>

              </Control>
              <Button onClick={this.handleSubmit} primary>Login</Button>
              </Field>
          </Container>
        </Hero.Body>
      </Hero>
      </div>
    );
  }

}

export default LoginForm;
