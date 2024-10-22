import React from "react";
import TutorCard from "./TutorCard";
import wajeehimg from "/src/assets/imgs/wajeeh.png";
import alifimg from "/src/assets/imgs/alif.png";
import raiyanimg from "/src/assets/imgs/raiyan.png";
import sazidimg from "/src/assets/imgs/sazid.png";
import arminimg from "/src/assets/imgs/armin.png";

const Tutors: React.FC = () => {
  const tutors = [
    {
      image: wajeehimg,
      name: 'Wajeeh Alam',
      grade: 'Grade 11 - IB',
      intro: 'CEO/Founder',
      blurb: 'I\'m Wajeeh! A dedicated programmer. I also teach math here and I created this site to appeal to those who need a cheap, reliable and fun tutor! I look forward to hearing your experience.'
    },
    {
      image: alifimg,
      name: 'Alif Ashraf',
      grade: 'Grade 12',
      intro: 'Mathematics Tutor',
      blurb: 'Hey I\'m Alif! One of NumNudges math tutors. It\'s a passion of mine to be able to provide affordable, reliable, and fun math tutoring for all ages for those who need it! I look forward to helping you on your math journey!'
    },
    {
      image: raiyanimg,
      name: 'Raiyan Khan',
      grade: 'Grade 12',
      intro: 'Python Tutor',
      blurb: 'Hello, I\'m Raiyan! I\'m a math/computer science tutor at NumNudge with the goal of showing others the beauty of learning! If you need a responsible, experienced, and affordable tutor that is ready to listen, look no further. Looking forward to accelerating your learning journey!'
    },
    {
      image: arminimg,
      name: 'Armin Farhad',
      grade: 'Grade 12',
      intro: 'Web Development Tutor',
      blurb: 'Hi, I\'m Armin. One of NumNudges tutors. I\'ve taught math, chemistry, physics and computer science for very cheap, helping those who struggle to understand material taught in classes.'
    },
    {
      image: sazidimg,
      name: 'Sazid Malik',
      grade: 'Grade 12',
      intro: 'Lead Mathematics Tutor',
      blurb: 'Hi, my name is Sazid Mallik, and I\'m one of your math tutor leads. I\'m passionate about math, but I also love exploring computer hardware, coding, and everything tech-related. Whether it\'s diving into the logic of circuits or solving complex algorithms, I\'m always eager to learn and share my knowledge. I\'m here to help you with your math journey, and I believe that with the right guidance, you can excel'
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