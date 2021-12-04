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
      {
        find: '@avocode/octopus-schema/openapi.json',
        replacement: '@avocode/octopus-oas/dist/openapi.json',
      },
    ],
  },
})

function r(p: string) {
  return path.join(__dirname, p)
}
