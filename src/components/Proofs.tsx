import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Proofs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedProof, setSelectedProof] = useState<string | null>(null);
  const [selectedProofImg, setSelectedProofImg] = useState<string | null>(null);

  const proofItems = [
    { id: 1, title: 'Proof Chat 1 (1/2)', description: 'Payment with PlayStation Gift Code', image: '/images/proofs/1.jpg' },
    { id: 2, title: 'Proof Chat 1 (2/2)', description: 'Payment with PlayStation Gift Code', image: '/images/proofs/2.jpg' },
    { id: 3, title: 'Proof Chat 2 (1/1)', description: 'Payment with PlayStation Gift Code', image: '/images/proofs/3.jpg' },
    { id: 4, title: 'Proof Chat 3 (1/2)', description: 'Payment with PayPal', image: '/images/proofs/4.jpg' },
    { id: 5, title: 'Proof Chat 3 (2/2)', description: 'Payment with PayPal', image: '/images/proofs/5.jpg' }
  ];

  return (
    <section id="proofs" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Proofs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Here is some proof that I don't scam!
            </motion.p>
          </div>

          {/* Proofs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proofItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-700 to-gray-600 border border-gray-500 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedProof(item.title);
                  setSelectedProofImg(item.image);
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-square object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 text-lg font-semibold">
                  {item.title}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Proof Modal */}
      <AnimatePresence>
        {selectedProof && selectedProofImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => {
              setSelectedProof(null);
              setSelectedProofImg(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-2xl max-h-full bg-gray-800 rounded-lg overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedProofImg}
                alt={selectedProof}
                className="w-full h-auto max-h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{selectedProof}</h3>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setSelectedProof(null);
                  setSelectedProofImg(null);
                }}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-600 transition-colors duration-200"
              >
                <XMarkIcon className="w-6 h-6 text-white" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Proofs; 