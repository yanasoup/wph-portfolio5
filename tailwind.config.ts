import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const textSizes = {
  'display-5xl': '--text-display-5xl',
  'display-3xl': '--text-display-3xl',
  'display-2xl': '--text-display-2xl',
  'display-xl': '--text-display-xl',
  'display-lg': '--text-display-lg',
  'display-md': '--text-display-md',
  'display-sm': '--text-display-sm',
  'display-xs': '--text-display-xs',
  'text-xl': '--text-xl',
  'text-lg': '--text-lg',
  'text-md': '--text-md',
  'text-sm': '--text-sm',
  'text-xs': '--text-xs',
};

const fontWeights = {
  regular: '--font-weight-regular',
  medium: '--font-weight-medium',
  semibold: '--font-weight-semibold',
  bold: '--font-weight-bold',
  extrabold: '--font-weight-extrabold',
};

const customTextPlugin = plugin(({ addUtilities }) => {
  const newUtilities: Record<string, any> = {};

  for (const [sizeName, sizeVar] of Object.entries(textSizes)) {
    for (const [weightName, weightVar] of Object.entries(fontWeights)) {
      const className = `.${sizeName}-${weightName}`;
      newUtilities[className] = {
        fontSize: `var(${sizeVar})`,
        lineHeight: `var(${sizeVar}--line-height)`,
        fontWeight: `var(${weightVar})`,
      };
    }
  }

  addUtilities(newUtilities);
});

export default {
  theme: {
    extend: {
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        'spin-slow': 'spin-cone 4s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
        'spin-cone': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'auto-rotate': {
          to: { 'var(--angle)': '360deg' },
        },
      },
      spacing: {
        '3.88': '0.97rem',
        '21.8': '5.46rem',
      },
      borderRadius: {
        '3.24': '80.8rem',
      },
    },
  },
  plugins: [customTextPlugin],
} satisfies Config;
