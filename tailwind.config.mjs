/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif']
      },
      colors: {
        ink: '#14213d',
        field: '#f6f8f4',
        leaf: '#2f6f4e',
        mineral: '#54707e',
        harvest: '#c6842e',
        line: '#dfe6dc'
      },
      boxShadow: {
        soft: '0 18px 50px rgba(20, 33, 61, 0.10)'
      }
    }
  },
  plugins: []
};
