import React, { Component } from 'react';
import axios from 'axios';
import Menu from '../Menu/Menu';
import RegisterForm from '../RegisterForm/RegisterForm';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  render() {
    return (
      <div>
          <Menu />
      </div>

    );
  }
}

export default Home;