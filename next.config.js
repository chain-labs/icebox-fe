/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config?.resolve?.extenstions?.push('.ts', '.tsx')
        return config
    },
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [{
            protocol: 'https',
            hostname: 'ik.imagekit.io',
            port: '',
            pathname: '/chainlabs/**',
        },],
    },
    reactStrictMode: true,
}

module.exports = nextConfig
