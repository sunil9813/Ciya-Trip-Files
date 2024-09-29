/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3DD1D5",
      },
      boxShadow: {
        s1: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        s2: "rgba(100, 100, 111, 0.1) 0px 7px 29px 0px",
        s3: "0px 7px 16px 0px rgba(9, 28, 58, 0.07)",
        s4: "0px 2px 5px 0px rgba(9, 28, 58, 0.1)",
      },
      keyframes: {
        bounceFromTop: {
          "0%": { transform: "translateY(-100%)" },
          "50%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        bounceFromTop: "bounceFromTop 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
