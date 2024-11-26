
import React from 'react';
import car_data from '../assets/data';
import Item from './Item';

const Popular = () => {
  return (
    <div className="p-6 bg-gray-200">
      <h1 className="text-3xl font-bold text-center mb-6">POPULAR</h1>
      <hr className="mb-6 border-gray-300" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {car_data.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              fuel_type={item.fuel_type}
              image={item.image}
              speed={item.speed}
              transmission={item.transmission}
              new_price={item.new_price} 
              old_price={item.old_price} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
