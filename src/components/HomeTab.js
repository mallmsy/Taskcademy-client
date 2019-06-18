import React, { Component } from 'react';
import { Container, Section } from 'reactbulma'

import ListContainer from '../containers/ListContainer'


class HomeTab extends Component {

  render() {
    return (
      <div>
      <Section>
        <Container>
          <ListContainer routerProps={this.props.routerProps} browse={false} courses={this.props.courses} assignments={this.props.courses.tasks} renderTaskShow={this.props.renderTaskShow}/>
        </Container>
      </Section>
      </div>
    );
  }

}

export default HomeTab;
