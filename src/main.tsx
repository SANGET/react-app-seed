import * as React from 'react';
import { hot } from 'react-hot-loader';

import './style.scss';
import './mobile.scss';

export interface AppProps {
  // username: string
};

class App extends React.Component<AppProps, {}> {
  static u = 'alex';
  constructor(props: any) {
    super(props);
  }
  render() {
    // console.log(this.props.username)
    return (
      <div style={{
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
      </div>
    )
  }
}

export default hot(module)(App);
