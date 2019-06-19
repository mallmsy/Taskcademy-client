import React from 'react';
import { Container, Section } from 'reactbulma'

import TabContainer from './TabContainer'
import Main from '../components/Main'




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
      null
    }
    </Section>
    );
  }

}

export default MainContainer;
