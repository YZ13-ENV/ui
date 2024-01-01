import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import tailwindcss from 'tailwindcss'
import { UserConfigExport } from 'vite'
import { fileURLToPath } from 'url'

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: [
        { find: '@', replacement: fileURLToPath(new URL('../src', import.meta.url)) },
      ]
    },
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  })
}
// https://vitejs.dev/config/
export default app
