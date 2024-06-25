import React, { useState, FormEvent } from 'react';
import axios from 'axios';

const ContactUsForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await axios.post('https://formspree.io/f/meojjrwp', {
        name,
        email,
        message
      });

      if (response.status === 200) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gold">Contact Us</h2>
      {submitted ? (
        <p className="text-white text-center">Thank you for your message! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-gray-800 text-white rounded py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white">Email</label>
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
            <label htmlFor="message" className="block text-white">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
              className="w-full bg-gray-800 text-white rounded py-2 px-4"
            />
          </div>
          <button
            type="submit"
            className="bg-gold text-black py-2 px-4 rounded-lg hover:bg-yellow-700"
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactUsForm;
