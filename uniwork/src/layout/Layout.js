import React, { Component } from 'react';

import Header from './header/Header.js';

class Layout extends Component {
  render() {
    const {
      children,
      location: {
        pathname
      }
    } = this.props;

    return (
      <div className="layout">
        sss
        <div className="layout__header">
          <Header pathname={pathname}/>
        </div>
        <div className="layout__content">
          {children}
        </div>
      </div>
    );
  }
}

export default Layout;
