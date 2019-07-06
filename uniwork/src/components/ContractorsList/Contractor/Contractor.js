import React from 'react';
import PropTypes from 'prop-types';

import styles from './Contractor.css';

const Contractor = props => {
    return (
        <div className={styles.contractor}>
            <ul>
                <li>
                    {`${props.lastName} ${props.name} ${props.middleName}`}
                </li>
                <li>
                    {props.education}
                </li>
            </ul>
            <button onClick={props.onClick}>Learn more</button>
        </div>
    );
};

Contractor.propTypes = {
    name: PropTypes.string,
    middleName: PropTypes.string,
    lastName: PropTypes.string,
    education: PropTypes.string,
    onClick: PropTypes.func,
    skills: PropTypes.array,
};

export default Contractor;
