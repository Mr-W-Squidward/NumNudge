import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    title: 'Applications and Usages of Mathematics',
    description: 'This program serves a comprehensive introduction to the basics of mathematics including algebra, geometry, and trigonometry. We will cover common topics like equations, functions, and the applications of mathematics in various fields.',
    price: '$19.00/hour',
    route: '/sign-up/math'
  },
  {
    title: 'Python Programming',
    description: 'An introduction towards the basics of computer science through Python programming and project building. We will cover common topics like loops, functions, data structures, and the principles of programming.',
    price: '$19.00/hour',
    route: '/sign-up/python'
  },
  {
    title: 'Web Development Basics',
    description: 'A hands-on introduction to building websites using HTML, CSS, and JavaScript. Cover the fundamentals of front-end development and build simple, interactive web pages. We will go over creating and styling web pages using HTML/CSS, along with dynamic content and interactivity with JavaScript.',
    price: '$19.00/hour',
    route: '/sign-up/web-dev'
  },
  {
    title: 'Advanced Functions, Pre-Calculus & Calculus',
    description: 'Break down the complex world of calculus and advanced functions. Advanced functions will cover polynomial, rational, logarithmic, and trigonometric functions. Calculus will cover limits, derivatives, and integrals.',
    price: '$19.00/hour',
    route: '/sign-up/special-request'
  },
  {
    title: 'Advanced Programming Package',
    description: 'Teaching a tailored, advanced level of programming for job preparation from scratch through assignments, projects, mentoring and guidance. This package includes Python, Web Development, and C basics.',
    price: '$19.00/hour',
    route: '/sign-up/special-request'
  },
  {
    title: 'Complete Sciences Package',
    description: 'A mix of physics, chemistry, and biology topics tailored to high school curricula. Includes explanations of key concepts, problem-solving strategies, and exam preparation.',
    price: '$19.00/hour',
    route: '/sign-up/special-request'
  },
];

const Curriculum = () => {
  return (
    <div className="text-center p-8 bg-black">
      <h2 className="text-3xl font-bold text-gold mb-8">Curriculum</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            price={course.price}
            route={course.route}
          />
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
