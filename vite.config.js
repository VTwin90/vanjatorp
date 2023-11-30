// vite.config.js
const react = require('@vitejs/plugin-react');

// https://vitejs.dev/config/
module.exports = {
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
};
