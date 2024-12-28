import React from 'react';
import { motion } from 'framer-motion';
import ParticleEffect from './ParticleEffect';

const Security = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center p-4 bg-transparent">
      <ParticleEffect />
      {/* Animated background text */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {Array(20)
          .fill(null)
          .map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              animate={{
                x: ['0%', '100%'],
                y: ['0%', '100%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Hexagonal Wrapper with improved gradient */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center mb-8"
        >
          {/* Enhanced glowing effect */}
          <div className="absolute w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

          {/* Lock Icon */}
          <motion.div
            className="relative z-10 p-8 rounded-xl bg-gray-800/50 backdrop-blur-xl border border-purple-500/20"
            whileHover={{ rotate: [0, -10, 10, 0] }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-16 h-16 text-purple-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 9V7a4 4 0 00-8 0v2M5 12h14M9 16h6"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="px-4 py-1 rounded-full text-sm bg-purple-900/30 text-purple-300 border border-purple-800 backdrop-blur-sm">
            Military-grade Encryption
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 my-6">
            Hardened Security
          </h1>

          <p className="text-gray-300 max-w-xl mx-auto text-lg leading-relaxed backdrop-blur-sm">
            Your notes are protected with state-of-the-art end-to-end encryption. Not even our team can access your private information, ensuring absolute privacy and security.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Security;
