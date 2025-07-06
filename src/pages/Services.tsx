import React from 'react';
import { motion } from 'framer-motion';
import { CubeIcon, PaintBrushIcon, CodeBracketIcon, FilmIcon } from '@heroicons/react/24/outline';

const Services: React.FC = () => {
  const services = [
    {
      icon: CubeIcon,
      title: 'Roblox Building',
      description: 'Professional building services for any Roblox project',
      price: 'Custom Quote'
    },
    {
      icon: PaintBrushIcon,
      title: 'UI Design',
      description: 'Modern and intuitive user interface design',
      price: 'Custom Quote'
    },
    {
      icon: CodeBracketIcon,
      title: 'Scripting',
      description: 'Lua scripting for game mechanics and functionality',
      price: 'Custom Quote'
    },
    {
      icon: FilmIcon,
      title: 'Animation',
      description: 'Character and object animations',
      price: 'Custom Quote'
    }
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
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">My Services</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional Roblox development services tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl p-6 text-center group hover:shadow-glow transition-all duration-300"
            >
              <service.icon className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <p className="text-blue-400 font-semibold">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services; 