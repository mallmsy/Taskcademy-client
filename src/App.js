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
    bio: "This is a bio about the active user."
  }

  login = (username) => {
    this.setState({activeUser: username})

  }

  render() {
    return (
      <div className="App">
      <NavBar />
      <br />
      <br />
      <MainContainer activeUser={this.state.activeUser}/>

      <Switch>
        <Route path='/login' render={(routerProps) => { return <LoginForm login={this.login} {...routerProps}/> }}/>
        <Route path='/sign-up' component={SignUpForm}/>
        <Route path='/courses' render={(routerProps) => { return <ListContainer {...routerProps}/> }}/>
        <Route path="/profile" render={(routerProps) => { return <Profile bio={this.props.bio}/> }} />
        <Route path="/home" render={() => { return(<HomeTab activeUser={this.props.activeUser} />)}}/>
      </Switch>
      </div>
    )
  }
}

export default App;
