// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./lib/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         surface: {
//           DEFAULT: "#08090e",
//           50: "#0d0f16",
//           100: "#12141d",
//           200: "#1a1d2b",
//           300: "#252938",
//         },
//         accent: {
//           blue: "#3b82f6",
//           cyan: "#22d3ee",
//           violet: "#8b5cf6",
//           fuchsia: "#d946ef",
//         },
//       },
//       fontFamily: {
//         sans: ["var(--font-inter)", "system-ui", "sans-serif"],
//       },
//       animation: {
//         "gradient-shift": "gradient-shift 8s ease-in-out infinite",
//         "float": "float 6s ease-in-out infinite",
//         "float-delayed": "float 6s ease-in-out 2s infinite",
//         "pulse-glow": "pulse-glow 3s ease-in-out infinite",
//         "streak": "streak 3s linear infinite",
//         "fade-up": "fade-up 0.6s ease-out forwards",
//         "scale-in": "scale-in 0.3s ease-out forwards",
//         "shimmer": "shimmer 2s linear infinite",
//         "spin-slow": "spin 12s linear infinite",
//       },
//       keyframes: {
//         "gradient-shift": {
//           "0%, 100%": { backgroundPosition: "0% 50%" },
//           "50%": { backgroundPosition: "100% 50%" },
//         },
//         float: {
//           "0%, 100%": { transform: "translateY(0px)" },
//           "50%": { transform: "translateY(-20px)" },
//         },
//         "pulse-glow": {
//           "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
//           "50%": { opacity: "0.8", transform: "scale(1.05)" },
//         },
//         streak: {
//           "0%": { transform: "translateX(-100%) skewX(-20deg)" },
//           "100%": { transform: "translateX(300%) skewX(-20deg)" },
//         },
//         "fade-up": {
//           "0%": { opacity: "0", transform: "translateY(30px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//         "scale-in": {
//           "0%": { opacity: "0", transform: "scale(0.95)" },
//           "100%": { opacity: "1", transform: "scale(1)" },
//         },
//         shimmer: {
//           "0%": { backgroundPosition: "-200% 0" },
//           "100%": { backgroundPosition: "200% 0" },
//         },
//       },
//       backgroundSize: {
//         "300%": "300% 300%",
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;


import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#08090e",
          50: "#0d0f16",
          100: "#12141d",
          200: "#1a1d2b",
          300: "#252938",
        },
        accent: {
          blue: "#3b82f6",
          cyan: "#22d3ee",
          violet: "#8b5cf6",
          fuchsia: "#d946ef",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "streak": "streak 3s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
        "shimmer": "shimmer 2s linear infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        streak: {
          "0%": { transform: "translateX(-100%) skewX(-20deg)" },
          "100%": { transform: "translateX(300%) skewX(-20deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundSize: {
        "300%": "300% 300%",
      },
    },
  },
  plugins: [],
};

export default config;