import React from 'react';

interface TutorCardProps {
  image: string;
  name: string;
  grade: string;
  intro: string;
}

const TutorCard: React.FC<TutorCardProps> = ({ image, name, grade, intro }) => {
  return (
    <div className="flex flex-col items-center bg-gray-800 text-gold rounded-lg p-4 m-4">
      <img src={image} alt={name} className="w-32 h-32 rounded-full object-cover" />
      <h3 className="mt-4 text-xl font-bold">{name}</h3>
      <p className="text-md">{grade}</p>
      <p className="mt-2 text-center">{intro}</p>
    </div>
  );
};

export default TutorCard;
