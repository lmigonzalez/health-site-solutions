import createMDX from "@next/mdx";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net"],
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};
const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
