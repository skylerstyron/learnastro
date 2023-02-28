/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#d6e0ff",
        foreground: "#000333",
        neutral: {
          50: "#f8faff",
          100: "#f1f4ff",
          200: "#dce6ff",
          300: "#c3d4fc",
          400: "#91a2cc",
          500: "#60729c",
          600: "#40527d",
          700: "#2c3e6a",
          800: "#122450",
          900: "#041340",
        },
        font: {
          DEFAULT: "#4d1ff4",
          50: "#f2f4ff",
          100: "#e7eaff",
          200: "#d2d8ff",
          300: "#b1b9ff",
          400: "#8b92ff",
          500: "#6865ff",
          600: "#5940ff",
          700: "#4d1ff4",
          800: "#4027c6",
          900: "#36289d",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};

/**
 * TO USE:
 *
 * <body class="bg-background text-foreground dark:bg-foreground dark:text-background"></div>
 */
