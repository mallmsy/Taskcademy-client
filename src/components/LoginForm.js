import React, { Component } from 'react';
import { Button, Field, Control, Input, Title, Hero, Container } from 'reactbulma'

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  }

  handleSubmit = () => {
    this.props.login(this.state.username)
    this.props.history.push('/home')
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
                  name="username"
                  value={this.state.username}
                  type="text"
                  placeholder="username" />

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
