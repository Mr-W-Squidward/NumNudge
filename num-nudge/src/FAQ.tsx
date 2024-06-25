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
      answer: "The class timing will be discussed with your tutor!",
    },
    {
      question: "Why should I choose this tutor over others?",
      answer: "Our wide variety of tutors ranging from grades 9-12 are currently going through and have experience with the current curriculum as well as how to socialize with others of their age, their training and abilities are second-to-none and they can deliver a top quality service.",
    },
    {
      question: "What age range is taught?",
      answer: "Any age range from elementary to high-school is taught, if any extra accommodations are needed we are happy to provide",
    },
  ];

  return (
    <section className="bg-gray-800 py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gold">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto text-gold2">
        {faqs.map((faq, index) => (
          <FAQComponent key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;