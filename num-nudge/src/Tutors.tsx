import React from "react";
import TutorCard from "./TutorCard";

const Tutors: React.FC = () => {
  const tutors = [
    {
      image: '',
      name: 'Wajeeh Alam',
      grade: 'Grade 11 - IB',
      intro: 'Founder of NumNudge (Mathematics Tutor)'
    },
    {
      image: 'idk',
      name: 'idk',
      grade: 'idk',
      intro: 'idk'
    },
  ];

  return (
    <section className="bg-black text-gold py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Meet The Tutors</h2>
      <div className="flex flex-wrap justify-center">
        {tutors.map((tutor, index) => (
          <TutorCard
            key={index}
            image={tutor.image}
            name={tutor.name}
            grade={tutor.grade}
            intro={tutor.intro}
          />
        ))}
      </div>
    </section>
  )
}

export default Tutors;