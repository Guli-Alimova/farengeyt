/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Bu Next.js 15 uchun zarur
    missingSuspenseWithCSRBailout: false,
  },
  // Agar hali ham muammo bo'lsa, bu qo'shing
  output: 'export' // yoki 'standalone' 
}

module.exports = nextConfig