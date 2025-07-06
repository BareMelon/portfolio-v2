import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'PayPal',
      url: 'https://www.paypal.com/paypalme/yn4n',
      icon: '💳'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@da0mnn',
      icon: '🎵'
    },
    {
      name: 'Discord',
      url: 'https://discord.com/channels/@me/1273301309315088404',
      icon: '💬'
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-slate-900 to-black border-t border-gray-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">Miles Portfolio</h3>
              <p className="text-gray-400 leading-relaxed">
                Professional Roblox developer creating exceptional digital experiences. 
                Specializing in building, modeling, scripting, and design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h4 className="text-xl font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors">Roblox Building</li>
                <li className="hover:text-white transition-colors">3D Modeling</li>
                <li className="hover:text-white transition-colors">UI Design</li>
                <li className="hover:text-white transition-colors">Animation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h4 className="text-xl font-semibold text-white mb-6">Connect</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-2xl hover:shadow-glow transition-all duration-300"
                    title={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="pt-8 border-t border-gray-800 text-center"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400">
                © 2024 <span className="font-semibold text-blue-400">Miles Portfolio</span>. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Built with React & TypeScript • Deployed on GitHub Pages
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 