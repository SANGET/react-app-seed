import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from './pages/home';

import './style.scss';

interface AppProps {
  username?: string;
}

class App extends React.Component<AppProps, {}> {
  render() {
    const { username } = this.props;
    return (
      <div className="p20" style={{
        fontFamily: 'Arial, "Microsoft YaHei"'
      }}>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/about">
                <div>
                  <h2>React 工程脚手架</h2>
                  <ul>
                    <li>支持 SCSS</li>
                    <li>支持 hot loader</li>
                    <li>webpack 4</li>
                    <li>typescript</li>
                  </ul>
                </div>
              </Route>
              <Route path="/users">
                <div>users</div>
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default hot(module)(App);
