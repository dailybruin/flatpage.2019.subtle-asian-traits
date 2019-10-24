const siteName = 'Subtle Asian Traits | Daily Bruin';
const description = 'The Facebook group Subtle Asian Traits amasses thousands of memes and posts about Asian culture, providing a hub for its 1.5 million members to relate over a shared identity.';
const image = 'https://assets.dailybruin.com/images/flatpage.2019.subtle-asian-traits/illo-5bd9c2eb93f6d5f92a6dbf296ebcfc6c.jpg';
const year = '2019';

const url = `https://features.dailybruin.com/${year}/subtle-asian-traits`;

module.exports = {
  siteMetadata: {
    siteName,
    description,
    url,
    image,
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: '@dailybruin/gatsby-source-kerckhoff',
      options: {
        slug: 'flatpage.2019.subtle-asian-traits',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-28181852-23',
        head: false,
        anonymize: true,
      },
    }
  ],
}
