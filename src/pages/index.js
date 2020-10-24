import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const { LANGUAGE } = process.env;

export const query = graphql`
    query MyQuery {
      allMarkdownRemark(filter: {frontmatter: {categories: {in: "welcome"}}}) {
        edges {
          node {
            id
            html
            frontmatter {
              language
            }
          }
        }
      }
    }
  `
;

const IndexPage = ({ data }) => {
  const { node } = data.allMarkdownRemark.edges.find(({ node }) => node.frontmatter.language === LANGUAGE);
  const { html } = node;

  return (
    <Layout>
      <SEO title="Home" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export default IndexPage;
