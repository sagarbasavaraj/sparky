import React from 'react';

const CURRENT_ENVIRONMENT = __ENVIRONMENT__;
const CURRENT_VERSION = __VERSION__;


// const CURRENT_ENVIRONMENT = 'test';
// const CURRENT_VERSION = '0.0.1';


const Environment = () => {
  if (CURRENT_ENVIRONMENT === 'production') {
    return null;
  }
  
  return (
    <footer className="environment box">
      <span className="environment name">{`Environment: ${CURRENT_ENVIRONMENT}`}</span>
      <span className="environment version">{`Version: ${CURRENT_VERSION}`}</span>
    </footer>
  );
};

export default Environment;
