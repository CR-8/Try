import React, { useEffect, useRef } from 'react';
import img from "../assets/img1.png";
import { HiSparkles } from "react-icons/hi";
import { motion } from 'framer-motion';

// Background component renders the animated starfield and content
const Background = () => {
  const canvasRef = useRef(null); // Reference to the canvas element
  const animationFrameRef = useRef(null); // Reference for animation frame
  const starsRef = useRef([]); // Reference to store stars

  // Configuration constants
  const WAVE_FREQUENCY = 25;
  const STAR_ESCAPE_WIDTH = 300;
  const STAR_COUNT = 15000;
  const START_TIME = new Date().getTime();

  // Star class representing each star in the animation
  class Star {
    constructor(size) {
      // Determine orbital range for the star
      const orbitalRange = [
        Math.random() * (STAR_ESCAPE_WIDTH / 2),
        Math.random() * (STAR_ESCAPE_WIDTH / 2) + STAR_ESCAPE_WIDTH,
      ];
      this.orbital = orbitalRange.reduce((sum, value) => sum + value) / orbitalRange.length;
      this.opacity = Math.floor((1 - this.orbital / STAR_ESCAPE_WIDTH) * 255);
      // Initial position at center plus orbital offset
      this.position = { x: size.x / 2, y: size.y / 2 + this.orbital };
      this.rotation = Math.PI * Math.random() * 2;
      // Rotate position based on random rotation
      this.position = rotate(size.x / 2, size.y / 2, this.position.x, this.position.y, this.rotation);
      this.rSpeed = Math.random() * 0.0008 + this.opacity / 50000;
      this.waveSpeed1 = Math.random() * 0.01;
      this.waveSpeed2 = Math.random() * 0.01;
    }
  }

  // Function to rotate a point around a center by given radians
  const rotate = (cx, cy, x, y, radians) => {
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    const nx = cos * (x - cx) - sin * (y - cy) + cx;
    const ny = sin * (x - cx) + cos * (y - cy) + cy;
    return { x: nx, y: ny };
  };

  // Function to draw a star on the canvas
  const drawStar = (star, data, size, currentTime) => {
    // Update star's real position based on rotation speed and time
    star.realPosition = rotate(size.x / 2, size.y / 2, star.position.x, star.position.y, star.rSpeed * currentTime);
    // Recalculate opacity based on orbital distance
    star.opacity = Math.floor((1 - star.orbital / STAR_ESCAPE_WIDTH) * 255);

    // Calculate pixel index
    const index = Math.floor(star.realPosition.y) * size.x + Math.floor(star.realPosition.x);
    if (index >= 0 && index < data.length) {
      // Set pixel color with opacity
      data[index] = (star.opacity << 24) | (150 << 16) | (100 << 8) | 255;
    }
  };

  // useEffect hook to handle canvas setup and animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const size = { x: window.innerWidth * 2, y: window.innerHeight * 2 };

    // Function to resize the canvas based on window size
    const resizeCanvas = () => {
      canvas.width = size.x;
      canvas.height = size.y;
      context.scale(2, 2);
    };

    // Render loop for animation
    const render = () => {
      const currentTime = (new Date().getTime() - START_TIME) / 10;
      const imageData = context.createImageData(size.x, size.y);
      const data = new Uint32Array(imageData.data.buffer);

      // Initialize stars if not enough
      while (starsRef.current.length < STAR_COUNT) {
        starsRef.current.push(new Star(size));
      }

      // Draw each star
      starsRef.current.forEach((star) => drawStar(star, data, size, currentTime));

      // Put the image data back to canvas
      context.putImageData(imageData, 0, 0);
      animationFrameRef.current = requestAnimationFrame(render);
    };

    // Initial setup
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    render();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-custom-gradient">
      {/* Canvas for starfield animation */}
      <canvas ref={canvasRef} className="absolute inset-0 scale-[3.9] top-[20%] w-full h-full bg-transparent" />
      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 mt-14">
        {/* Notification banner */}
        <div className="flex items-center justify-evenly w-80 h-8 border border-slate-500/30 rounded-3xl backdrop-blur-sm bg-slate-900/10 hover:border-slate-400/50">
          <HiSparkles className="text-slate-200 px-0.5" />
          <h2 className="text-sm font-medium text-violet-300">New: Our AI integration just landed</h2>
        </div>
        {/* Main heading and subtitle */}
        <div className="text-center">
          <h1 className="text-5xl text-slate-200 font-medium font-['Aeonik Pro Regular'] tracking-wide">Think better with Reflect</h1>
          <p className="text-lg text-slate-300/80 ">Never miss a note, idea, or connection.</p>
        </div>
        {/* Preview image */}
        <img
          src={img}
          alt="Reflect preview"
          className="border-double border-8 flex justify-center items-end border-slate-800 rounded-3xl h-[800px] backdrop-blur"
        />
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
