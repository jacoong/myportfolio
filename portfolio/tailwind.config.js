/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Concept Colors
        concept: {
          // Background colors
          bg: {
            light: '#f8fafc',    // Light mode background
            dark: '#0f172a',     // Dark mode background
          },
          // Card/Box colors
          card: {
            light: '#ffffff',    // Light mode card
            dark: '#1e293b',     // Dark mode card
          },
          // Border colors
          border: {
            light: '#e2e8f0',    // Light mode border
            dark: '#334155',     // Dark mode border
            hover: {
              light: '#3b82f6',  // Light mode hover border
              dark: '#60a5fa',   // Dark mode hover border
            },
          },
          // Text colors
          text: {
            primary: {
              light: '#1e293b',  // Light mode primary text
              dark: '#f1f5f9',   // Dark mode primary text
            },
            secondary: {
              light: '#64748b',  // Light mode secondary text
              dark: '#94a3b8',   // Dark mode secondary text
            },
          },
          // Interactive colors
          interactive: {
            selected: {
              light: '#1e293b',  // Light mode selected
              dark: '#f1f5f9',   // Dark mode selected
            },
            hover: {
              light: '#f1f5f9',  // Light mode hover
              dark: '#334155',   // Dark mode hover
            },
          },
          // Gradient colors
          gradient: {
            primary: {
              from: '#3b82f6',   // Blue-500
              to: '#9333ea',     // Purple-600
            },
            primaryHover: {
              from: '#2563eb',   // Blue-600
              to: '#7c3aed',     // Purple-700
            },
          },
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'shine': 'shine 2s linear infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        // 반응형 H1 스타일
        '.responsive-h1': {
          fontSize: '1.5rem', // 모바일: 24px
          lineHeight: '2rem',
          fontWeight: '700',
          '@media (min-width: 640px)': {
            fontSize: '2rem', // 작은 화면: 32px
            lineHeight: '2.5rem',
          },
          '@media (min-width: 768px)': {
            fontSize: '2.5rem', // 중간 화면: 40px
            lineHeight: '3rem',
          },
          '@media (min-width: 1024px)': {
            fontSize: '3rem', // 큰 화면: 48px
            lineHeight: '3.5rem',
          },
        },
        // 반응형 H2 스타일
        '.responsive-h2': {
          fontSize: '1.25rem', // 모바일: 20px
          lineHeight: '1.75rem',
          fontWeight: '700',
          '@media (min-width: 640px)': {
            fontSize: '1.5rem', // 작은 화면: 24px
            lineHeight: '2rem',
          },
          '@media (min-width: 768px)': {
            fontSize: '1.875rem', // 중간 화면: 30px
            lineHeight: '2.25rem',
          },
          '@media (min-width: 1024px)': {
            fontSize: '2.25rem', // 큰 화면: 36px
            lineHeight: '2.5rem',
          },
        },
        // 반응형 H3 스타일
        '.responsive-h3': {
          fontSize: '1.125rem', // 모바일: 18px
          lineHeight: '1.75rem',
          fontWeight: '600',
          '@media (min-width: 640px)': {
            fontSize: '1.25rem', // 작은 화면: 20px
            lineHeight: '1.75rem',
          },
          '@media (min-width: 768px)': {
            fontSize: '1.5rem', // 중간 화면: 24px
            lineHeight: '2rem',
          },
          '@media (min-width: 1024px)': {
            fontSize: '1.875rem', // 큰 화면: 30px
            lineHeight: '2.25rem',
          },
        },
        // 반응형 일반 텍스트 스타일
        '.responsive-text': {
          fontSize: '1rem', // 모바일: 16px
          lineHeight: '1.5rem',
          '@media (min-width: 640px)': {
            fontSize: '1.125rem', // 작은 화면: 18px
            lineHeight: '1.75rem',
          },
          '@media (min-width: 768px)': {
            fontSize: '1.25rem', // 중간 화면: 20px
            lineHeight: '1.75rem',
          },
          '@media (min-width: 1024px)': {
            fontSize: '1.5rem', // 큰 화면: 24px
            lineHeight: '2rem',
          },
        },
      });
    }),
  ],
}

