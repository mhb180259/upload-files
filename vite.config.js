const path = require('path')

module.exports = {
  alias: {
    '@axios': path.resolve(__dirname, '/src/axios/index.js')
  },
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
}