import React from "react";
import TutorCard from "./TutorCard";
import wajeehImg from "/src/assets/imgs/wajeeh.png";
import alifImg from "/src/assets/imgs/alif.jpg";
import raiyanImg from "/src/assets/imgs/raiyan.png";
import arminImg from "/src/assets/imgs/armin.jpg";
import sazidImg from "/src/assets/imgs/sazid.jpg";

const Tutors: React.FC = () => {
  const tutors = [
    {
      image: wajeehImg,
      name: 'Wajeeh Alam',
      grade: 'Grade 11 - IB',
      intro: 'CEO/Founder',
      blurb: 'I\'m Wajeeh! A dedicated programmer. I also teach math here and I created this site to appeal to those who need a cheap, reliable and fun tutor! I look forward to hearing your experience.'
    },
    {
      image: alifImg,
      name: 'Alif Ashraf',
      grade: 'Grade 12',
      intro: 'Mathematics Tutor',
      blurb: 'Hey I\'m Alif! One of NumNudges math tutors. It\'s a passion of mine to be able to provide affordable, reliable, and fun math tutoring for all ages for those who need it! I look forward to helping you on your math journey!'
    },
    {
      image: raiyanImg,
      name: 'Raiyan Khan',
      grade: 'Grade 12',
      intro: 'Python Tutor',
      blurb: 'Hello, I\'m Raiyan! I\'m a math/computer science tutor at NumNudge with the goal of showing others the beauty of learning! If you need a responsible, experienced, and affordable tutor that is ready to listen, look no further. Looking forward to accelerating your learning journey!'
    },
    {
      image: arminImg,
      name: 'Armin Farhad',
      grade: 'Grade 12',
      intro: 'Web Development Tutor',
      blurb: 'Hi, I\'m Armin. One of NumNudges tutors. I\'ve taught math, chemistry, physics and computer science for very cheap, helping those who struggle to understand material taught in classes.'
    },
    {
      image: sazidImg,
      name: 'Sazid Malik',
      grade: 'Grade 12',
      intro: 'Mathematics Tutor',
      blurb: 'Hi, my name is Sazid Mallik, and I\'m one of your math tutors. I\'m passionate about math, but I also love exploring computer hardware, coding, and everything tech-related. Whether it\'s diving into the logic of circuits or solving complex algorithms, I\'m always eager to learn and share my knowledge. I\'m here to help you with your math journey, and I believe that with the right guidance, you can excel'
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