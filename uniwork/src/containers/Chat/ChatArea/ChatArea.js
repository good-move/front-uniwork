import React from 'react';
import PropTypes from 'prop-types';

import styles from './ChatArea.css';
import Message from './Message/Message';

const ChatArea = props => {
  return (
    <div className={styles.ChatArea}>
      <Message text={'Hello world'} authorId={123}/>
      <Message text={'Hello world1'} authorId={123}/>
      <Message text={'Hello world2'} authorId={123}/>
      <Message text={'Hello world3'} authorId={123}/>
    </div>
  );
};

ChatArea.propTypes = {

};

export default ChatArea;
