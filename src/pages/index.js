import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export const query = graphql`
  query {
    markdownRemark(frontmatter: {categories: {eq: "welcome"}}) {
      id
      html
    }
  }
`;

const IndexPage = ({ data }) => {
  const { html } = data.markdownRemark || (
    <div>
      <h2>Welcome content not found</h2>
    </div>
  );

  return (
    <Layout>
      <SEO title="Home" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export default IndexPage;
