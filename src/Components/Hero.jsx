import React from 'react';
import img from '../assets/img1.png';
import vid from '../assets/q-c3d7becf.webm';
import { HiSparkles } from "react-icons/hi";
import { motion } from 'framer-motion';

const Background = () => {
return (
    <div className="relative min-h-screen mt-[6rem] overflow-hidden bg-transparent z-20">
      {/* Overlay content */}
      <div className="flex items-center justify-center h-[12rem] text-xl">
      <div className="z-10 flex flex-col items-center justify-center space-y-8">
        {/* Notification banner */}
        <div className="flex items-center justify-evenly w-80 h-8 border border-slate-500/30 rounded-3xl backdrop-blur-sm bg-slate-900/10 hover:border-slate-400/50">
          <HiSparkles className="text-slate-200 px-0.5" />
          <h2 className="text-sm font-medium text-violet-300">New: Our AI integration just landed</h2>
        </div>
        {/* Main heading and subtitle */}
        <div className="text-center">
          <h1 className="text-5xl text-slate-200 font-medium text-7xl font-['Aeonik Pro Regular'] tracking-wide">Think better with Reflect</h1>
          <p className="text-lg text-slate-300/80 ">Never miss a note, idea, or connection.</p>
        </div>
      </div>
      </div>

      <div className="flex items-center justify-center z-10 flex-col">
      <div className='z-0 flex items-start justify-center mt-[-12rem]'>
      <video src={vid} loop muted autoPlay playsInline className='h-[39rem] z-2 relative'/>
      </div>
      <img src={img} className='h-[40rem] mt-[-19rem] backdrop-blur'/>
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
