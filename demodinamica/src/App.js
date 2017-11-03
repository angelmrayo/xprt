import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import asyncComponent from './AsyncComponent';

/*import Home from './Home';
import Mail from './Mail';
import Tracking from './Tracking';
import Publish from './Publish';
*/


import createBrowserHistory from 'history/createBrowserHistory';

const Home = asyncComponent(() => import('./Home').then(module => module.default));

const Mail = asyncComponent(() => import('./Mail').then(module => module.default));

const Tracking = asyncComponent(() => import('./Tracking').then(module => module.default));

const Publish = asyncComponent(() => import('./Publish').then(module => module.default));


const historial = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <Router history={historial}>
      <div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/Mail">Mail</Link>
          <Link to="/Tracking">Tracking</Link>
          <Link to="/Publish">Publish</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Mail" component={Mail}/>
          <Route path="/Tracking" component={Tracking}/>
          <Route path="/Publish" component={Publish}/>
        </Switch>
         </div>
      </Router>
    );
  }
}

export default App;
