/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "tailwindui.com",
        "res.cloudinary.com"
      ]
    }
  }

  const dns = require("dns");

dns.setDefaultResultOrder("ipv4first")
  
  module.exports = nextConfig