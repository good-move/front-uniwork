import React from 'react';
import PropTypes from 'prop-types';
import Contractor from './Contractor/Contractor';

const ContractorsList = ({contractors, handleOpenContractor}) => {

    const updatedContractors = contractors.map(contractor => {
        return <Contractor
            key={contractor.login}
            name={contractor.first_name}
            middleName={contractor.middle_name}
            lastName={contractor.last_name}
            education={contractor.education}
            skills={contractor.skills}
            onClick={(e) => handleOpenContractor(e, contractor.login)}/>
    });

    return (<div>
      <div>
        {updatedContractors}
      </div>
    </div>
    );
};

ContractorsList.propTypes = {
    contractors: PropTypes.array,
    handleOpenContractor: PropTypes.func,
};

export default ContractorsList;
