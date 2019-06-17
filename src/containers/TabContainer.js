import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs } from 'reactbulma'


class TabContainer extends React.Component {

  render() {
    return (
      <div>
      <Tabs>
        <ul>
          <li> <Link to='/home'>Home</Link> </li>
          <li> <Link to='/profile'>Profile</Link> </li>
        </ul>
      </Tabs>
      </div>
    );
  }

}

export default TabContainer;
