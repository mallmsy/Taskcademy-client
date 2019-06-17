import React from 'react';
import { Section, Container, Title, Image, Button, Input } from 'reactbulma'


class Profile extends React.Component{


  state = {
    editing: false
  }

  handleClick = () => {
    this.setState((prevState) => {
      return({
      editing: !prevState.editing
      })
    })
  }

  render(){
    return(
      <div>
        <Section>
          <Container> 
            <Title>{this.props.activeUser}</Title>
              <Image is="128x128" src='../avataaars.svg' />
              <Section>
              <h1>{this.props.activeUSer}</h1>
              {this.state.editing ?
                <Input
                onChange={this.props.handleChange}
                name="bio"
                value={this.props.bio}
                type="text"
                placeholder={this.props.bio} />
                :
                <p>{this.props.bio}</p>
              }
              </Section>
              <Section>
                <Button primary onClick={this.handleClick}>{this.state.editing ? "Save" : "Edit Profile"}</Button>
              </Section>
          </Container>
        </Section>
      </div>
    );
  }

}

export default Profile
