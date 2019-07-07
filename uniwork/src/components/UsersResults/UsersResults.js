import React from 'react';
import PropTypes from 'prop-types';
import ContractorsList from '../ContractorsList/ContractorsList';

const UsersResults = props => {
    return (
        <div>
          <h3>Найденные исполнители</h3>
          <ContractorsList contractors={props.users}/>
        </div>
    );
};

UsersResults.propTypes = {
    users: PropTypes.array,
};

export default UsersResults;
