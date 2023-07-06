import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr() ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.jsx'),
            name: 'myapp',
        }
    }
})
