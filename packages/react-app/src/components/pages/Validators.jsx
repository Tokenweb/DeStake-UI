import React from 'react';
import AppPage from '../common/AppPage';
import './Validators.scoped.css';
import IndexersTable from '../staking/theGraphProtocol/IndexersTable';

const Validators = () => {
  return (
    <AppPage loading={{ loading: false }}>
      <div className='filterContainer'>filters TBD</div>
      <IndexersTable />
    </AppPage>
  );
};

export default Validators;
