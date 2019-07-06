import React from 'react';
import PropTypes from 'prop-types';

const Contractor = props => {
    return (
        <div onClick={props.onClick}>
            <ul>
                <li>
                    {`${props.lastName} ${props.name} ${props.middleName}`}
                </li>
                <li>
                    {props.education}
                </li>
            </ul>
        </div>
    );
};

Contractor.propTypes = {
    name: PropTypes.string,
    middleName: PropTypes.string,
    lastName: PropTypes.string,
    education: PropTypes.string,
    onClick: PropTypes.func,
};

export default Contractor;
