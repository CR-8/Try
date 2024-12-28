import React from 'react';
import { motion } from 'framer-motion';
import ParticleEffect from './ParticleEffect';

const AINotesLanding = () => {
  return (
    <div className="relative min-h-screen bg-transparent flex flex-col items-center p-4 overflow-hidden">
      <ParticleEffect />
      {/* Badge */}
      <div className="mb-6">
        <span className="px-4 py-1 rounded-full text-sm bg-purple-900/30 text-purple-300 border border-purple-800">
          Reflect AI
        </span>
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
      </div>

      {/* Main Title */}
      <h1 className="text-5xl md:text-6xl font-semibold text-white text-center mb-6 tracking-wide">
        Notes with an AI assistant
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-center max-w-2xl mb-16">
        Reflect uses GPT-4 and Whisper from OpenAI to improve your writing,
        organize your thoughts, and act as your intellectual thought partner.
      </p>

      {/* Interactive Card */}
      <div className="relative w-full max-w-2xl cursor-pointer">

        {/* Card */}
        <div className="bg-slate-500/10 backdrop-blur border-double border-slate-600 border-8 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white text-lg">How to use AI to take better notes</h3>
            <span className="text-purple-400 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              Click to see magic
            </span>
          </div>

          <div className="text-gray-400 pl-4 border-l-2 border-purple-800/30">
            What can LLMs like GPT do, specifically for note-taking?
          </div>
        </div>

        {/* Grid Effect */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-purple-500/20 grid grid-cols-12 gap-4">
            {[...Array(48)].map((_, i) => (
              <div key={i} className="border-b border-r border-purple-500/10"></div>
            ))}
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default AINotesLanding;
