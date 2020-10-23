import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export const query = graphql`
  query {
    markdownRemark(id: {eq: "5c58cce8-f9cb-506e-baf7-88467f9c7c5c"}) {
      id
      html
    }
  }
  
`;

const IndexPage = ({ data }) => {
  const { html } = data.markdownRemark;

  return (
    <Layout>
      <SEO title="Home" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export default IndexPage;
