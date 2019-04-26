import React from 'react';
import Hello from './components/hello';
//
import NavBar from './components/NavBar';
import MenuIcon from './components/MenuIcon';
import MenuIconAnimated from './components/MenuIconAnimated';
//
import './styles.css';
import { hot } from 'react-hot-loader';
// API shit
import axios from 'axios';

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
    // print `logging` in a browser console
    // console.log('logging');
    return (
      <div>
        <NavBar />
        <MenuIcon />
        <MenuIconAnimated />
        <h1>Hello from App, using React and webpack!</h1>
        <br />
        <Hello />
      </div>
    );
  }
}

// preserve app state during hot reloading
export default hot(module)(App);
