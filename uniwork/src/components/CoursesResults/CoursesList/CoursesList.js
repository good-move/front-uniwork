import React from 'react';
import PropTypes from 'prop-types';

const CoursesList = props => {
  const courses = props.courses.map(course => {
    return (
      <li>
          <h5>{course.name}</h5>
          <h6>Компетенции:</h6>
        {course.topics.map(topic => <p>{topic.topicType}</p>)}
      </li>);
  });

  return (
    <ul>
      {courses}
    </ul>
  );
};

CoursesList.propTypes = {
  courses: PropTypes.array,
};

export default CoursesList;
