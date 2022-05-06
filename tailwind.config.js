const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        italian: "url('/images/menu/pizza-1.png')",
        greek: "url('/images/menu/pizza-2.png')",
        caucasian: "url('/images/menu/pizza-3.jpg')",
        american: "url('/images/menu/pizza-4.jpg')",
        tomato: "url('/images/menu/pizza-5.jpg')",
        margherita: "url('/images/menu/pizza-6.jpg')",
        chef: "url('/images/chef.jpg')",
        wooden: "url('/images/wooden.jpg')",
        food: "url('/images/food.png')",
        food2: "url('/images/food2.png')",
        menu: "url('/images/menu.png')",
        menu2: "url('/images/menu2.png')",
        wall: "url('/images/wall.jpg')",
      },
      colors: {},
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
