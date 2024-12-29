import React from 'react';
import ParticleEffect from './ParticleEffect'; // Assuming ParticleEffect is a separate component

const AIFeatures = () => {
  const features = [
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-200"
        >
          <path
            d="M20.0032 25.9992V34.3992M20.0032 25.9992C23.5565 25.9992 26.659 24.0687 28.3189 21.1992M20.0032 25.9992C16.4498 25.9992 13.3474 24.0687 11.6875 21.1992M14.0029 34.3992L26.0029 34.3992"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="14"
            y="5.59961"
            width="12"
            height="16.8"
            rx="6"
            fill="url(#paint0_linear_120_26933)"
            fillOpacity="0.32"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_120_26933"
              x1="20"
              y1="5.59961"
              x2="20"
              y2="22.3996"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" stopOpacity="0" />
              <stop offset="1" stopColor="currentColor" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: 'Transcribe voice notes',
      description: 'with human-level accuracy',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-200">
          <path d="M31 8V25V32C31 32.7956 30.6839 33.5587 30.1213 34.1213C29.5587 34.6839 28.7956 35 28 35H12C11.2044 35 10.4413 34.6839 9.87868 34.1213C9.31607 33.5587 9 32.7956 9 32V8C9 7.20435 9.31607 6.44129 9.87868 5.87868C10.4413 5.31607 11.2044 5 12 5H28C28.7956 5 29.5587 5.31607 30.1213 5.87868C30.6839 6.44129 31 7.20435 31 8Z" fill="url(#paint0_linear_doc)" fillOpacity="0.24"/>
          <defs>
            <linearGradient id="paint0_linear_doc" x1="20" y1="5" x2="20" y2="35" gradientUnits="userSpaceOnUse">
              <stop stopColor="currentColor" stopOpacity="0"/>
              <stop offset="1" stopColor="currentColor"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: 'Generate article outlines',
      description: 'from your scattered thoughts'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-200">
          <path d="M30.1213 6.87868C30.6839 7.44129 31 8.20435 31 9V21.5V22.2899C30.3663 22.1013 29.695 22 29 22C25.134 22 22 25.134 22 29C22 30.9587 22.8045 32.7295 24.101 34H19H12C11.2044 34 10.4413 33.6839 9.87868 33.1213C9.31607 32.5587 9 31.7956 9 31V9C9 8.20435 9.31607 7.44129 9.87868 6.87868C10.4413 6.31607 11.2044 6 12 6H28C28.7956 6 29.5587 6.31607 30.1213 6.87868Z" fill="url(#paint0_linear_notes)" fillOpacity="0.24"/>
          <defs>
            <linearGradient id="paint0_linear_notes" x1="20" y1="6" x2="20" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="currentColor" stopOpacity="0"/>
              <stop offset="1" stopColor="currentColor"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: 'List key takeaways',
      description: 'from your meeting notes'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-200">
          <path d="M8 5H32C32.7956 5 33.5587 5.31607 34.1213 5.87868C34.6839 6.44129 35 7.20435 35 8V27C35 27.7956 34.6839 28.5587 34.1213 29.1213C33.5587 29.6839 32.7956 30 32 30H26.7101C26.8987 29.3663 27 28.695 27 28C27 24.134 23.866 21 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M27 28C27 29.7135 26.3843 31.2832 25.3621 32.5C24.078 34.0285 22.1525 35 20 35C16.134 35 13 31.866 13 28C13 24.134 16.134 21 20 21C23.866 21 27 24.134 27 28Z" fill="url(#paint0_linear_spell)" fillOpacity="0.24"/>
          <defs>
            <linearGradient id="paint0_linear_spell" x1="20" y1="21" x2="20" y2="35" gradientUnits="userSpaceOnUse">
              <stop stopColor="currentColor" stopOpacity="0"/>
              <stop offset="1" stopColor="currentColor"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: 'Fix grammar, spelling',
      description: 'and improve your writing'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-200">
          <path d="M9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9H13C13.5523 9 14 9.44772 14 10V14C14 14.5523 14.4477 15 15 15H21C21.5523 15 22 14.5523 22 14V10C22 9.44772 22.4477 9 23 9H25L29.8284 13.8284C30.5786 14.5786 31 15.596 31 16.6569V28C31 28.7956 30.6839 29.5587 30.1213 30.1213C29.5587 30.6839 28.7956 31 28 31H12C10.3431 31 9 29.6569 9 28V12C9 11.2044 9.31607 10.4413 9.87868 9.87868Z" fill="url(#paint0_linear_custom)" fillOpacity="0.24"/>
          <defs>
            <linearGradient id="paint0_linear_custom" x1="20" y1="9" x2="20" y2="31" gradientUnits="userSpaceOnUse">
              <stop stopColor="currentColor" stopOpacity="0"/>
              <stop offset="1" stopColor="currentColor"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: 'Save your own',
      description: 'custom prompts'
    }
  ];


  return (
    <div className="relative h-[20rem] bg-transparent py-16">
      <ParticleEffect />
      <div className="h-[6rem] w-[100rem] mx-auto px-4 mt-[4rem]">
        <h2 className="text-4xl font-semibold text-white text-center mb-16">
          What can you do with Reflect AI?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-9">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              role="article"
              aria-label={`Feature: ${feature.title}`}
            >
              <div className="features-card h-full rounded-xl border border-slate-500/30 bg-slate-900/10 p-6 backdrop-blur-sm transition-all duration-300 hover:border-slate-400 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-slate-700/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg text-gray-200 bg-slate-800/50 transition-colors group-hover:bg-slate-700/50">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white transition-colors group-hover:text-blue-400">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 transition-colors group-hover:text-slate-300">
                  {feature.description}
                </p>
                <div className="mt-4 border-t border-slate-500/30 pt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-sm text-blue-400">Learn more →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIFeatures;
