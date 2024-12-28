import React from "react";
import ParticleEffect from "./ParticleEffect.jsx";
import img from '../assets/q-97c536f9.png';

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
        <div className="relative h-[60rem]">
            <img 
                src={img} 
                className='absolute left-[30rem]
                top-[15rem] h-full '
                alt="background"
            />
            <div className="absolute inset-0"></div>
            <ParticleEffect/>

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <button className="uppercase text-sm text-purple-300 border border-purple-500/50 px-6 py-2 rounded-full mb-8 backdrop-blur-md bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300">
                        Premium Access
                    </button>

                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                        Simple Pricing, Powerful Features
                        <br />
                        <span className="text-2xl sm:text-3xl font-light mt-2 block">One plan for all</span>
                    </h2>

                    <div className="pricing-card p-[48px] mb-12 hover:border-purple-500/30 transition-all duration-300">
                        <div className="text-6xl sm:text-7xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                            $10 <span className="text-2xl font-normal text-gray-300">/month</span>
                        </div>
                        <p className="text-sm text-purple-300 mb-8">Save 20% with annual billing</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-md mb-10">
                            {features.map((feature) => (
                                <div
                                    key={feature.id}
                                    className="flex items-center ml-[70px] gap-2 text-gray-200 hover:text-purple-300 transition-colors duration-300"
                                >
                                    <span className="text-l">{feature.icon}</span>
                                    <span>{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                            Start 14-day free trial
                        </button>
                    </div>

                    <p className="text-sm text-purple-300/80">No credit card required</p>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
