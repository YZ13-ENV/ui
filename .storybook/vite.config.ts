import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import { fileURLToPath } from 'url'
import { UserConfigExport } from 'vite'
import { defineConfig } from 'vitest/config'

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    define: {
      'process.env': {},
    },
    plugins: [react()],
    resolve: {
      alias: [{ find: '@', replacement: fileURLToPath(new URL('../src', import.meta.url)) }],
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
