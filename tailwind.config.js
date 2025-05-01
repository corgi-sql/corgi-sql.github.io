import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)"],
      mono: ["var(--font-mono)"],
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              50: '#e8fcf9',
              100: '#ccf9f2',
              200: '#99f3e5',
              300: '#66edd8',
              400: '#33e7cb',
              500: '#89eedc',
              600: '#28c3a7',
              700: '#1e927e',
              800: '#146256',
              900: '#0a312b',
              foreground: '#000',
              DEFAULT: '#B31B1B',
            },
            secondary: {
              50: '#fdeaf5',
              100: '#fbd3eb',
              200: '#f7a6d7',
              300: '#f378c3',
              400: '#ef4aaf',
              500: '#c138a8',
              600: '#992d86',
              700: '#702164',
              800: '#481542',
              900: '#200a21',
              foreground: '#fff',
              DEFAULT: '#c138a8',
            },
          },
        },
        dark: {
          colors: {
            primary: {
              50: '#0a312b',
              100: '#146256',
              200: '#1e927e',
              300: '#28c3a7',
              400: '#36cbba',
              500: '#66edd8',
              600: '#99f3e5',
              700: '#ccf9f2',
              800: '#e8fcf9',
              900: '#f0fefc',
              foreground: '#fff',
              DEFAULT: '#B31B1B',
            },
            secondary: {
              50: '#200a21',
              100: '#481542',
              200: '#702164',
              300: '#992d86',
              400: '#c138a8',
              500: '#ef4aaf',
              600: '#f378c3',
              700: '#f7a6d7',
              800: '#fbd3eb',
              900: '#fdeaf5',
              foreground: '#000',
              DEFAULT: '#eb87db',
            },
          },
        },
      },
    }),
  ],
};