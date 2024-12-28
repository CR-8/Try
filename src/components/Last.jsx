import React from 'react';
import vid from '../assets/q-c3d7becf.webm';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden bg-transparent">
      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 mt-14">
        {/* Notification banner */}
        <div className="flex items-center justify-evenly w-[6rem] h-8 border border-slate-500/30 rounded-3xl backdrop-blur-sm bg-slate-900/10 hover:border-slate-400/50">
          <h2 className="text-sm font-medium text-violet-300">Get Started</h2>
        </div>
        {/* Main heading and subtitle */}
        <div className="text-center">
          <h1 className="text-5xl text-slate-200 font-medium font-['Aeonik Pro Regular'] tracking-wide ">Think better with Reflect</h1>
          <p className="text-lg text-slate-300/80 mt-[2rem]">Never miss a note, idea, or connection.</p>
        </div>
        <div className="flex items-center justify-evenly w-[11rem] cursor-pointer h-10 border border-slate-500/30 rounded-lg backdrop-blur-sm bg-slate-900/10 hover:border-slate-400/50">
          <h2 className="text-sm font-medium text-violet-300">Start your 14 day trial</h2>
        </div>
      </div>
      <div className="flex items-center justify-center z-0">
            <video src={vid} loop muted autoPlay playsInline className='h-[45rem] z-2 relative'/>
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
  );
};

export default Background;
