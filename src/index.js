import React, {Component, PureComponent} from 'react';
import ReactDOM from 'react-dom';

import './style.scss';
import './mobile.scss';

class App extends Component {
  render() {
    return (
      <div>
        <span>基于 Create React APP 项目 eject 的项目修改的, 支持内嵌 SCSS</span>
      </div>
    )
  }
}

ReactDOM.render((
  <App/>
), document.getElementById('Main'));
