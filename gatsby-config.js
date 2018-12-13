module.exports = {
  siteMetadata: {
    title: "Ramesh Syangtan"
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/posts/`
      }
    },
    {
      resolve: "gatsby-transformer-remark"
    }
  ]
};
