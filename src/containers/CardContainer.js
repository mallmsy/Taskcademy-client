import React from 'react';
import TaskCard from '../components/TaskCard'
import { Container, Card, Content, Button } from 'reactbulma'
import { Droppable } from 'react-beautiful-dnd'

class CardContainer extends React.Component {

  handleClick = () => {
    console.log(this.props)
    this.props.activeUser ? this.props.enroll(this.props.course) : this.props.routerProps.history.push("/sign-up")
  }

  render() {
    console.log(this.props)
    return (
        <div className="column">
          <Card>
            <Card.Header.Title>
            {this.props.course.title}
            </Card.Header.Title>

            {this.props.browse ? <Button primary onClick={this.handleClick}>Enroll</Button> : null}

            <Droppable droppableId={this.props.blank ? this.props.droppableId : this.props.course.id}>
              {(provided, snapshot) => {
                return (
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
                      <TaskCard key={assignment.id} index={index} assignment={assignment}/>)
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
