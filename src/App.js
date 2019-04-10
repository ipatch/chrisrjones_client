import React from 'react';
import Hello from './components/hello';
import './styles.css';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  // cons.log
  render() {
    // print `logging` in a browser console
    // console.log('logging');
    return (
      <div>
        <h1>Hello from App, using React and webpack!</h1>
        <br />
        <Hello />
      </div>
    );
  }
}

// preserve app state during hot reloading
export default hot(module)(App);
