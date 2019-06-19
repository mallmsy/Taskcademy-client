import React from 'react';
import { Image, Hero, Title, Container, SubTitle, Message, Section } from 'reactbulma'

class TaskShow extends React.Component {

  render() {
    return(
      <div>
        <Hero primary>
          <Hero.Body>
            <Container>
              <Title>
                {this.props.currentTask.title}
              </Title>
              <SubTitle>
                {this.props.currentTask.description}
              </SubTitle>
            </Container>
          </Hero.Body>
        </Hero>
        <div style={{width: "100%", height: "600px"}}>
            <iframe
              style={{
                position: "relative",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
                src={`https://www.youtube.com/embed/${this.props.currentTask.video_url}`}
                frameBorder="0"
              />
        </div>
      </div>

  )}
}
export default TaskShow;
