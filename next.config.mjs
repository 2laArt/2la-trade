/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.crypto.com',
        pathname: '**',
      },
    ],
  },
  serverRuntimeConfig: {
    cryptoApiUrl: process.env.NEXT_PUBLIC_CRYPTO_COM_URL,
  },
  publicRuntimeConfig: {
    cryptoApiUrl: process.env.NEXT_PUBLIC_CRYPTO_COM_URL,
  },
}

export default nextConfig
