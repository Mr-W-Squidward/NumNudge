import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

interface FAQ {
  question: string;
  answer: string;
}

const FAQComponent: React.FC<FAQ> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-400 py-4 transition duration-300 ease-in-out hover:bg-gray-800 hover:bg-opacity-50">
      <button
        className="w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gold">{question}</h3>
      </button>
      <Transition
        show={isOpen}
        enter="transition-opacity transition-max-height duration-300 ease-in"
        enterFrom="opacity-0 max-h-0"
        enterTo="opacity-100 max-h-screen"
        leaveFrom="opacity-100 max-h-screen"
        leaveTo="opacity-0 max-h-0"
      >
        <div className="overflow-hidden">
          <p className="mt-2 text-white">{answer}</p>
        </div>
      </Transition>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "When do the classes run?",
      answer: "The class timing will be discussed with your tutor! See what works best!",
    },
    {
      question: "Why should I choose this tutor over others?",
      answer: "Our wide variety of tutors ranging from grades 9-12 are currently going through and have experience with the current curriculum as well as how to socialize with others of their age, their training and abilities are second-to-none and they can deliver a top quality service.",
    },
    {
      question: "What will my child do in these classes?",
      answer: "They will participate in a wide variety of hands-on activities and problem solving questions which will build their thinking and analytical skills and prepare them to work and study on their own as well as excel in class!",
    },
    {
      question: "How can I be a tutor?",
      answer: "If you have the knowledge, communication and aspiration to be a tutor, shoot me an email in the Contact Us section - if you demonstrate your qualifications through a certified exam in the subject after an interview stage, you can make it!",
    },
    {
      question: "Is NumNudge virtual or in-person?",
      answer: "For those living in Scarborough, in-person classes are offered but otherwise commute times for tutors grow too large so we do virtual classes in all other cases",
    },
    {
      question: "Where can I ask more questions?",
      answer: "Check-out the \"Contact Us\" section where we will answer any inquiry you have.",
    },
    {
      question: "What if it's too expensive?",
      answer: "Financial aid is available based on need. They are evaluated case-by-case, so please contact us for more information! The first 4 classes are also free!",
    },
  ];

  return (
    <section className="bg-gray-800 py-12 px-4 my-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gold">Tutor Program: Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto text-gold2">
        {faqs.map((faq, index) => (
          <FAQComponent key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;