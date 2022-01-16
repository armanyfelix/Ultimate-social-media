
// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
 const nextConfig = {
  /* config options here */
}


module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    config.module['noParse'] = /gun\.js$/;
    // config.node['fs'] = 'empty';
    return config
  },
}
