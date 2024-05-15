import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      mainBackground:'#FBFBFB',
      regalGray:'#7A7A7A',
      dark:'#161616',
      main:'#E33A6D',
      shadow:'#1616161A',
      separator:'#D1D1D1',
      deepWhite:'#eeeeee',
    },
    fontFamily: {
      sans: ['var(--font-openSans)']
    },
    extend: {
      fontSize: {
        sm: ['14px', '18px'],
      },
      spacing:{
        4.5: '18px',
        10: '40px',
        30: '120px',
        115:'460px'
      },
      screens:{
        md: '880px'
      }
    },
  },
  plugins: [],
};

export default config;
