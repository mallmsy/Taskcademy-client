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
        <div className="columns is-multiline is-variable">
        {this.props.browse ?
          this.props.courses.map(course => {
            return (
              <CardContainer
              enroll={this.props.enroll}
              activeUser={this.props.activeUser}
              routerProps={this.props.routerProps}
              browse={this.props.browse}
              course={course}
              assignments={course.assignments}
              key={course.id}/>
            )}
          )
          :
          this.props.courses.map(course => {
            return (
              <CardContainer
              activeUser={this.props.activeUser}
              routerProps={this.props.routerProps}
              course={course.course}
              assignments={course.tasks}
              key={course.id}
              renderTaskShow={this.props.renderTaskShow}/>
              )
          })
        }
        </div>
      </DragDropContext>
    );
  }

}

export default ListContainer;
