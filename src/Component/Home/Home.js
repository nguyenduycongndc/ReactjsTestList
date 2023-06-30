// import React, { Component } from 'react';
// import axios from 'axios';
// import Menu from '../Menu/Menu';
// import RegisterForm from '../RegisterForm/RegisterForm';

// class Home extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {

//     };
//   }
//   render() {
//     return (
//       <div>

//       </div>
//     );
//   }
// }

// export default Home;
import React from 'react';
import BaseSingle from '../BaseSingle/BaseSingle';
// import Menu from '../Menu/Menu';

function Home() {

  return (
    <>
      {/* <Menu /> */}
      <BaseSingle/>
      <div className="main">
        <h1>React Offcanvas Menu</h1>
      </div>
    </>
  )
}

export default Home;