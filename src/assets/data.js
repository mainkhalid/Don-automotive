import c1_img from './car_1.jpeg';
import c2_img from './car_2.jpeg';
import c3_img from './car_3.jpeg';
import c4_img from './car_4.jpeg';

let car_data = [
  {
    id: 1,
    name: "Toyota Corolla Axio",
    fuel_type: "Petrol",
    image: c1_img,
    // new_price: 1000000,
    speed: "180km/h",
    transmission: "5-speed Automatic",
  },
  {
    id: 2,
    name: "Mazda Demio 1.3l",
    fuel_type: "Petrol",
    image: c2_img,
    // new_price: 850000,
    speed: "180km/h",
    transmission: "6-speed Automatic",
  },
  {
    id: 3,
    name: "Toyota Corolla Fielder 2016",
    fuel_type: "Petrol",
    image: c3_img,
    // new_price: 1200000,
    speed: "180km/h",
    transmission: "6-speed Manual",
  },
  {
    id: 4,
    name: "Toyota Mark X 2010 v6",
    fuel_type: "Diesel",
    image: c4_img,
    speed: "314 horsepower",
    transmission: "6-speed Automatic",
  },
];

export default car_data;
