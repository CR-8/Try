import React, { useEffect, useRef } from 'react';
import { HiSparkles } from 'react-icons/hi2';

const Last = () => {
  const canvasRef = useRef(null); // Reference to the canvas
  const animationFrameRef = useRef(null); // Animation frame reference
  const starsRef = useRef([]); // Array of stars

  // Constants
  const STAR_COUNT = 1500; // Reduced for performance
  const STAR_ESCAPE_WIDTH = 300;
  const START_TIME = new Date().getTime();

  // Star class for individual star properties
  class Star {
    constructor(size) {
      const orbitalRange = [
        Math.random() * (STAR_ESCAPE_WIDTH / 2),
        Math.random() * (STAR_ESCAPE_WIDTH / 2) + STAR_ESCAPE_WIDTH,
      ];
      this.orbital = orbitalRange.reduce((sum, value) => sum + value) / orbitalRange.length;
      this.opacity = Math.random() * 0.8 + 0.2; // Varying brightness
      this.radius = Math.random() * 2 + 0.5; // Varying size
      this.position = { x: size.x / 2, y: size.y / 2 + this.orbital };
      this.rotation = Math.PI * Math.random() * 2;
      this.position = rotate(size.x / 2, size.y / 2, this.position.x, this.position.y, this.rotation);
      this.rSpeed = Math.random() * 0.0008 + this.opacity / 50000;
    }
  }

  // Rotate function to calculate star positions
  const rotate = (cx, cy, x, y, radians) => {
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    const nx = cos * (x - cx) - sin * (y - cy) + cx;
    const ny = sin * (x - cx) + cos * (y - cy) + cy;
    return { x: nx, y: ny };
  };

  // Render stars
  const drawStar = (context, star, size, currentTime) => {
    const { x, y } = rotate(size.x / 2, size.y / 2, star.position.x, star.position.y, star.rSpeed * currentTime);
    context.beginPath();
    context.arc(x, y, star.radius, 0, 2 * Math.PI, false);
    context.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    context.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const size = { x: window.innerWidth, y: window.innerHeight };

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = size.x * window.devicePixelRatio;
      canvas.height = size.y * window.devicePixelRatio;
      context.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    // Render loop
    const render = () => {
      const currentTime = (new Date().getTime() - START_TIME) / 100;
      context.fillStyle = 'linear-gradient(to bottom, #000428, #004e92)';
      context.fillRect(0, 0, size.x, size.y);

      // Generate stars if necessary
      while (starsRef.current.length < STAR_COUNT) {
        starsRef.current.push(new Star(size));
      }

      // Draw stars
      starsRef.current.forEach((star) => drawStar(context, star, size, currentTime));
      animationFrameRef.current = requestAnimationFrame(render);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    render();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-custom-gradient">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full bg-custom-gradient" />
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 mt-14">
        <div className="flex items-center justify-evenly w-80 h-8 border border-slate-500/30 rounded-3xl backdrop-blur-sm bg-slate-900/10 hover:border-slate-400/50">
          <HiSparkles className="text-slate-200 px-0.5" />
          <h2 className="text-sm font-medium text-violet-300">New: Our AI integration just landed</h2>
        </div>
        <div className="text-center">
          <h1 className="text-5xl text-slate-200 font-medium font-['Aeonik Pro Regular'] tracking-wide">Think better with Reflect</h1>
          <p className="text-lg text-slate-300/80 ">Never miss a note, idea, or connection.</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="px-[6px] py-[3px] border-b border-slate-500 bg-violet-800 h-[40px] w-[250px] rounded-lg text-center flex items-center justify-center">
          <div className="text-center font-semibold">Start Your 14-day Trial</div>
        </div>
      </div>
    </div>
  );
};

export default Last;