import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const base = loadEnv(mode, '.', '').VITE_BASE_PATH?.trim() || '/'
  if (!base.startsWith('/') || !base.endsWith('/') || base.includes('..')) {
    throw new Error('VITE_BASE_PATH must be an absolute path ending in "/", such as "/dualrail/".')
  }

  return {
    base,
    plugins: [react()],
  }
})
