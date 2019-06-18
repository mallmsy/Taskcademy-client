import React from 'react';
import { Card, Content, Button } from 'reactbulma'
import { Draggable } from 'react-beautiful-dnd'

class TaskCard extends React.Component {

  state = {
    complete: false
  }

  handleClick = () => {
    this.props.renderTaskShow(this.props.assignment)
    this.props.routerProps.history.push(`/task/${this.props.assignment.id}`)
  }

  render() {
    console.log(this.props)
    return(
      <Draggable draggableId={this.props.assignment.id} index={this.props.index}>
      {(provided, snapshot) => {
        return <div {...provided.draggableProps} ref={provided.innerRef} isDragging={snapshot.isDragging} {...provided.dragHandleProps}>
        <Card>
            <Card.Header.Title>
            {this.props.assignment.title}
            </Card.Header.Title>
            <Card.Content>
              <Content>
              {this.props.assignment.description}
              </Content>
              <br/>
              <Button onClick={this.handleClick}>Start Task</Button>
            </Card.Content>
        </Card>
      </div>
      }}
    </Draggable>
    )
  }
}
export default TaskCard;
