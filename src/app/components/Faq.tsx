// components/Faq.tsx
"use client"; // Marking this component as a Client Component

import { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Ubora and what does it do?",
      answer: "Ubora is a platform built to improve CBC student engagement during online learning. It offers different content organized by various topics."
    },
    {
      question: "What kind of educational content does Ubora offer?",
      answer: "Ubora provides integrated e-learning tools and techniques that foster collaborative learning through smart classrooms, including interactive classes and controlled content access."
    },
    {
      question: "What is the aim of Ubora?",
      answer: "The aim of Ubora is to create value by connecting people, communities, and educational resources to enhance the learning experience."
    },
    {
      question: "Do I need internet to access content?",
      answer: "Yes, internet connectivity is required to access the content on the Ubora platform."
    },
    {
      question: "How did Ubora begin?",
      answer: "Ubora was founded by visionaries with over 25 years of experience in Africa’s ICT industry, focusing on providing reliable education internet solutions."
    },
    {
      question: "What topics are presently offered on the platform?",
      answer: "Ubora offers a variety of subjects organized by different topics to cater to diverse educational needs."
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      
      <h2 className="text-3xl font-bold text-[#A48BB4] mb-16 mt-8 text-center">Frequently Asked Questions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8"> {/* Adjusted gap here
*/}
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div 
              className="bg-[#faf9fc] text-black p-6 rounded-lg cursor-pointer shadow-lg transition-transform transform hover:scale-105 flex justify-between items-center" 
              onClick={() => toggleAnswer(index)}
            >
              <h2 className="text-lg font-semibold w-full">{faq.question}</h2> {/* Set width here */}
              <svg
                className={`w-6 h-6 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {openIndex === index && (
              <div className="bg-[#644777] text-white p-6 mt-2 rounded-lg shadow-md">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;