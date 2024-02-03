import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'
import tailwindcss from 'tailwindcss'
import { UserConfigExport } from 'vite'
import { name } from './package.json'
import { fileURLToPath } from 'node:url'

const app = async (): Promise<UserConfigExport> => {
  /**
   * Removes everything before the last
   * @octocat/library-repo -> library-repo
   * vite-component-library-template -> vite-component-library-template
   */
  const formattedName = name.match(/[^/]+$/)?.[0] ?? name

  return defineConfig({
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
      }),
    ],
    resolve: {
      alias: [
        { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      ]
    },
    ssr: {
      target: 'node',
      noExternal: [ "@radix-ui/*" ]
    },
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
    build: {
      ssr: true,
      cssMinify: true,
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: formattedName,
        formats: ['es', 'umd'],
        fileName: (format) => `${formattedName}.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react/jsx-runtime', 'react-dom', 'tailwindcss', 'react-firebase-hooks'],
        output: {
          banner: '"use client";',
          globals: {
            "react-icons/bi/index.esm.js": "react-icons/bi",
            "react-icons/pi/index.esm.js": "react-icons/pi",
            "react-icons/md/index.esm.js": "react-icons/md",
            "react-icons/ti/index.esm.js": "react-icons/ti",
            "socket.io-client": "socket.io-client",
            "next/image.js": "next/image",
            "next/link.js": "next/link",
            "framer-motion": "framer-motion",
            "tailwind-merge": "tailwind-merge",
            "class-variance-authority": "class-variance-authority",
            "react-firebase-hooks/auth/dist/index.esm.js": "react-firebase-hooks/auth",
            react: 'React',
            'react/jsx-runtime': 'react/jsx-runtime',
            'react-dom': 'ReactDOM',
            tailwindcss: 'tailwindcss',
          },
        },
      },
    }
  })
}
// https://vitejs.dev/config/
export default app
