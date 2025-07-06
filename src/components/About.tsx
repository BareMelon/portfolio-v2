import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = [
    { name: 'HTML', percentage: 100 },
    { name: 'CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 55 },
    { name: 'Lua', percentage: 70 },
    { name: 'Building', percentage: 101 },
    { name: 'Modeling', percentage: 78 },
    { name: 'Classic Clothes Making', percentage: 100 },
    { name: 'UI Designing', percentage: 97 },
    { name: 'Animating', percentage: 90 },
    { name: 'Designing', percentage: 101 }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
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
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Passionate Roblox developer and designer with expertise in building, modeling, and creating immersive experiences.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Profile Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 mr-6">
                    <img 
                      src="/images/miles.png" 
                      alt="Miles" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Miles</h3>
                    <p className="text-gray-300">Roblox Developer & Designer</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-300 w-24">Name:</span>
                    <span className="text-white">Miles</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold text-gray-300 w-24">Skills:</span>
                    <span className="text-white">
                      Roblox Builder, Roblox Modeler, Roblox Scripter, Roblox Animator, 
                      UI Designer, Clothes Maker, Designer, Logo Designer, Graphic Designer 
                      and Frontend Web Developer
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
                             <h3 className="text-2xl font-bold text-white mb-8">Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm font-semibold text-blue-600">
                        {skill.percentage}%
                      </span>
                    </div>
                                         <div className="w-full bg-gray-600 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${Math.min(skill.percentage, 100)}%` } : {}}
                        transition={{ delay: 1.2 + index * 0.1, duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 