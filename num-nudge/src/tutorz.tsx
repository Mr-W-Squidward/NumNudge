import React from "react";
import TutorCard from "./TutorCard";

const Tutors: React.FC = () => {
  const tutors = [
    {
      image: '/src/assets/imgs/wajeeh.jpg',
      name: 'Wajeeh Alam',
      grade: 'Grade 11 - IB',
      intro: 'CEO/Founder',
      blurb: 'I\'m Wajeeh! A dedicated programmer. I also teach math here and I created this site to appeal to those who need a cheap, reliable and fun tutor! I look forward to hearing your experience.'
    }
  ];

  return (
    <section className="bg-black text-gold py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Math & Programming Tutors</h2>
      <div className="flex flex-wrap justify-center">
        {tutors.map((tutor, index) => (
          <TutorCard
            key={index}
            image={tutor.image}
            name={tutor.name}
            grade={tutor.grade}
            intro={tutor.intro}
            blurb={tutor.blurb}
          />
        ))}
      </div>
    </section>
  )
}

export default Tutors;