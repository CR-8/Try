import React from "react"; // Removed useState since it's no longer needed
import { motion } from "framer-motion";
import ParticleEffect from "./ParticleEffect.jsx";

const PricingSection = () => {
    const features = [
        { id: 1, text: "Networked note-taking", icon: "📝" },
        { id: 2, text: "End to end encryption", icon: "🔒" },
        { id: 3, text: "Chrome and Safari web clipper", icon: "🌐" },
        { id: 4, text: "Kindle highlights sync", icon: "📚" },
        { id: 5, text: "Kindle offline sync", icon: "💫" },
        { id: 6, text: "iOS app", icon: "📱" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative text-white py-20 px-4 min-h-screen flex items-center bg-transparent justify-center overflow-hidden"
        >
                    <ParticleEffect/>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="uppercase text-sm text-purple-300 border border-purple-500 px-6 py-2 rounded-full mb-8 backdrop-blur-sm bg-purple-500/10 transition-all duration-300"
                >
                    Premium Access
                </motion.button>

                <motion.h2
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent"
                >
                    Simple Pricing, Powerful Features
                    <br />
                    <span className="text-2xl sm:text-3xl font-light">One plan for all</span>
                </motion.h2>

                <motion.div
                    className="pricing-card bg-slate-500/10 p-8 rounded-2xl backdrop-blur-md border border-purple-500/20 shadow-2xl mb-12"
                >
                    <div className="text-6xl sm:text-7xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                        $10 <span className="text-2xl font-normal text-gray-300">/month</span>
                    </div>
                    <p className="text-sm text-purple-300 mb-8">Save 20% with annual billing</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-md mb-10">
                        {features.map((feature) => (
                            <motion.div
                                key={feature.id}
                                className="flex items-center gap-3 text-gray-200"
                            >
                                <span className="text-xl">{feature.icon}</span>
                                <span>{feature.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
                    >
                        Start 14-day free trial
                    </motion.button>
                </motion.div>

                <p className="text-sm text-purple-300/80">No credit card required</p>
            </div>
            {/* Dynamic background effects */}
        </motion.div>
    );
};

export default PricingSection;
