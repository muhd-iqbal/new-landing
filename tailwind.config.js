/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0d1117',
        'bg-secondary': '#161b22',
        'bg-tertiary': '#21262d',
        'border-color': '#30363d',
        'text-primary': '#e6edf3',
        'text-secondary': '#8b949e',
        'accent-blue': '#FF6B6B',    // vibrant coral
        'accent-green': '#4ECDC4',   // turquoise
        'accent-orange': '#FECA57',  // golden yellow
        'accent-purple': '#A8E6CF',  // mint green
        'accent-red': '#FF8A80',     // salmon pink
      },
      fontFamily: {
        'sans': ['Spline Sans', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'slide-down': 'slideDown 0.6s ease',
        'fade-in-up': 'fadeInUp 0.8s ease',
        'pulse-slow': 'pulse 2s ease infinite',
        'gradient-shift': 'gradientShift 20s ease infinite',
      },
      keyframes: {
        slideDown: {
          'from': { transform: 'translateY(-100%)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        gradientShift: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        }
      }
    },
  },
  plugins: [],
}