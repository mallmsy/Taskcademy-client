import React from 'react';
import { Card, Content, Button } from 'reactbulma'

class TaskShow extends React.Component {

  render() {
    return(
      <div>
      <h1>{this.props.currentTask.title}</h1>
      </div>
  )}
}
export default TaskShow;
