import React from 'react';
import { Container, Card, Content, Button } from 'reactbulma'

class TaskCard extends React.Component {

  render() {
    return (
      <div>
        <Container fluid>
          <Card>
          <Card.Header.Title>
          TASK NAME
          </Card.Header.Title>
        <Card.Content>
          <Content>
          This is a description of a task.
          </Content>
          <Button primary>Mark Done</Button>
        </Card.Content>
          </Card>
        </Container>
      </div>
    );
  }

}

export default TaskCard;
