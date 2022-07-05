const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
      createProxyMiddleware('/auth', {
          target: 'http://bestinwoo.hopto.org:8080/',
          changeOrigin: true
      })
  )
  app.use(
    createProxyMiddleware('/user', {
        target: 'http://bestinwoo.hopto.org:8080/auth/',
        changeOrigin: true
    })
)
};