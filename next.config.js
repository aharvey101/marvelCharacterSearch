/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    publicApiKey: '3b7e7da43b4daae6401b93753e269cc0',
    privateApiKey: 'cb3b1c88e5cd6263b694253d8d5b581ae911bcf5',
    marvelEndpoint: 'https://gateway.marvel.com/v1/public/characters',
  },
  images: {
    domains: ['i.annihil.us'],
  },
}

module.exports = nextConfig
