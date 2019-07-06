import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../../hoc/Aux/Aux';

const Skills = props => {
    const skills = props.skills.map(skill => {
        return <li key={Math.random()}>{skill.topicType}</li>
    });

    return (

        <Aux>
            <h3>Обладает навыками</h3>
            {skills}
        </Aux>
    );
};

Skills.propTypes = {
    skills: PropTypes.array,
};

export default Skills;
