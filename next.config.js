// /** @type {import('next').NextConfig} */
// const nextConfig = {
   
//   };
  
//   export default nextConfig;
  



  
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
})

module.exports = withPWA({
  // next.js config
})
