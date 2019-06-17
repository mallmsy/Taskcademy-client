import React from 'react';
import { Container, Card, Content, Button } from 'reactbulma'
import { Draggable } from 'react-beautiful-dnd'

class TaskCard extends React.Component {

  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
      {(provided, snapshot) => {
        return <div {...provided.draggableProps} ref={provided.innerRef} isDragging={snapshot.isDragging} {...provided.dragHandleProps}>
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
        </div>
    }
  }
  </Draggable>
  )
  }

}

export default TaskCard;
