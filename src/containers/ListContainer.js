import React from 'react';
import CardContainer from './CardContainer'
import { Container } from 'reactbulma'
import { DragDropContext } from 'react-beautiful-dnd'

class ListContainer extends React.Component {

  onDragEnd = () => {
    console.log("Hello!")
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="columns is-multiline">
        {this.props.columns.map(column => {
          const tasks = column.taskIds.map(taskId => this.props.tasks[taskId])
          return <CardContainer column={column} tasks={tasks} key={column.id}/>
        })}
        </div>
      </DragDropContext>
    );
  }

}

export default ListContainer;
