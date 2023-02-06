module.exports = {
  env: {
    API_HOST: "https://api.themoviedb.org/3",
    API_KEY: "cf6b012a8f4aa1d8f965f77016661aca",
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};
