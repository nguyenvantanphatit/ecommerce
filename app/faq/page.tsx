"use client";
import React, { useState } from "react";

// Example FAQ data
const faqData = [
  {
    question: "What is the purpose of this FAQ?",
    answer: "This FAQ section answers the most commonly asked questions.",
  },
  {
    question: "How can I contact support?",
    answer: "You can contact support by emailing us at support@example.com.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards and PayPal.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-32">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-16">
        <h2 className="text-2xl font-bold pb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isActive={activeIndex === index}
              onToggle={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  faq: { question: string; answer: string };
  isActive: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, isActive, onToggle }) => {
  return (
    <div
      className={`border rounded-lg p-3 transition duration-300 ${
        isActive ? "border-[#0D99FF]" : "border-gray-200"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full text-left"
      >
        <h5
          className={`text-base transition duration-300 ${
            isActive
              ? "text-[#0D99FF]"
              : "text-black hover:text-[#0D99FF]"
          }`}
        >
          {faq.question}
        </h5>
        <svg
          className={`w-4 h-4 transform transition duration-300 ${
            isActive ? "rotate-180 text-[#0D99FF]" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isActive && (
        <div className="mt-4 text-base whitespace-pre-line">
          {faq.answer}
        </div>
      )}
    </div>
  );
};
