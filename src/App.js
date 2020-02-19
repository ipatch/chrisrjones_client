/* eslint-disable no-unused-vars */

// libs
import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
// lib > API shit
import axios from 'axios';
// lib > client side routing
import { Link, Route, Switch } from 'react-router-dom';

// components
import BurgerMenu from './components/BurgerMenu';
import Button from './components/Button';
import Input from './components/Input';

// exp from reading medium article
import ExpFetch from './components/ExpFetch';
//
import Planets from './components/Planets';
import PlanetsFC from './components/PlanetsFC';



// containers
import Auth from './containers/Auth/Auth';

let headers = {
  // withCredentials:true,
  withCredentials:false
};

class App extends Component {

  componentDidMount() {
    // axios.get('http://localhost:3000/api/hello', headers)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  render() {
    return (
      <div id="App">
        <Switch>
          <Route path="/login" component={Auth} />
          <Route path="/exp-api-fetch" component={ExpFetch} />
          <Route path="/planets" component={Planets} />
          <Route path="/planetsfc" componet={PlanetsFC} />
        </Switch>
        <Link to="/login/">Login</Link>
        <br />
        <br />
        <Link to="/exp-api-fetch">Medium Article, react fetch from API</Link>
        {/* <BurgerMenu /> */}
        {/* <Button /> */}
        {/* <Input /> */}
        <br />
        <br />
        <Link to="/planets">Medium Article, exact planets example</Link>
        <br />
        <br />
        <Link to="/planetsfc">Medium Article, planets, react functional component</Link>
      </div>
    );
  }

}

const ExportedApp = process.env.NODE_ENV === 'development'
  ? hot(App) // error is thrown by `hot`
  : App;

export default App;
