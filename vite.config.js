import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
};
