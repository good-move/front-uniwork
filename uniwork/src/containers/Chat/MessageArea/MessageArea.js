import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/UI/Button/Button';
import TextField from '../../../components/UI/TextField/TextField';

const MessageArea = props => {
  return (
    <div>
      <Button text={'Отправить сообщение'} onClick={props.sendMsg}> Отправить </Button>
      <TextField value={props.value} onChange={props.onInputChange} placeholder={'Введите свое сообщение'} />
    </div>
  );
};

MessageArea.propTypes = {

};

export default MessageArea;
