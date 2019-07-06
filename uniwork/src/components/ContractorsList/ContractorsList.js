import React from 'react';
import PropTypes from 'prop-types';
import Contractor from './Contractor/Contractor';

const ContractorsList = ({contractors}) => {

    const updatedContractors = contractors.map(contractor => {
        return <Contractor
            key={contractor.login}
            name={contractor.first_name}
            middleName={contractor.middle_name}
            lastName={contractor.last_name}
            education={contractor.education}
            onClick={null}/>
    });

    return (
        <div>
            {updatedContractors}
        </div>
    );
};

ContractorsList.propTypes = {
    contractors: PropTypes.array,
};

export default ContractorsList;
