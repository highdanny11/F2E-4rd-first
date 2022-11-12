import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import { loadEnv } from 'vite';
// https://vitejs.dev/config/
export default({mode}) => {
  // const { VITE_DROP_CONSOLE } = loadEnv(mode,process.cwd())
  return defineConfig({
    base: './',
    plugins: [vue()],
    resolve:{
      alias:{
        '@': resolve(__dirname,'src'),
        '~bootstrap': resolve(__dirname, 'node_modules/bootstrap')
      }
    },
    server: {
      // https:mode === 'production'? true : false,
      host: true,
      port: 3000
    },
    esbuild:{
      drop: ['console'],
      // pure: JSON.parse(VITE_DROP_CONSOLE) ? ['console.log', 'debugger'] : [],
      minifyWhitespace: true,
    },
    // css: {
    //   preprocessorOptions:{
    //     scss:{
    //       additionalData: `
    //       @import "~bootstrap/scss/functions";
    //       @import "./src/assets/stylesheets/helpers/_variables.scss";
    //       `,
    //     }
    //   }
    // },
    build:{
      target: 'es2015',
      cssTarget: 'chrome80',
      outDir: 'dist',
      chunkSizeWarningLimit: 2000,
      // minify: 'terser',
      // terserOptions: {
      //   compress: {
      //     keep_infinity: true,
      //     drop_console: JSON.parse(VITE_DROP_CONSOLE),
      //   },
      // },
    },
  })
}

