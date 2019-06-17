import React from 'react';
import { Container, Section } from 'reactbulma'

import TabContainer from './TabContainer'




class MainContainer extends React.Component {
  render() {
    return (
      <Section>
      {
        this.props.activeUser ?
        <Container>
          <TabContainer activeUser={this.props.activeUser}/>
        </Container>
      :
      <Container>
        <p>Welcome. Learn things here.</p>
      </Container>
    }
    </Section>
    );
  }

}

export default MainContainer;
