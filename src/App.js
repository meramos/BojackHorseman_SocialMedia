import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home/Containers';
import FaceFeed from './FaceFeed/Containers';
import TweedFeed from './TweedFeed/Containers';
import YouZone from './YouZone/Containers';
import ZoneFace from './ZoneFace/Containers';

class App extends Component {

  render() {
    return (
      <HashRouter basename='/'>
        <div>
          
          <Route path="/" exact component={Home} />
          <Route path="/facefeed" component={FaceFeed} />
          <Route path="/tweedfeed" component={TweedFeed} />
          <Route path="/youzone" component={YouZone} />
          <Route path="/zoneface" component={ZoneFace} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
