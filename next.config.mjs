/** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: { esmExternals: true },
// };

// export default nextConfig;

import removeImports from "next-remove-imports";
const nextConfig = removeImports({
  experimental: { esmExternals: true },
});

export default nextConfig;
