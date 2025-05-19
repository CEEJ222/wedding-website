'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface FAQ {
  question: string;
  answer: string;
  link?: string;
}

const faqs: FAQ[] = [
  {
    question: "When should I RSVP by?",
    answer: "Please RSVP by August 1st—consider it a 30th birthday gift to the bride!"
  },
  {
    question: "Why do I see the reception info, but not the ceremony?",
    answer: "We'll be having a small, private ceremony in nature with only our friend Billy officiating, two of our closest friends, Rosemary and Ames, and our talented friend Linsey Byrnes capturing the moment. We wanted something deeply personal and just between us. That said, the reception will be full of joy, toasts, dancing, and all the celebration!"
  },
  {
    question: "Can I bring a date?",
    answer: "We're working within a guest limit and are handling plus-ones thoughtfully as RSVPs come in. If we've already confirmed your plus-one, you're all set! Not sure or want to ask about bringing someone? Just reach out to us directly."
  },
  {
    question: "Are kids welcome?",
    answer: "If you're local (within 50 miles of LA), we kindly ask that you leave little ones at home—preferably with a babysitter, not alone. For those traveling from out of town, we totally understand the challenges, and we'd love to have your children join us."
  },
  {
    question: "What time should I arrive at the reception?",
    answer: "Doors open at 6:00 PM. Come ready to celebrate!"
  },
  {
    question: "What's the dress code?",
    answer: "We've put together a VERY curated guide for you—check out our"
  },
  {
    question: "What if I have dietary restrictions?",
    answer: "We want everyone to feel taken care of! We will have vegetarian, vegan, and gluten-free options. If there's anything specific you'd like us to know or if you have a more unique need, feel free to reach out—we're happy to accommodate wherever we can."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-light text-center mb-12 text-black">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-gray-100 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-900 text-lg">{faq.question}</span>
                <ChevronDownIcon 
                  className={`w-5 h-5 text-gray-900 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-700 text-base leading-relaxed">
                      {faq.question === "What's the dress code?" ? (
                        <>
                          {faq.answer}{" "}
                          <Link href="/dress-code" className="text-blue-600 hover:text-blue-800 underline">
                            Dress Code Page
                          </Link>{" "}
                          for all the details and inspiration.
                        </>
                      ) : (
                        faq.answer
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 