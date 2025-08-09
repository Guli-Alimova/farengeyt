/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force dynamic rendering for pages using useSearchParams
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }
}

module.exports = nextConfig