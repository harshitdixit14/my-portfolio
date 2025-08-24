// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        'scroll': 'scroll-left 20s linear infinite',
        'slide-left': 'slide-left 1s ease-in-out',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      colors: {
        white10: 'rgba(255, 255, 255, 0.1)',
        white5: 'rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
}
