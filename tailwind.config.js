/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom": "0 0 20px 7px #ffffff",
      },
    },
  },
  plugins: [],
}

