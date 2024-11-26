import React, { useContext } from 'react';
import { GarageContext } from '../pages/GarageContext';
import drop_down from '../assets/drop_down.png';
import Item from '../components/Item';

const CarCategory = (props) => {
  const { all_cars } = useContext(GarageContext); // Destructure context value

  if (!all_cars) {
    return <div>Loading cars...</div>; // Handle undefined context gracefully
  }

  return (
    <div className="px-4 py-10">
      <div className="bg-gray-100 p-4">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <p className="text-gray-500 text-lg font-semibold">
            <span className="text-gray-800">Showing 1-10</span> out of 40 results
          </p>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-sm font-medium">Sort by</span>
            <img src={drop_down} alt="Dropdown" className="w-5 h-5" />
          </div>
        </div>

        {/* Product Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {all_cars.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  category={item.category}
                  fuel_type={item.fuel_type}
                  transmission={item.transmission}
                  drive={item.drive}
                />
              );
            }
            return null;
          })}
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-transparent border border-orange-500 text-gray-500 hover:bg-orange-100 rounded-full py-2 px-6 text-lg font-bold transition duration-200 cursor-pointer">
            Explore more
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCategory;

