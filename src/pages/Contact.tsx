import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      platform: 'Discord',
      handle: 'Direct Messages',
      description: 'The fastest way to reach me',
      link: 'https://discord.com/channels/@me/1273301309315088404',
      icon: '💬'
    },
    {
      platform: 'PayPal',
      handle: '@yn4n',
      description: 'For payments and business inquiries',
      link: 'https://www.paypal.com/paypalme/yn4n',
      icon: '💳'
    },
    {
      platform: 'TikTok',
      handle: '@da0mnn',
      description: 'Follow my latest work',
      link: 'https://www.tiktok.com/@da0mnn',
      icon: '🎵'
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
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your project? Contact me through any of these channels
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.platform}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass-effect rounded-2xl p-8 text-center group hover:shadow-glow transition-all duration-300 block"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{method.platform}</h3>
                <p className="text-blue-400 font-semibold mb-3">{method.handle}</p>
                <p className="text-gray-400">{method.description}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass-effect rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Working Hours</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">Availability</h3>
                <p className="text-gray-300">2-3 Hours per Day</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">Response Time</h3>
                <p className="text-gray-300">Usually within 24 hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact; 