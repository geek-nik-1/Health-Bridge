// tailwind.config.js
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        gridTemplateColumns: {
          'auto': 'repeat(auto-fill, minmax(200px, 1fr))',
        },
        colors: {
        primary: 'hsl(var(--primary) / <alpha-value>)',
      },
      },
    },
    plugins: [],
  }
  