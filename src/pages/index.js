import React from 'react';
import { graphql } from 'gatsby';

import SocialMedia from '../components/SocialMedia';
import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql`
    query MyQuery {
        allMarkdownRemark(
            filter: { frontmatter: { categories: { in: "welcome" } } }
        ) {
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
`;

const IndexPage = ({ data }) => {
    let html = `<div><h2>Language not defined</h2></div><div>${process.env.NODE_ENV}</div><div>${process.env.GATSBY_LANGUAGE}</div>`;

    const edge = data.allMarkdownRemark.edges.find(
        ({ node }) => node.frontmatter.language === process.env.GATSBY_LANGUAGE
    );

    const content =
        process.env.GATSBY_LANGUAGE === 'es'
            ? {
                  socialMedia: 'Redes sociales',
                  last: 'Ultimos posts',
              }
            : {
                  socialMedia: 'Find me on...',
                  last: 'Last entries',
              };

    if (edge) {
        html = edge.node.html;
    } else {
        html = '<div><h2>Content not found</h2></div>';
    }

    return (
        <Layout>
            <SEO lang={process.env.GATSBY_LANGUAGE} />
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <h2>{content.socialMedia}</h2>
            <SocialMedia withTitle />
        </Layout>
    );
};

export default IndexPage;
