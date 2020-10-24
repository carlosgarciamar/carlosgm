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
  let html = <div><h2>Language not defined</h2></div>;

  if (LANGUAGE) {
    const edge = data.allMarkdownRemark.edges.find(({ node }) => node.frontmatter.language === LANGUAGE);

    if (edge) {
      html = edge.node.html;
    } else {
      html = <div><h2>Content not found</h2></div>;
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export default IndexPage;
