import React from 'react';
import PropTypes from 'prop-types';

const DICTIONARY = {
  users: 'Исполнители',
  courses: 'Видеокурсы',
  topics: 'Компетенции',
  organizations: 'Образование',
  courseName: 'Название курса',
  inDepth: 'Слову',
  video: 'Видео'
};

const Select = props => {
  const options = props.options.map(option => {
    return (<option
      value={option}
      key={Math.random()}>
      {DICTIONARY[option]}
      </option>);
  });

  return (
    <select onChange={props.onSelectChange} value={props.value}>
      {options}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  onSelectChange: PropTypes.func,
};

export default Select;
