import React from 'react';

interface TutorCardProps {
  image: string;
  name: string;
  grade: string;
  intro: string;
  blurb: string;
}

const TutorCard: React.FC<TutorCardProps> = ({ image, name, grade, intro, blurb }) => {
  return (
    <div className="flex flex-col items-center bg-gray-800 text-gold rounded-lg p-4 m-4 w-64 h-100">
      <img src={image} alt={name} className="w-24 h-24 rounded-full object-cover shadow-bold" />
      <h3 className="mt-4 text-xl font-bold">{name}</h3>
      <p className="text-md">{grade}</p>
      <p className="mt-2 text-center font-bold">{intro}</p>
      <p className="mt-2 text-center">{blurb}</p>
    </div>
  );
};

export default TutorCard;
