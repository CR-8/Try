import React, { useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import ParticleEffect from './ParticleEffect';

const Integrations = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const integrations = [
    {
      title: "Zapier",
      description: "Connect with Reflect with dozens of applications without code",
      icon: "https://imgs.search.brave.com/l-MAx4rDlCbvVAyBh9BJAPt5YuOPwt-PEmRPs_FD_DU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2ZkL1phcGllcl9s/b2dvLnN2Zw",
      features: ["1000+ app connections", "Automated workflows", "Real-time syncing"],
      ctaText: "Connect with Zapier",
    },
    {
      title: "Readwise",
      description: "Sync your reading highlights and notes with Reflect.",
      icon: "https://imgs.search.brave.com/6V9iHVh0_Don8APQ-MFaP9Wjg573uhyEr9F_GumY2UQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sYXdz/b25ibGFrZS5jb20v/Y29udGVudC9pbWFn/ZXMvMjAyMC8xMi9S/ZWFkd2lzZV9Mb2dv/LmpwZw",
      features: ["Kindle integration", "PDF highlights", "Article syncing"],
      ctaText: "Connect with Readwise",
    },
    {
      title: "Google and Outlook",
      description: "Integrate your contacts and calendars",
      icon: "https://imgs.search.brave.com/WFUCWSTA1WQZxQ6Bj0PpSiIS0qx9cb9e-ysxkOY4rTA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZ29vZ2xlLXMt/bG9nby8xNTAvR29v/Z2xlX0ljb25zLTA5/LTUxMi5wbmc",
      features: ["Calendar sync", "Contact import", "Email integration"],
      ctaText: "Connect accounts",
    },
    {
      title: "Chrome and Safari",
      description: "Save web clips and sync with your Kindle",
      icon: "https://imgs.search.brave.com/0pe9DjcW3IlxYg-mXnduHvrOHIfo3BBV03I_jxB51U0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZ29vZ2xlX2pm/a19pY29uc19ieV9j/YXJsb3Nqai81MTIv/Y2hyb21lLnBuZw",
      features: ["Web clipper", "Screenshot tool", "Bookmark sync"],
      ctaText: "Install extension",
    },
  ];

  return (
    <motion.div className="relative text-white py-20 px-6 sm:px-12">
      <ParticleEffect />
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-center mb-16"
        >
          <motion.p 
            whileHover={{ scale: 1.05 }}
            className="text-sm uppercase tracking-wider text-blue-400 mb-3"
          >
            Powerful Integrations
          </motion.p>
          <h2 className="text-5xl font-bold mb-6">Supercharge your workflow</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Connect Reflect with your favorite tools and boost your productivity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="bg-slate-500/10 p-8 rounded-xl shadow-xl border border-gray-700"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 bg-gray-600/30 p-3 rounded-lg">
                  <img
                    src={integration.icon}
                    alt={integration.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">{integration.title}</h3>
                  <p className="text-gray-300 mb-4">{integration.description}</p>
                  <ul className="space-y-2 mb-6">
                    {integration.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 px-6 bg-violet-600 hover:bg-violet-700 rounded-lg transition-colors duration-200 font-medium">
                    {integration.ctaText}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Integrations;
