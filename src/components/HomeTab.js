import React, { Component } from 'react';
import { Container, Section, Notification } from 'reactbulma'

import ListContainer from '../containers/ListContainer'
import TabContainer from '../containers/TabContainer'


class HomeTab extends Component {

  render() {
    return (
      <div>
      <Section>
        <Container>
        {this.props.courses.length > 0 ?
          <ListContainer activeUser={this.props.activeUser} doneTasks={this.props.doneTasks} handleOnDragEnd={this.props.handleOnDragEnd} routerProps={this.props.routerProps} browse={false} courses={this.props.courses} assignments={this.props.courses.tasks} renderTaskShow={this.props.renderTaskShow}/>
          :
          <Notification primary>
              Looks like you haven't enrolled in any courses yet! Go browse to get started!
            </Notification>
        }
        </Container>
      </Section>
      </div>
    );
  }

}

export default HomeTab;
