import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'c-black-100': 'rgb(132, 141, 151 / var(--tw-bg-opacity))',
        'c-black-200': 'rgb(42, 57, 82 / var(--tw-bg-opacity))',
        'c-black-300': 'rgb(36, 49, 71 / var(--tw-bg-opacity))',
        'c-black-400': 'rgb(31, 43, 62 / var(--tw-bg-opacity))',
        'c-black-500': 'rgb(26, 36, 52 / var(--tw-bg-opacity))',
        'c-black-600': 'rgb(21, 29, 41 / var(--tw-bg-opacity))',
        'c-black-700': 'rgb(19, 25, 35 / var(--tw-bg-opacity))',
        'c-black-800': 'rgb(16, 21, 29 / var(--tw-bg-opacity))',
        'c-black-900': 'rgb(13, 17, 23 / var(--tw-bg-opacity))',
        'c-black-1000': 'rgb(9, 12, 16 / var(--tw-bg-opacity))',
        'c-primary-300': 'rgb(11, 100, 206 / var(--tw-bg-opacity))',
        'c-primary-400': 'rgb(15, 114, 227 / var(--tw-bg-opacity))',
        'c-primary-500': 'rgb(13, 107, 216 / var(--tw-bg-opacity))',
        'c-secondary-300': 'rgb(46, 154, 64 / var(--tw-bg-opacity))',
        'c-secondary-400': 'rgb(35, 134, 54 / var(--tw-bg-opacity))',
        'c-secondary-500': 'rgb(41, 144, 59 / var(--tw-bg-opacity))',
        'c-white-100': 'rgb(255, 255, 255 / var(--tw-bg-opacity))',
        'c-white-400': 'rgb(240, 246, 252 / var(--tw-bg-opacity))',
      },
    },
  },
  plugins: [],
};
export default config;
