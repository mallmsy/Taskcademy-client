import React from 'react';
import CardContainer from './CardContainer'
import { Container } from 'reactbulma'

class ListContainer extends React.Component {

  render() {
    return (
      <div>
        <Container fluid>
          <CardContainer />
        </Container>
      </div>
    );
  }

}

export default ListContainer;
