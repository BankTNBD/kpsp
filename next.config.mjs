/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "kpsp.ac.th",
                search: "",
            },
            {
                protocol: "http",
                hostname: "*.kpsp.ac.th",
                search: "",
            }
        ]
    }
};

export default nextConfig;
