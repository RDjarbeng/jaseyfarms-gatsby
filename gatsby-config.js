/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
/* Your site config here */
  siteMetadata:{
    title: "Jasey Farms",
    description: "Jasey Farms website",
    author: "Sterde( rdjarbeng & joshua-png)",
    keyWords: "Jasey Farms"
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      },
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'data',
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
  ],
}