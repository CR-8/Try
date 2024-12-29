import React from 'react';
import vid from '../assets/q-ba39153a.webm';
import img1  from '../assets/q-92fb8db8.png';
import img2  from '../assets/download.png';

const Security = () => {
  return (
    <div className='mt-[10rem] relative min-h-[60rem] flex items-center justify-center'>
      <div className='absolute top-0 left-0 w-full h-full z-10'>
        <BackgroundVideo />
      </div>
      <div className='relative z-20'>
        <SecurityHeader />
      </div>
    </div>
  );
};

const BackgroundVideo = () => (
  <div className="bg-transparent flex items-center justify-center">
    <video 
      src={vid} 
      loop 
      muted 
      autoPlay 
      playsInline 
      className="w-[100rem] h-[60rem]"
      aria-label="Background video"
    />
  </div>
);

const SecurityHeader = () => (
  <div className="flex flex-col items-center text-white max-w-4xl mx-auto px-4">
    <div className="encryption-logo relative">
      <div className='mt-[-6px] ml-[30px]'>
      <img
        src={img2}
        className="w-[4rem] m-[-14px] "
      />
    </div>
      <img
        src={img1}
        className="w-[6rem] mb-[2rem]"
      />
    </div>
    <div className="text-sm font-semibold tracking-wide border border-violet-600/60 rounded-3xl px-[1rem] py-[0.4rem] bg-violet-500/20">Secure Encryption</div>
    <h2 className="text-center mb-8">
      <div className="hidden md:block text-5xl font-bold leading-tight">
        <span>Advanced Security Protocols</span>
      </div>
      <div className="md:hidden text-4xl font-bold leading-tight">
        <span className="block">Advanced</span>
        <span className="block">Security Protocols</span>
      </div>
    </h2>
    <p className="text-center text-lg text-gray-300 max-w-2xl leading-relaxed">
      Our state-of-the-art encryption ensures your data is safe, private, and inaccessible to unauthorized parties.
    </p>
  </div>
);


export default Security;
