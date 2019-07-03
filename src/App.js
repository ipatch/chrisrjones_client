/* eslint-disable no-unused-vars */

// libs
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// lib > API shit
import axios from 'axios';
// lib > client side routing
import { Link, Route, Switch } from 'react-router-dom';

// components
import BurgerMenu from './components/BurgerMenu';
import Button from './components/Button';
import Input from './components/Input';
// containers
import Auth from './containers/Auth/Auth';

let headers = {
  // withCredentials:true,
  withCredentials:false
};

class App extends Component {

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
        <Switch>
          <Route path="/login" component={Auth} />
        </Switch>
        <Link to="/login/">Login</Link>
        {/* <BurgerMenu /> */}
        {/* <Button /> */}
        {/* <Input /> */}
      </div>
    );
  }
}

// preserve app state during hot reloading
// export default hot(module)(App);

// jul3 2019
const ExportedApp = process.env.NODE_ENV === 'development'
  ? hot(App) // error is thrown by `hot`
  : App;

export default App;
