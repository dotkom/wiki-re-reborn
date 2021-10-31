/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
  },
};
