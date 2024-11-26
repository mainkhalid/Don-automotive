import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="w-full max-w-[280px] mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-[200px] object-contain bg-gray-100"
        />
      </Link>
      <div className="p-4">
        <p className="text-lg font-semibold text-gray-800 mb-2">{props.name}</p>
        <p className="text-sm text-gray-600">{props.fuel_type}</p>
        <p className='text-sm text-gray-600'>{props.speed}</p>
        <p className='text-lg text-gray-600'>{props.transmission}</p>
        <p className='text-sm text-gray-600'>{props.price}</p>
        <p className='text-sm text-gray-600'>{props.drive}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold text-orange-500">
            {props.new_price
              ? `${props.new_price.toLocaleString()} Ksh`
              : "Price not available"}
          </span>
          
        </div>
      </div>
    </div>
  );
};

export default Item;
