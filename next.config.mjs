/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // If you use React-DnD or Recharts, they occasionally need transpile adjustments
  transpilePackages: ['recharts', 'react-dnd'],
};

export default nextConfig;