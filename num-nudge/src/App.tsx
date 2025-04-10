import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import HeroSection from './Hero';
import Curriculum from './Curriculum';
import Tutors from './tutorz';
import FAQSection from './FAQ';
import ContactUsForm from './contactus';
import CourseSignUp from './CourseSignUp';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TOS';
import { FormProvider } from './FormContext';
import WhiteboardPage from './pages/whiteboard';
import './index.css';
import ScrollAwareNavBar from './ScrollAwareNavbar';

// ScrollAwareHome — handles scroll target logic and homepage layout
const ScrollAwareHome: React.FC = () => {
  const signUpRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const tutorsRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const location = useLocation();

  // Scroll to section from URL param (?scrollTo=faq)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('scrollTo');
    if (section) {
      const el = document.getElementById(section);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // Scroll to section from NavBar event
  useEffect(() => {
    const handler = (e: any) => {
      const section = e.detail;
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
    window.addEventListener('scroll-to-section', handler);
    return () => window.removeEventListener('scroll-to-section', handler);
  }, []);

  return (
    <>
      <HeroSection onSignUpClick={() => scrollToRef(signUpRef)} />
      <div ref={signUpRef} id="signup">
        <Curriculum />
      </div>
      <div ref={faqRef} id="faq">
        <FAQSection />
      </div>
      <div ref={contactRef} id="contact">
        <ContactUsForm />
      </div>
      <div ref={tutorsRef} id="tutors">
        <Tutors />
      </div>
    </>
  );
};

const App: React.FC = () => {
  const signUpRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const tutorsRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FormProvider>
      <Router>
        <div className="bg-black text-white min-h-screen">
          {/* Sticky NavBar */}
          <div className="fixed top-0 w-full z-50 bg-black">
            <ScrollAwareNavBar
              onSignUpClick={() => scrollToRef(signUpRef)}
              onFAQClick={() => scrollToRef(faqRef)}
              onContactClick={() => scrollToRef(contactRef)}
              onTutorsClick={() => scrollToRef(tutorsRef)}
            />
          </div>

          {/* Push content down to avoid overlap with fixed navbar */}
          <div className="pt-20">
            <Routes>
              <Route path="/" element={<ScrollAwareHome />} />
              <Route path="/whiteboard" element={<WhiteboardPage />} />
              <Route
                path="/sign-up/math"
                element={
                  <CourseSignUp
                    courseName="Applications and Usages of Mathematics"
                    courseDescription="Comprehensive introduction to algebra, geometry, and trigonometry."
                  />
                }
              />
              <Route
                path="/sign-up/python"
                element={
                  <CourseSignUp
                    courseName="Computer Science Python"
                    courseDescription="Introduction to computer science using Python."
                  />
                }
              />
              <Route
                path="/sign-up/web-dev"
                element={
                  <CourseSignUp
                    courseName="Web Development HTML, CSS, JavaScript"
                    courseDescription="Basics of creating and styling web pages."
                  />
                }
              />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>
          </div>
        </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-40 bg-gold text-black p-3 rounded-full shadow-md hover:scale-105 transition"
      >
        ↑
      </button>
      </Router>
    </FormProvider>
  );
};

export default App;