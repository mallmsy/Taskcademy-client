import React from 'react';
import TaskCard from '../components/TaskCard'
import { Container, Card, Content, Button, SubTitle, Message, Progress } from 'reactbulma'
import { Droppable } from 'react-beautiful-dnd'

class CardContainer extends React.Component {

  handleClick = () => {
    console.log(this.props)
    if (this.props.activeUser) {
      this.props.enroll(this.props.course);
      this.props.routerProps.history.push("/home")
    } else {
      this.props.routerProps.history.push("/sign-up")
    }
  }

  render() {
    return (
      <div className="column is-one-quarter">
        <Message primary>
         <Message.Header>
           <SubTitle>{this.props.browse ? this.props.course.title : this.props.course.course.title}</SubTitle>
         </Message.Header>
         <Message.Body>


         <Droppable droppableId={this.props.course.id}>

           {(provided, snapshot) => {
             return (
               <div ref={provided.innerRef} {...provided.droppableProps} isDraggingOver = {snapshot.isDraggingOver}>
                <br />
                 <Content>
                 {this.props.browse ? <h4>What you'll learn:</h4> : null}
                 {this.props.assignments.map((assignment, index) => {
                   return(
                   this.props.browse ?
                     <div>
                       <ul>
                         <li>{assignment.title}</li>
                       </ul>
                     </div>
                   :
                   <TaskCard key={assignment.id} index={index} assignment={assignment} routerProps={this.props.routerProps} renderTaskShow={this.props.renderTaskShow}/>)
                 })}
                 <br/>
                 {this.props.browse ? <Button fullwidth primary onClick={this.handleClick}>Enroll</Button> : null}
                 </Content>
               </div>
           )}}
         </Droppable>
         </Message.Body>
       </Message>
      </div>
    );
  }
}
export default CardContainer;
