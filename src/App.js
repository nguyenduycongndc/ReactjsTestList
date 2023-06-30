import React from 'react';
// import Menu from './Component/Menu/Menu';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import BaseSingle from './Component/BaseSingle/BaseSingle';

class App extends React.Component {
  render() {
    return (
      <>
        <BaseSingle />
        {/* <Menu/> */}
        <div className="App">
        </div>
      </>
    );
  }
}

export default App;

