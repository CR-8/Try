import { motion } from 'framer-motion';

const ParticleEffect = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array(20).fill(null).map((_, i) => (
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
  );
};

export default ParticleEffect;
