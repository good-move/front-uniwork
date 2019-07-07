import React from 'react';
import PropTypes from 'prop-types';
import Skills from './Skills/Skills';
import {withRouter} from 'react-router-dom';

const ContractorInfo = props => {
    return (
        <div>
            <ul>
                <li>{props.first_name}</li>
                <li>{props.middle_name}</li>
                <li>{props.last_name}</li>
                <li>{props.organization}</li>
                <li>{props.education}</li>
                <Skills skills={props.skills}/>
                <li>{props.birth_date}</li>
            </ul>
            <button onClick={() => props.history.push('/')}>Связаться</button>
        </div>
    );
};

ContractorInfo.propTypes = {
    first_name: PropTypes.string,
    middle_name: PropTypes.string,
    last_name: PropTypes.string,
    birth_date: PropTypes.string,
    education: PropTypes.string,
    organization: PropTypes.string,
    skills: PropTypes.array,
    onClick: PropTypes.func,
};

export default withRouter(ContractorInfo);
