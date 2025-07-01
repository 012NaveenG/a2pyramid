import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import flowbiteReact from "flowbite-react/plugin/vite";

// 👇 Enable styled-components support
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: ['babel-plugin-styled-components'],
    },
  }), flowbiteReact()],
})