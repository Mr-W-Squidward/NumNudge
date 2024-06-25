import React, { useState } from 'react';

const CourseSignUp = ({ courseName, courseDescription, courseInfo }) => {
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [questionsFeedback, setQuestionsFeedback] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!studentName || !parentName || !email || !phoneNumber || !age || !experienceLevel || !termsChecked) {
      alert('Please fill out all required fields and agree to terms.');
      return;
    }

    // Simulate form submission (replace with actual logic)
    alert('Form submitted successfully!'); // Remove this line when integrating with backend or desired action

    setSubmitted(true);
    setStudentName('');
    setParentName('');
    setEmail('');
    setPhoneNumber('');
    setAge('');
    setExperienceLevel('');
    setQuestionsFeedback('');
    setTermsChecked(false);
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gold">{courseName}</h2>
      <p className="text-white text-center mb-8">{courseDescription}</p>
      <p className="text-gray-300 text-center mb-8">{courseInfo}</p>
      {submitted ? (
        <p className="text-white text-center">Thank you for signing up!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="studentName" className="block text-white">Student's Name *</label>
            <input
              type="text"
              id="studentName"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
              className="w-full bg-gray-800 text-white rounded py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="parentName" className="block text-white">Parent's Name *</label>
            <input
              type="text"
              id="parentName"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              required
              className="w-full bg-gray-800 text-white rounded py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white">Email *</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-gray-800 text-white rounded py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-white">Phone Number *</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="w-full bg-gray-800 text-white rounded py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="age" className="block text-white">Age *</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              className="w-full bg-gray-800 text-white rounded py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="experienceLevel" className="block text-white">Experience Level *</label>
            <select
              id="experienceLevel"
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
              required
              className="w-full bg-gray-800 text-white rounded py-2 px-4"
            >
              <option value="">Select</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <div>
            <label htmlFor="questionsFeedback" className="block text-white">Questions & Feedback</label>
            <textarea
              id="questionsFeedback"
              value={questionsFeedback}
              onChange={(e) => setQuestionsFeedback(e.target.value)}
              rows={4}
              className="w-full bg-gray-800 text-white rounded py-2 px-4"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="termsChecked"
              checked={termsChecked}
              onChange={(e) => setTermsChecked(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="termsChecked" className="text-white text-sm">I agree to the <a href="/terms-of-service" className="underline">Terms of Service</a> and <a href="/privacy-policy" className="underline">Privacy Policy</a>.</label>
          </div>
          <button
            type="submit"
            className="bg-gold text-black py-2 px-4 rounded-lg hover:bg-yellow-700"
          >
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
};

export default CourseSignUp;