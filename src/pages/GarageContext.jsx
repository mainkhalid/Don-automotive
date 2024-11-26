import React, { createContext } from 'react';
import all_cars from '../assets/all_cars';

export const GarageContext = createContext(null);

const GarageProvider = (props) => {
  const contextValue = { all_cars };

  return (
    <GarageContext.Provider value={contextValue}>
      {props.children}
    </GarageContext.Provider>
  );
};

export default GarageProvider;
