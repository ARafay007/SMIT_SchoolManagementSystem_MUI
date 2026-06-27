/* eslint-disable no-undef */
import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 1. Force Vite to load process.env variables along with the default env files
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  return {
    plugins: [react()],
    
    // 2. Allow Vite to pass variables starting with REACT_APP_ to the frontend
    envPrefix: 'REACT_APP_',
    
    define: {
      // 3. Expose process.env directly so Vite doesn't leave it undefined
      'process.env': process.env,
    },
  };
})
