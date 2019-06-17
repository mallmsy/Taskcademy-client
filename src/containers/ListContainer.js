import React from 'react';
import CardContainer from './CardContainer'
import { Container } from 'reactbulma'

class ListContainer extends React.Component {

  render() {
    return (
      <div className="columns is-multiline">
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />

      </div>
    );
  }

}

export default ListContainer;
