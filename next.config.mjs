/** @type {import('next').NextConfig} */

import nextra from 'nextra'

const withNextra = nextra({
    latex: true,
    defaultShowCopyCode: true,
    // contentDirBasePath: "/",
})

export default withNextra({
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    logging: {
        fetches: {
            fullUrl: true
        }
    }
})