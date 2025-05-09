import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

// FAQ data structure
const faqData = [
  {
    question: "What subjects do you offer tutoring in?",
    answer: "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams."
  },
  {
    question: "What ages or grade levels do you tutor?",
    answer: "We work with students from elementary school through college, adapting our teaching methods to suit the specific needs and learning styles of each age group. Our tutors are experienced in working with learners of all levels."
  },
  {
    question: "Is tutoring one-on-one or in groups?",
    answer: "We offer both one-on-one tutoring for personalized attention and small group sessions for collaborative learning. You can choose the format that works best for your learning style and budget."
  },
  {
    question: "Can sessions take place at our home?",
    answer: "Yes, we offer in-home tutoring services for your convenience. We also provide tutoring at libraries, our learning centers, and online through our virtual classroom platform."
  },
  {
    question: "What is the duration and frequency of each tutoring session?",
    answer: "Standard sessions are 60 minutes, but we offer flexible durations of 30, 60, or 90 minutes depending on the student's needs and attention span. Sessions can be scheduled weekly, twice weekly, or on a custom schedule that works for you."
  }
];

// FAQ Accordion component
export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (<div className='bg-[#F9F7F4] py-8'>
        <div className="w-full max-w-7xl mx-auto p-4 ">
      <h1 className="text-center text-2xl md:text-4xl font-normal text-[#655945] mb-8 font-bricolage ">
        Frequently asked <span className="font-bold">Questions</span>
      </h1>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border ">
            <button className="w-full flex justify-between items-center p-3 md:p-5 text-left focus:outline-none"onClick={() => toggleAccordion(index)}aria-expanded={openIndex === index}>
              <span className="text-1xl md:text-lg md:font-medium text-[#655945]">{faq.question}</span>
              <span className="text-[#655945]">
                {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </span>
            </button>

            {openIndex === index && (
              <div className="p-6 pt-0 text-[#655945CC] text-sm ">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}