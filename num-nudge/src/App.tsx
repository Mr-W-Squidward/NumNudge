import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HeroSection from './Hero';
import Curriculum from './Curriculum';
import Tutors from './tutorz'; // Ensure correct import
import FAQSection from './FAQ';
import ContactUsForm from './contactus';
import CourseSignUp from './CourseSignUp'; // Ensure correct import
import PrivacyPolicy from './PrivacyPolicy'; // Ensure correct import
import TermsOfService from './TOS'; // Ensure correct import

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Curriculum />
              <FAQSection />
              <ContactUsForm />
              <Tutors /> {/* Ensure correct usage */}
            </>
          } />
          <Route path="/sign-up/math" element={
            <CourseSignUp
              courseName="Applications and Usages of Mathematics"
              courseDescription="This program serves a comprehensive introduction to the basics of mathematics including algebra, geometry, and trigonometry. We will cover common topics like equations, functions, and the applications of mathematics in various fields."
              courseInfo="Classes for this program will be on Mondays and Wednesdays from 6:30pm - 7:30pm."
            />
          } />
          <Route path="/sign-up/python" element={
            <CourseSignUp
              courseName="Computer Science Python"
              courseDescription="This program serves a comprehensive introduction to the basics of computer science through Python programming. We will cover common topics like loops, functions, data structures, and the principles of programming."
              courseInfo="Classes for this program will be on Tuesdays and Thursdays from 6:30pm - 7:30pm."
            />
          } />
          <Route path="/sign-up/web-dev" element={
            <CourseSignUp
              courseName="Web Development HTML, CSS, JavaScript"
              courseDescription="This program provides a comprehensive introduction to web development using HTML, CSS, and JavaScript. We will cover the basics of creating and styling web pages using HTML/CSS, along with dynamic content and interactivity with JavaScript."
              courseInfo="Classes for this program will be on Fridays and Sundays from 6:30pm - 7:30pm."
            />
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Ensure correct usage */}
          <Route path="/terms-of-service" element={<TermsOfService />} /> {/* Ensure correct usage */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;