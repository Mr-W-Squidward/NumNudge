import React, { useState } from 'react';
import { useFormContext } from './FormContext';

type CourseSignUpProps = {
  courseName: string;
  courseDescription: string;
};

const CourseSignUp: React.FC<CourseSignUpProps> = ({
  courseName,
  courseDescription,
}) => {
  const { formData, setFormData } = useFormContext();
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value, type, checked } = e.target as HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.studentName || !formData.parentName || !formData.email || !formData.phoneNumber || !formData.age || !formData.experienceLevel || !formData.termsChecked) {
      alert('Please fill out all required fields and agree to terms.');
      return;
    }

    if (formData.phoneNumber.length !== 10 || isNaN(Number(formData.phoneNumber))) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/mnnaawkq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          studentName: '',
          parentName: '',
          email: '',
          phoneNumber: '',
          age: '',
          experienceLevel: '',
          questionsFeedback: '',
          termsChecked: false,
        });
      } else {
        alert('There was an error submitting the form.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gold">{courseName}</h2>
      <p className="text-white text-center mb-8">{courseDescription}</p>
      {submitted ? (
        <p className="text-white text-center">Thank you for signing up!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="studentName" className="block text-white">Student's Name *</label>
            <input
              type="text"
              id="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 text-white rounded py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="parentName" className="block text-white">Parent's Name *</label>
            <input
              type="text"
              id="parentName"
              value={formData.parentName}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 text-white rounded py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white">Email *</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 text-white rounded py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-white">Phone Number *</label>
            <input
              type="tel"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 text-white rounded py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="age" className="block text-white">Age *</label>
            <input
              type="number"
              id="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 text-white rounded py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="experienceLevel" className="block text-white">Experience Level *</label>
            <select
              id="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
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
              value={formData.questionsFeedback}
              onChange={handleChange}
              rows={4}
              className="w-full bg-gray-800 text-white rounded py-2 px-4"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="termsChecked"
              checked={formData.termsChecked}
              onChange={handleChange}
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