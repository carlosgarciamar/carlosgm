import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              language
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `
;

const AllPosts = ({ data }) => {
  const edges = data.allMarkdownRemark.edges.filter(({ node }) => node.frontmatter.language === process.env.GATSBY_LANGUAGE);

  return (
    <Layout>
      <SEO lang={process.env.GATSBY_LANGUAGE} />
      <ul>
      {
        edges.map(({ node }) => <li><Link to={node.fields.slug}>{node.frontmatter.title}</Link></li>)
      }
      </ul>
    </Layout>
  );
}

export default AllPosts;
