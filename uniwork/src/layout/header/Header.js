import React, { Component } from 'react';
import styles from './Header.css';
import Navigation from "../../components/Navigation/Navigation";

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <Navigation/>
      </div>
    )
  }
}

export default Header;
