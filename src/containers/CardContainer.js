import React from 'react';
import TaskCard from '../components/Card'
import { Container, Card, Content } from 'reactbulma'

class CardContainer extends React.Component {

  render() {
    return (
      <div>
        <Container fluid>
          <Card>
            <Card.Header.Title>
            COURSE NAME
            </Card.Header.Title>
            <Card.Content>
              <Content>
                <TaskCard />
              </Content>
            </Card.Content>

          </Card>
        </Container>
      </div>
    );
  }

}

export default CardContainer;
