import React from 'react';
import TaskCard from '../components/Card'
import { Container, Card, Content } from 'reactbulma'

class CardContainer extends React.Component {

  render() {
    return (
      <div className="column">
        <Card>
          <Card.Header.Title>
          COURSE NAME
          </Card.Header.Title>
          <Card.Content>
            <Content>
              <TaskCard />
              <TaskCard />
              <TaskCard />
            </Content>
          </Card.Content>
        </Card>
      </div>
    );
  }

}

export default CardContainer;
