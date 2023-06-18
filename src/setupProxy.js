const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://back-8c42.onrender.com', // Replace with your backend server URL
      changeOrigin: true,
    })
  );
};
