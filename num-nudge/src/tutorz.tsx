import React from "react";
import TutorCard from "./TutorCard";
import wajeehimg from "/src/assets/imgs/wajeehalam.png";
import alifimg from "/src/assets/imgs/alif.png";
import raiyanimg from "/src/assets/imgs/raiyan.png";
import sazidimg from "/src/assets/imgs/sazid.png";
import arminimg from "/src/assets/imgs/armin.png";
import aangshimg from "/src/assets/imgs/aangsh.png";
import mathuraimg from "/src/assets/imgs/mathura.png";
import mahianimg from "/src/assets/imgs/mahian.png";
import nahianimg from "/src/assets/imgs/nahian.png";

const Tutors: React.FC = () => {
  const tutors = [
    {
      image: wajeehimg,
      name: 'Wajeeh Alam',
      grade: 'Grade 11 - IB',
      intro: 'CEO/Founder',
      blurb: 'I\'m Wajeeh! A dedicated programmer. I also am a coding instructor here and I created this site to appeal to those who need a cheap, reliable and fun tutor! I look forward to hearing your experience. Financial aid is available! Shoot me a message if you need help!'
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
      blurb: 'Hi, my name is Sazid Mallik, and I\'m one of your math tutor leads. I\'m passionate about math, but I also love exploring computer hardware, coding, and everything tech-related. Whether it\'s diving into the logic of circuits or solving complex algorithms, I\'m always eager to learn and share my knowledge.'
    },
    {
      image: aangshimg,
      name: 'Aangsh Arshyan',
      grade: 'Grade 11',
      intro: 'Mathematics Tutor',
      blurb: 'Hey, I\'m Aangsh and I\'m one of your math tutors. I\'m great at teaching and with interpersonal skills so I\'m sure you\'ll learn to love learning with me!'
    },
    {
      image: mathuraimg,
      name: 'Mathura Rai',
      grade: 'Grade 12',
      intro: 'Senior Science Tutor',
      blurb: 'Here to represent the top tier tutors, I\'m Mathura! I love teaching the sciences and have had top-notch grades in all my science courses. I\'m here to guide and help you so you can achieve the same success!'
    },
    {
      image: mahianimg,
      name: 'Mahian Rahaman',
      grade: 'Grade 10',
      intro: 'Junior Math/Science Tutor',
      blurb: 'Hey, my name\'s Mahian and I\'m one of the Math Tutors for NumNudge. I have a lot of experience with being a peer tutor in school so I\'m ready to teach! Contact me for class times. Hope you have fun learning with me!!'
    },
    {
      image: nahianimg,
      name: 'Nahian Ibrahim',
      grade: 'Grade 12',
      intro: 'Calculus Tutor',
      blurb: 'I\'ve been an effort-intensive student from a young age and hope to create good study habits and success for all my students. I have experience in many AP courses such as Physics, Chemistry and Calculus. I\'ll do my best to impart all that I\'ve learned and while I have a plethora of subjects to teach, my expertise lies in Calculus and Vectors. From limits all the way to integration you can come to me to ensure your success in high school.'
    },
  ];

  return (
    <section className="bg-black text-gold py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Math & Programming Tutors</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pl-10">
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