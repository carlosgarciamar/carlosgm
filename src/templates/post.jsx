import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                language
                related
            }
        }
    }
`;

const defaultLanguageContext = {
    language: 'en',
    related: null,
};

const LanguageContext = createContext(defaultLanguageContext);

const Post = ({ data }) => {
    const post = data.markdownRemark;
    const { language } = post.frontmatter;

    const related = post.frontmatter.related || null;
    return (
        <LanguageContext.Provider value={{ language, related }}>
            <Layout>
                <SEO title="Post" />
                <h2>{post.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Layout>
        </LanguageContext.Provider>
    );
};

Post.propTypes = {
    data: PropTypes.shape().isRequired,
};

export default Post;
export { LanguageContext };
