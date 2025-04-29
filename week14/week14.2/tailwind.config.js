/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",    // Include this if you're using the /pages directory
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",      // Include this if your code is inside /src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


