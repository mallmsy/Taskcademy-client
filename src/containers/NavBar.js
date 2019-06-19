import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Image, Button, Level } from 'reactbulma'

const NavBar = (props) => {

  return (
    <Nav hasShadow>
      <Nav.Center className="navbar-start">
        <Nav.Item>
        <Link to='/'><Image is="128x128" src='../beefsteak.png' alt='logo' /></Link>
        </Nav.Item>

        <Nav.Item className="navbar-end">
          <Level>
            <Level.Left>
            </Level.Left>
            <Level.Right>
            {props.activeUser ?
              <Level.Item> <Link to='/'> <Button primary onClick={() => props.logout()}>Logout</Button> </Link> </Level.Item>
              :
              <>
                <Level.Item> <Link to='/login'> <Button primary>Login</Button> </Link> </Level.Item>
                <Level.Item> <Link to='/sign-up'> <Button>Sign Up</Button> </Link> </Level.Item>
              </>
            }
              <Level.Item> <Link to='/courses'> <Button>Browse Courses</Button> </Link> </Level.Item>

            </Level.Right>
          </Level>

        </Nav.Item>
      </Nav.Center>
    </Nav>
  );
}

export default NavBar;
