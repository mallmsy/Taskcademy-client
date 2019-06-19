import React from 'react';
import TaskCard from '../components/TaskCard'
import { Container, Card, Content, Button, SubTitle, Message, Progress } from 'reactbulma'
import { Droppable } from 'react-beautiful-dnd'

class DoneList extends React.Component {

  render() {
    // console.log(this.props)
    return (
      <div className="column is-one-quarter">
        <Message primary>
         <Message.Header>
           <SubTitle>DONE</SubTitle>
         </Message.Header>
         <Message.Body>

         <Droppable droppableId={99}>
           {(provided, snapshot) => {
             return (
               <div ref={provided.innerRef} {...provided.droppableProps} isDraggingOver = {snapshot.isDraggingOver} style={{height: "600px"}}>
               {this.props.doneTasks ?
                 this.props.doneTasks.map((assignment, index) => {
                   return <TaskCard key={assignment.id} index={index} assignment={assignment} routerProps={this.props.routerProps} renderTaskShow={this.props.renderTaskShow}/>
                 })
               :
               null
               }
               </div>
           )}}
         </Droppable>
         </Message.Body>
       </Message>
      </div>
    );
  }
}
export default DoneList;
