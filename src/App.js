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
    bio: "This is a bio about the active user.",
    columns: [],
    tasks: {}
  }

  login = (username) => {
    this.setState({activeUser: username})

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount = () => {
    fetch(`http://localhost:3000/tasks`)
      .then(resp => resp.json())
      .then(tasks => this.setState({
        tasks: tasks
      }))

      fetch(`http://localhost:3000/columns`)
      .then(resp => resp.json())
      .then(columns => this.setState({
        columns: columns
      }))
    }

  render() {
    console.log(this.state)
    return (
      <div className="App">
      <NavBar />
      <br />
      <br />
      <MainContainer activeUser={this.state.activeUser}/>

      <Switch>
        <Route path='/login' render={(routerProps) => { return <LoginForm login={this.login} {...routerProps}/> }}/>
        <Route path='/sign-up' component={SignUpForm}/>
        
        <Route path='/courses' render={(routerProps) => { return <ListContainer tasks={this.state.tasks} columns={this.state.columns} {...routerProps}/> }}/>

        <Route path="/profile" render={(routerProps) => { return <Profile handleChange={this.handleChange} activeUser={this.state.activeUser} bio={this.state.bio}/> }} />
        // <Route path="/home" render={() => { return(<HomeTab activeUser={this.props.activeUser} />)}}/>
      </Switch>
      </div>
    )
  }
}


//// fetch for Courses


export default App;
