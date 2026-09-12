/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the whole site compiles to plain HTML/CSS/JS in out/.
  // Deployed to Cloudflare Pages as assets — NOT via OpenNext/Workers.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
