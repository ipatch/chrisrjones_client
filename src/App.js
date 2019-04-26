// libs
import React from 'react';
import { hot } from 'react-hot-loader';
// API shit
import axios from 'axios';

// components
import MenuHam from './components/MenuHam';

let headers = {
  // withCredentials:true,
  withCredentials:false
};

class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/api/hello', headers)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div id="App">
        <MenuHam />
      </div>
    );
  }
}

// preserve app state during hot reloading
export default hot(module)(App);
