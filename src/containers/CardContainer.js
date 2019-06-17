import React from 'react';
import TaskCard from '../components/Card'
import { Container, Card, Content } from 'reactbulma'
import { Droppable } from 'react-beautiful-dnd'

class CardContainer extends React.Component {

  render() {
    console.log("we should be rendering a card containr lsit thing")
    return (
        <div className="column">
          <Card>
            <Card.Header.Title>
            COURSE NAME
            </Card.Header.Title>
            <Droppable droppableId={this.props.column.id}>
              {(provided, snapshot) => {
                return <div ref={provided.innerRef} {...provided.droppableProps} isDraggingOver = {snapshot.isDraggingOver}>
                  <Content>
                  {this.props.tasks.map((task, index) => {
                    return <TaskCard key={task.id} index={index} task={task}/>
                  })}
                  </Content>
                </div>
                } }
            </Droppable>
          </Card>
        </div>
    );
  }

}

export default CardContainer;
