// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1e3a8a',
      },
    },
  },
};
