// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import Hello from './components/hello';
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

// ani-bar init
const AniBar = ({visible }) => (
  <div id="ani-bar" className={visible ? 'slideIn' : 'slideOut'}>
    Animation Bar
  </div>
);

AniBar.propTypes = {
  visible: PropTypes.bool
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { visible: false };
  }

  handleClick() {
    this.setState(prev => ({ visible: !prev.visible }));
  }

  
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
      <div id="App">
        <NavBar />
        <MenuIcon />
        <MenuIconAnimated />
        <h1>Hello from App, using React and webpack!</h1>
        <br />
        <Hello />
        <button type="button" onClick={this.handleClick}>
          {this.state.visible ? 'Hide navbar' : 'Show navbar'}
        </button>
        <hr />
        <AniBar visible={this.state.visible} />
      </div>
    );
  }
}

// preserve app state during hot reloading
export default hot(module)(App);
