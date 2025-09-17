/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '15': '3.75rem', // 60px
      },
      colors: {
        primary: {
          50: '#f3f1ff',
          100: '#ebe5ff',
          200: '#d9ceff',
          300: '#bea6ff',
          400: '#9f75ff',
          500: '#843dff',
          600: '#7c1af7',
          700: '#6b0de3',
          800: '#5a0bbf',
          900: '#4c1d95',
          950: '#2e1065',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        glass: {
          white: 'rgba(255, 255, 255, 0.1)',
          border: 'rgba(255, 255, 255, 0.2)',
        },
        brand: {
          pink: '#E6007E',
          blue: '#00AEEF',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg,rgb(43, 83, 203) 0%, #E6007E 100%)',
        'gradient-dark': 'linear-gradient(135deg, #3B1764 0%, #1E1B3C 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, hsla(270, 91%, 45%, 0.3) 0px, transparent 50%)',
        'gradient-hero': 'linear-gradient(135deg, #4C1D95 0%, #3B1764 50%, #1E1B3C 100%)',
                                                                'gradient-footer': 'linear-gradient(135deg, #4a1a75 0%, #2e1065 100%)',
        'clientes-bg': "url('/images/clientes_secao/clientes-bg.jpg')",
        'personalizacao-bg': "url('/images/personalizacao/personalizacao-bg.jpg')",
                'cta-bg': "url('/images/cta/cta-bg.jpg')",
                'exclusivas-bg': "url('/images/exclusivas/exclusiva-bg.jpg')",
                                'gradient-card-purple': 'linear-gradient(135deg, #4a1a75 0%, #2e1065 100%)',
                'gaseificadas-bg': "url('/images/gaseificadas/gas-bg.jpg')",
        'moldes-bg': "url('/images/moldes/moldes-bg.jpg')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'count-up': 'countUp 2s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    }
  },
  plugins: [],
}
