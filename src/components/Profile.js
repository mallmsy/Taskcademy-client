import React from 'react';
import { Section, Container, Title, Image, Button } from 'reactbulma'


const Profile = ({activeUser, bio}) => (

  <div>
    <Section>
      <Container>
        <Title>{activeUser}</Title>
        <Image is="128x128" src='../avataaars.svg' />
        <Section>
        <p>{bio}</p>
        </Section>
        <Section>
          <Button primary>Edit Profile</Button>
        </Section>
      </Container>
    </Section>
  </div>
);

export default Profile
