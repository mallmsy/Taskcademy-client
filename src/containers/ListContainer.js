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
        {this.props.courses.map(course => {
          return (
            <CardContainer browse={this.props.browse} course={course} assignments={course.assignments} key={course.id}/>
          )}
        )}
          {/*<CardContainer blank={true} droppableId={0} key={0}/>*/}
        </div>
      </DragDropContext>
    );
  }

}

export default ListContainer;
