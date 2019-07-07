import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ChatArea from './ChatArea/ChatArea';
import MessageArea from './MessageArea/MessageArea';

import * as actions from '../../store/actions/index';

import styles from './Chat.css';
import {connect} from 'react-redux';


class Chat extends Component {
  componentWillMount() {

  }

  inputChangeHandler = (e) => {
    const value = e.target.value;
    this.props.onSetMessage(value);
  };

  onSendMessage = (e) => {
    e.preventDefault();
    this.props.onMessageSend(this.props.value);
  };

  render() {
    return (
      <div className={styles.ChatWrapper}>
        <ChatArea/>
        <MessageArea
          sendMsg={this.onSendMessage}
          onInputChange={this.inputChangeHandler}
          value={this.props.value}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    value: state.messages.message,
});

const mapDispatchToProps = (dispatch) => ({
    onSetMessage: (msg) => dispatch(actions.setMessage(msg)),
    onMessageSend: (msg) => dispatch(actions.sendMessage(msg))
});

Chat.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
