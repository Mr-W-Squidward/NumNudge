import React from 'react';

const Curriculum: React.FC = () => {
  return (
    <div className="text-center p-8 bg-black min-h-screen">
      <h2 className="text-3xl font-bold text-gold mb-8">Curriculum</h2>
      
      <div className="flex flex-wrap justify-center gap-8">
        {/* Mathematics Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:translate-y-1 w-80">
          <h3 className="text-2xl font-bold text-gold mb-4">Applications and Usages of Mathematics</h3>
          <p className="text-gray-300 text-base mb-6">
            This program serves a comprehensive introduction to the basics of mathematics including algebra, geometry, and trigonometry.
            We will cover common topics like equations, functions, and the applications of mathematics in various fields.
          </p>
          <div className="mt-6">
            <button className="bg-gold text-black py-2 px-4 rounded-lg hover:bg-yellow">Sign Up!</button>
            <p className="text-gray-400 text-sm mt-2">$22.5/hour</p>
          </div>
        </div>

        {/* Computer Science Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:translate-y-1 w-80">
          <h3 className="text-2xl font-bold text-gold mb-4">Computer Science Python</h3>
          <p className="text-gray-300 text-base mb-6">
            This program serves a comprehensive introduction to the basics of computer science through Python programming. 
            We will cover common topics like loops, functions, data structures, and the principles of programming.
          </p>
          <div className="mt-6">
            <button className="bg-gold text-black py-2 px-4 rounded-lg hover:bg-yellow">Sign Up!</button>
            <p className="text-gray-400 text-sm mt-2">$22.5/hour</p>
          </div>
        </div>

        {/* Web Development Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:translate-y-1 w-80">
          <h3 className="text-2xl font-bold text-gold mb-4">Web Development HTML, CSS, JavaScript</h3>
          <p className="text-gray-300 text-base mb-6">
            This program provides a comprehensive introduction to web development using HTML, CSS, and JavaScript. 
            We will cover the basics of creating and styling web pages using HTML/CSS, along with dynamic content and interactivity with Javascript.
          </p>
          <div className="mt-6">
            <button className="bg-gold text-black py-2 px-4 rounded-lg hover:bg-yellow">Sign Up!</button>
            <p className="text-gray-400 text-sm mt-2">$22.5/hour</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;