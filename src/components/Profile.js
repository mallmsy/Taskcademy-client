import React from 'react';
import { Section, Container, Title, Image, Button, Input } from 'reactbulma'


class Profile extends React.Component{

  render(){
    // console.log("profile", this.props)
    return(
      <div>
        <Section>
          <Container>
            <Image is="128x128" src={this.props.activeUser.img_url} />
            <br/>
            <Title>Welcome, {this.props.activeUser.first_name}!</Title>
            <p>{this.props.activeUser.bio}</p>
          </Container>
        </Section>
      </div>
    );
  }
}

export default Profile
