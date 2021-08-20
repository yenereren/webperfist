const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

// Generate slug field for all markdown files
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            basic: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "content/basic\/.*/" } }
            ) {
              edges {
                node {
                  id
                  excerpt
                  html
                  frontmatter {
                    title
                    path
                    template
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `,
      ).then(result => {
        result.data.basic.edges.forEach(({ node }) => {
          let component = path.resolve('src/templates/basic.js');
          if (node.frontmatter.template) {
            component = path.resolve(`src/templates/${node.frontmatter.template}.js`);
          }
          createPage({
            path: node.frontmatter.path ? node.frontmatter.path : node.fields.slug,
            component,
            context: {
              id: node.id
            }
          });
        });
        resolve();
      }),
    );
  });
};
