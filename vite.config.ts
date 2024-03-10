import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from 'tailwindcss'
import { UserConfigExport } from 'vite'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vitest/config'
import { name } from './package.json'

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
      alias: [{ find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }],
    },
    ssr: {
      target: 'node',
      noExternal: ['@radix-ui/*'],
    },
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
    build: {
      minify: 'esbuild',
      ssr: true,
      // cssMinify: true,
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
            'react-icons/bi/index.esm.js': 'react-icons/bi',
            'react-icons/pi/index.esm.js': 'react-icons/pi',
            'react-icons/md/index.esm.js': 'react-icons/md',
            'react-icons/ti/index.esm.js': 'react-icons/ti',
            'socket.io-client': 'socket.io-client',
            'next/image.js': 'next/image',
            'next/navigation.js': 'next/navigation',
            'next/dynamic.js': 'next/dynamic',
            'next/web-vitals.js': 'next/web-vitals',
            'next/link.js': 'next/link',
            'react-responsive': 'react-responsive',
            '@mdxeditor/editor': '@mdxeditor/editor',
            'framer-motion': 'framer-motion',
            'tailwind-merge': 'tailwind-merge',
            'class-variance-authority': 'class-variance-authority',
            'react-firebase-hooks/auth/dist/index.esm.js': 'react-firebase-hooks/auth',
            react: 'React',
            'react/jsx-runtime': 'react/jsx-runtime',
            'react-dom': 'ReactDOM',
            tailwindcss: 'tailwindcss',
          },
        },
      },
    },
  })
}
// https://vitejs.dev/config/
export default app
