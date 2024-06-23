import React from 'react';

interface CourseCardProps {
  title: string;
  description: string;
  price: string;
}

const CourseCard:React.FC<CourseCardProps> = ({ title, description, price }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:translate-y-1 w-80">
      <h3 className="text-2xl font-bold text-gold mb-4">{title}</h3>
      <p className="text-gray-300 text-base mb-6">{description}</p>
      <div className="mt-6">
        <button className="bg-gold text-black py-2 px-4 rounded-lg hover:bg-yellow-700">Sign Up!</button>
        <p className="text-gray-400 text-sm mt-2">{price}</p>
      </div>
    </div>
  );
};

export default CourseCard;
