import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    title: 'Applications and Usages of Mathematics',
    description: 'This program serves a comprehensive introduction to the basics of mathematics including algebra, geometry, and trigonometry. We will cover common topics like equations, functions, and the applications of mathematics in various fields.',
    price: '$22.5/hour'
  },
  {
    title: 'Computer Science Python',
    description: 'This program serves a comprehensive introduction to the basics of computer science through Python programming. We will cover common topics like loops, functions, data structures, and the principles of programming.',
    price: '$22.5/hour'
  },
  {
    title: 'Web Development HTML, CSS, JavaScript',
    description: 'This program provides a comprehensive introduction to web development using HTML, CSS, and JavaScript. We will cover the basics of creating and styling web pages using HTML/CSS, along with dynamic content and interactivity with JavaScript.',
    price: '$22.5/hour'
  }
];

const Curriculum = () => {
  return (
    <div className="text-center p-8 bg-black min-h-screen">
      <h2 className="text-3xl font-bold text-gold mb-8">Curriculum</h2>
      
      <div className="flex flex-wrap justify-center gap-8">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            price={course.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
