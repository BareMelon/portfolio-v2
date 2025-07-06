import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">About Miles</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about creating exceptional digital experiences in the Roblox ecosystem
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-3xl p-8">
              <div className="flex items-center mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 mr-6">
                  <img 
                    src="/images/miles.png" 
                    alt="Miles" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Miles</h2>
                  <p className="text-xl text-gray-300">Roblox Developer & Creative Designer</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-300 mb-2">Specializations</h3>
                  <p className="text-white leading-relaxed">
                    Expert in Roblox building, 3D modeling, scripting, animation, UI design, 
                    clothing creation, and graphic design. I transform creative visions into 
                    immersive gaming experiences.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-300 mb-2">Experience</h3>
                  <p className="text-white leading-relaxed">
                    With hundreds of completed projects and satisfied clients, I bring 
                    technical expertise and creative innovation to every project.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Technical Skills</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="group"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-gray-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-sm font-semibold text-blue-400">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(skill.percentage, 100)}%` }}
                    transition={{ delay: 1 + index * 0.1, duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-glow"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About; 