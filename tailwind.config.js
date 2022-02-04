module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    minHeight: {
      '30': '30rem',
    },
    extend: {
      colors: {
        primary: '#fc5757',
        secondary: '#fd7d7d',
        "primary-100": '#ffeeea',
        "gray-shadow": 'rgba(0,0,0,0.1)',
        "dark-shadow": 'rgba(0,0,0,0.5)',
        userItem: '#FFFAF9'
      },
      boxShadow: {
        '3xl': '1px 1px 18px 2px rgba(0,0,0,0.8)',
        gray: '0px 0px 4px 1px rgba(0,0,0,0.1)',
        gray_input: '0px 0px 2px 1px rgba(0,0,0,0.1)',
        gray_focus: '0px 0px 5px 3px #e5e7eb',
        pink_focus: '0px 0px 5px 3px #fbcfe8'
      }
    },
  },
  plugins: [],
}
