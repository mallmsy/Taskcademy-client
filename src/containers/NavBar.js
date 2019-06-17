import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Image, Button, Level } from 'reactbulma'

const NavBar = () => {

  return (
    <Nav hasShadow>
      <Nav.Center className="navbar-start">
        <Nav.Item>
        <Link to='/'><Image is="64x64" src='../avataaars.svg' alt='logo' /></Link>
        </Nav.Item>

        <Nav.Item className="navbar-end">
          <Level>
            <Level.Left>
            </Level.Left>
            <Level.Right>
              <Level.Item> <Link to='/login'> <Button primary>Login</Button> </Link> </Level.Item>
              <Level.Item> <Link to='/sign-up'> <Button>Sign Up</Button> </Link> </Level.Item>
              <Level.Item> <Link to='/courses'> <Button>Browse Courses</Button> </Link> </Level.Item>

            </Level.Right>
          </Level>

        </Nav.Item>
      </Nav.Center>
    </Nav>
  );
}

export default NavBar;
