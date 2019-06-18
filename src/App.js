import React from 'react';
import './App.css';
import './App.sass'
import { Switch, Route } from 'react-router-dom';
import NavBar from './containers/NavBar'
import MainContainer from './containers/MainContainer'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import ListContainer from './containers/ListContainer'
import Profile from './components/Profile'
import HomeTab from './components/HomeTab'

class App extends React.Component {
  state = {
    activeUser: null,
    courses: [],
    enrolled: []
  }

  signUp = (userObj) => {
    this.setState({activeUser: userObj.user})

    localStorage.setItem("token", userObj.token)
  }

  login = (userObj) => {
    this.setState({activeUser: userObj.user})
    localStorage.setItem("token", userObj.token)
  }

  logout = () => {
    this.setState({activeUser: null})
    localStorage.removeItem("token")
  }

  enroll = (course) => {
    fetch("http://localhost:3000/api/v1/lists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        course_id: course.id,
        user_id: this.state.activeUser.id
      })
    })
    .then(res => res.json())
    .then(response => this.setState((prevState) => {
      return({
        enrolled: [...prevState.enrolled, response]
      })
    }))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount = () => {
    const token = localStorage.getItem("token")

    if(token){
      fetch("http://localhost:3000/api/v1/auto_login", {
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then (response => {
        if (response.errors) {
          localStorage.removeItem("token")
          alert(response.errors)
        } else {
          this.setState({activeUser: response})
        }
      })
    }

    fetch(`http://localhost:3000/api/v1/courses`)
      .then(resp => resp.json())
      .then(fetchedCourses => this.setState({
        courses: fetchedCourses
      }))
  }



  render() {
    return (
      <div className="App">
      <NavBar activeUser={this.state.activeUser} logout={this.logout}/>
      <br />
      <br />
      <MainContainer activeUser={this.state.activeUser}/>

      <Switch>
        <Route path='/login' render={(routerProps) => { return <LoginForm login={this.login} {...routerProps}/> }}/>

        <Route path='/sign-up' render={() => { return <SignUpForm signUp={this.signUp}/> }}/>

        <Route path='/courses' render={(routerProps) => { return <ListContainer enroll={this.enroll} activeUser={this.state.activeUser} browse={true} courses={this.state.courses} routerProps={routerProps}/> }}/>

        <Route path="/profile" render={(routerProps) => { return <Profile handleChange={this.handleChange} activeUser={this.state.activeUser}/> }} />

        <Route path="/home" render={() => { return(<HomeTab courses={this.state.enrolled} activeUser={this.props.activeUser}/>)}}/>
      </Switch>
      </div>
    )
  }
}


//// fetch for Courses


export default App;
