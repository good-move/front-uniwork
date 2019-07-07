import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../UI/Spinner/Spinner';
import CoursesList from './CoursesList/CoursesList';

const CoursesResults = props => {
  return (
    <div>
      <h3>Найденные курсы</h3>
      <CoursesList courses={props.courses}/>
    </div>
  );
};

CoursesResults.propTypes = {
  courses: PropTypes.array,
};

export default CoursesResults;
