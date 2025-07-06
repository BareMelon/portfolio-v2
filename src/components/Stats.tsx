import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Stats: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    hours: 0,
    awards: 0
  });

  const stats = [
    { key: 'clients', target: 232, label: 'Clients' },
    { key: 'projects', target: 521, label: 'Projects' },
    { key: 'hours', target: 1453, label: 'Hours Of Support' },
    { key: 'awards', target: 32, label: 'Awards' }
  ];

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          clients: Math.floor(232 * progress),
          projects: Math.floor(521 * progress),
          hours: Math.floor(1453 * progress),
          awards: Math.floor(32 * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 100 }}
                    className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="text-2xl font-bold text-white">
                      {stat.key === 'clients' && '👥'}
                      {stat.key === 'projects' && '📁'}
                      {stat.key === 'hours' && '⏰'}
                      {stat.key === 'awards' && '🏆'}
                    </span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {counts[stat.key as keyof typeof counts].toLocaleString()}
                    </div>
                    <p className="text-blue-200 font-medium">{stat.label}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats; 