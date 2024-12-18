/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      },
      colors: {
        "primary": "#C92071",
        "secondary": "#B5B6F2",
        "tertiary": "#991956",
        "error": "#EE4266",
        "success": "#52CA76",
        "warning": "#F6AA1C",
        "dark-gray": "#1F1F1F",
        "dark-gray-2": "#474747",
        "dark-gray-3": "#666666",
        "light-gray": "#8F8F8F",
        "light-gray-2": "#CCCCCC",
        "light-gray-3": "#F5F5F5",
        bgproduto1: "#E2E3FF",
        bgproduto2: "#FFE8BC",
        bgproduto3: "#FFC0BC",
        bgproduto4: "#DEC699",
        bgproduto5: "#E8DFCF",
      }
    },
  },
  plugins: [],
}