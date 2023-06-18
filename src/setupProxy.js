const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://skill-swap-backend.onrender.com', // Replace with your backend server URL
      changeOrigin: true,
    })
  );
};
