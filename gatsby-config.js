module.exports = {
  siteMetadata: {
    title: `Gatsby Starter i18next`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locales`,
        path: `${__dirname}/src/locales/`
      }
    },
    {
      resolve: "gatsby-plugin-copy-files",
      options: {
        source: `${__dirname}/src/locales`,
        destination: "/locales"
      }
    }
  ]
};
