/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          has: [
            {
              type: "host",
              value: "maestria.carrerasjerarquicos.com",
            },
          ],
          destination: "/b",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
