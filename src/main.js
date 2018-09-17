import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './component/header';
import Projects from './component/projects';
import Explored from './component/projects/explored';

export default class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <main>
            <Switch>
              <Route path="/dashboard" component={Projects} />
              <Route path="/explored" component={Explored} />
              <Redirect to="/dashboard/projects/all"/>
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}


ReactDOM.render(<Main/>, document.getElementById('app'));