import logo from './logo.svg';
import Home from './Component/Home/Home';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
 
  }

  render() {
    return (
      <div>
        <Home />
      </div>

    );
  }
}

export default App;
