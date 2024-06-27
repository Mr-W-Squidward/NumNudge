import React from 'react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  description: string;
  price: string;
  route: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, price, route }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 p-6 text-white">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-300 text-base">{description}</p>
      <p className="text-gold text-lg mt-4">{price}</p>
      <Link to={route}>
        <button className="mt-4 bg-gold text-black py-2 px-4 rounded-lg hover:bg-yellow-600 btn-hover">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default CourseCard;