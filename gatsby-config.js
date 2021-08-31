const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'Web Performance İstanbul',
    url: 'https://www.webperf.ist',
    image: 'https://www.webperf.ist/images/logo/logo.svg',
    description: "Web performans üzerine odaklanmış bir topluluktur.Amacımız ulaştığımız kitlelere, web'i olabildiğince hızlı ve doğru bir şekilde ulaştırmaktır."
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'content'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid || 'UA-XXX-1',
        // Puts tracking script in the head instead of the body
        head: false
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Playfair+Display:400,700'
        ],
        display: 'swap'
      }
    }
  ]
};
