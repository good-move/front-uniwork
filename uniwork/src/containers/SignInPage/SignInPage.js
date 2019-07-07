import React, { Component } from 'react';
import styles from './SignInPage.css';
import Header from "../../layout/header/Header";
import {
  Form, Icon, Input, Button
} from 'antd';
import {NavLink} from "react-router-dom";

class SignInPage extends Component {
  render() {
    return (
      <div className="signInPage" >
        <Header/>
        <div className={styles.signInForm}>
          <div className={styles.signInForm__header}>
            Вход
          </div>
          <div className={styles.signInForm__main}>
            <Form className={styles["login-form"]}>
              <Form.Item>
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Логин" />
              </Form.Item>
              <Form.Item>
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Пароль" />
              </Form.Item>
              <Form.Item className="formItem_textAlign_left">
                <NavLink type="primary" htmlType="submit" className={styles.signInButton} to={'/accounts/462827'} >
                  Войти
                </NavLink>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignInPage;
