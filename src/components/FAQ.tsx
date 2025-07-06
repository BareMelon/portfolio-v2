import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FAQ: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: 'How Many Working Hours Do You Have?',
      answer: '2/3 Hours a Day.'
    },
    {
      question: 'How Can I Hire You?',
      answer: 'Direct Message Me In Discord.'
    },
    {
      question: 'How Do You Work?',
      answer: 'I Take 50% of the money when I start, then you give me access to the map and I copy it and work on it then send you some leaks and I get other 50% then I send the map.'
    },
    {
      question: 'How Much Is ........?',
      answer: 'We Will Talk in my discord Direct messages chat.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Frequently Asked <span className="text-blue-600">Questions</span>
            </motion.h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <motion.button
                  whileHover={{ backgroundColor: '#f8fafc' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleFAQ(index)}
                                     className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700 transition-colors duration-200"
                >
                                     <h3 className="text-lg font-semibold text-white pr-4">
                    <span className="text-blue-600 font-bold mr-3">{index + 1}.</span>
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDownIcon className="w-6 h-6 text-gray-500 flex-shrink-0" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-300 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 