import React from 'react';
import ParticleEffect from './ParticleEffect';

const Features = () => {
  const features = [
    {
      title: "Built for speed",
      description: "Instantly sync your notes across devices",
      icon: (
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Networked notes",
      description: "Form a graph of ideas with backlinked notes",
      icon: (
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "iOS app",
      description: "Capture ideas on the go, online or offline",
      icon: (
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "End-to-end encryption",
      description: "Only you can access your notes",
      icon: (
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Calendar integration",
      description: "Keep track of meetings and agendas",
      icon: (
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Publishing",
      description: "Share anything you write with one click",
      icon: (
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      )
    },
    {
      title: "Instant capture",
      description: "Save snippets from your browser and Kindle",
      icon: (
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      )
    },
    {
      title: "Frictionless search",
      description: "Easily recall and index past notes and ideas",
      icon: (
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative h-[45rem] bg-transparent py-16">
      <ParticleEffect />
      <div className="max-w-7xl mx-auto px-4 mt-[4rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              role="article"
              aria-label={`Feature: ${feature.title}`}
            >
              <div className="features-card h-full rounded-xl border border-slate-500/30 bg-slate-900/10 p-6 backdrop-blur-sm transition-all duration-300 hover:border-slate-400 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-slate-700/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800/50 transition-colors group-hover:bg-slate-700/50">
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

export default Features;
