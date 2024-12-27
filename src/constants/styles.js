export const colors = {
  primary: {
    main: '#6B46C1',    // purple-600
    light: '#9F7AEA',   // purple-400
    dark: '#553C9A',    // purple-700
  },
  background: {
    primary: '#140b34',
    secondary: '#151030',
    gradient: 'linear-gradient(to bottom, #140b34, #151030)',
    overlay: 'rgba(21, 16, 48, 0.8)',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#CBD5E0',  // gray-400
    muted: '#718096',      // gray-500
  },
  border: {
    primary: 'rgba(107, 70, 193, 0.3)',    // purple-600/30
    secondary: 'rgba(160, 174, 192, 0.3)',  // gray-500/30
  }
};

export const spacing = {
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '3rem',      // 48px
};

export const borderRadius = {
  sm: '0.375rem',  // 6px
  md: '0.5rem',    // 8px
  lg: '1rem',      // 16px
  full: '9999px',
};

export const transitions = {
  default: 'all 0.3s ease',
  fast: 'all 0.15s ease',
  slow: 'all 0.5s ease',
};

export const glassmorphism = {
  light: `
    backdrop-filter: blur(4px);
    background: rgba(255, 255, 255, 0.05);
  `,
  dark: `
    backdrop-filter: blur(4px);
    background: rgba(0, 0, 0, 0.05);
  `,
};

export const customGradients = {
  primary: 'linear-gradient(180deg, rgba(107, 70, 193, 0.2) 0%, transparent 100%)',
  glow: 'radial-gradient(circle at center, rgba(107, 70, 193, 0.2) 0%, transparent 70%)',
};

export const gradients = {
  main: {
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent)',
  },
  overlay: {
    dark: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent)',
    light: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8), transparent)',
  }
};

export const overlays = {
  component: {
    light: 'rgba(255, 255, 255, 0.03)',
    medium: 'rgba(255, 255, 255, 0.06)',
    dark: 'rgba(0, 0, 0, 0.3)',
  },
  glassmorphism: {
    light: 'backdrop-filter: blur(8px)',
    medium: 'backdrop-filter: blur(12px)',
    dark: 'backdrop-filter: blur(16px)',
  }
};
