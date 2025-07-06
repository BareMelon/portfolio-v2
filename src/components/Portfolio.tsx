import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioItems = [
    { id: 1, title: 'Latest Work 1', image: '/images/portfolio/1.png' },
    { id: 2, title: 'Latest Work 2', image: '/images/portfolio/2.png' },
    { id: 3, title: 'Latest Work 3', image: '/images/portfolio/3.png' },
    { id: 4, title: 'Latest Work 4', image: '/images/portfolio/4.png' },
    { id: 5, title: 'Latest Work 5', image: '/images/portfolio/5.png' },
    { id: 6, title: 'Latest Work 6', image: '/images/portfolio/6.png' },
    { id: 7, title: 'Latest Work 7', image: '/images/portfolio/7.png' },
    { id: 8, title: 'Latest Work 8', image: '/images/portfolio/8.png' },
    { id: 9, title: 'Latest Work 9', image: '/images/portfolio/9.png' },
    { id: 10, title: 'Latest Work 10', image: '/images/portfolio/10.png' },
    { id: 11, title: 'Latest Work 11', image: '/images/portfolio/11.png' },
    { id: 12, title: 'Latest Work 12', image: '/images/portfolio/12.png' },
    { id: 13, title: 'Latest Work 13', image: '/images/portfolio/13.png' },
    { id: 14, title: 'Latest Work 14', image: '/images/portfolio/14.png' }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
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
              Portfolio
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Here are some pictures of my latest work!
            </motion.p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="aspect-square object-cover w-full h-full"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedImage(item.image)}
                      className="px-4 py-2 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
                    >
                      View
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
                             <div className="bg-gray-800 rounded-lg overflow-hidden">
                 <img 
                   src={selectedImage} 
                   alt="Portfolio Preview"
                   className="w-full h-auto max-h-96 object-cover"
                 />
                 <div className="p-6">
                   <h3 className="text-2xl font-bold text-white mb-2">Portfolio Item</h3>
                   <p className="text-gray-300">This is a preview of the selected work.</p>
                 </div>
               </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
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

export default Portfolio; 