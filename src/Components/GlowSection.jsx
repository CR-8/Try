import React from 'react';
import BgImg from '../assets/q-44e26a19.png'

const GlowHeroSection = () => {
  return (
    <div className="h-[65rem] bg-transparent flex flex-col items-center justify-center relative overflow-hidden p-8">      
      <div className="relative">
        < img src = {BgImg} className='h-[60rem]'></img>
      </div>

      <div className=" absolute top-[52%] text-center space-y-6 max-w-2xl mx-auto">
        {/* Subtle text */}
        <p className="text-blue-200/80 text-sm">
          All your notes, connected
        </p>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-semibold text-white tracking-wide">
          Give your brain superpowers
        </h1>
        
        {/* Subtext */}
        <p className="text-slate-100/80 text-lg max-w-xl mx-auto leading-relaxed">
          Mirror the way your mind works by associating notes through backlinks.
          Reflect builds you a second brain that you can reference anytime.
        </p>
        </div>

        
        {/* Optional: Add stars effect */}
        <div className="absolute inset-0 -z-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
  );
};

export default GlowHeroSection;