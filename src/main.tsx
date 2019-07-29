import React from 'react';
import { hot } from 'react-hot-loader';

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
        <h2>React 工程脚手架</h2>
        <ul>
          <li>支持 SCSS</li>
          <li>支持 hot loader</li>
          <li>babel 7</li>
          <li>webpack 4</li>
          <li>typescript</li>
        </ul>
        <HomePage />
      </div>
    );
  }
}

export default hot(module)(App);
