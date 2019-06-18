import React from 'react';
import TaskCard from '../components/TaskCard'
import { Container, Card, Content, Button } from 'reactbulma'
import { Droppable } from 'react-beautiful-dnd'

class CardContainer extends React.Component {

  render() {
    return (
        <div className="column">
          <Card>
            <Card.Header.Title>
            {this.props.blank ? "COMPLETED" : this.props.course.title}
            <br/>
            {this.props.browse ? <Button primary>Enroll</Button> : null}
            </Card.Header.Title>
            <Droppable droppableId={this.props.blank ? this.props.droppableId : this.props.course.id}>
              {(provided, snapshot) => {
                return (
                  this.props.blank ? null :
                  <div ref={provided.innerRef} {...provided.droppableProps} isDraggingOver = {snapshot.isDraggingOver}>
                    <Content>
                    {this.props.assignments.map((assignment, index) => {
                      return(
                      this.props.browse ?
                        <div>
                          <ul>
                            <li>{assignment.title}</li>
                          </ul>
                        </div>
                      :
                      <TaskCard key={assignment.id} index={index} assignment={assignment}/>
                    )
                    })}
                    </Content>
                  </div>
              )}}
            </Droppable>
          </Card>
        </div>
    );
  }

}
export default CardContainer;
