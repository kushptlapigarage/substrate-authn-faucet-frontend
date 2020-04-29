require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'Centrifuge',
    siteUrl: process.env.URL || 'http://localhost:8000',
    longTitle: 'Centrifuge - The Operating System for the Financial Supply Chain',
    description: 'Centrifuge is an open, decentralized operating system to connect the global financial supply chain. It allows any business to transact on a global network while maintaining ownership of their data, including their validated company details, their reputation, business relationships, and subsequent transactions.',
    author: '@centrifuge'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://centrifuge.us17.list-manage.com/subscribe/post?u=27084e1d9e6f92398b5c7ce91&amp;id=e00b1ece80'
      }
    },
  ],
};
