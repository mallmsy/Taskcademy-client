import React, { Component } from 'react';
import { Container, Section } from 'reactbulma'

import ListContainer from '../containers/ListContainer'


class HomeTab extends Component {

  render() {
    return (
      <div>
      <Section>
        <Container>
          <ListContainer browse={false} courses={this.props.courses} />
        </Container>
      </Section>
      </div>
    );
  }

}

export default HomeTab;
