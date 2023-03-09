import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'src/pages/docs/layouts', replacement: r('./src/layouts') },
      { find: 'next', replacement: r('./src/next') },
      { find: 'modules', replacement: r('./src/layouts') },
    ],
  },
})

function r(p: string) {
  return path.join(__dirname, p)
}
