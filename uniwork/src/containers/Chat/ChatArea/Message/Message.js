import React from 'react';

const Message = ({authorId, text}) => {
  return (
    <div>
      <p><span>{authorId}</span> {text}</p>
    </div>
  );
};

export default Message;
