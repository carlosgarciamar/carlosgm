import { Link, graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Img from 'gatsby-image';

import s from './Header.module.css';

const Header = ({ siteTitle }) => {
    const data = useStaticQuery(
        graphql`
        query {
        mobileImage: file(relativePath: { eq: "dragon-orig.png" }) {
            childImageSharp {
            fixed(width: 110) {
                ...GatsbyImageSharpFixed
            }
            }
        }
        desktopImage: file(
            relativePath: { eq: "dragon-orig.png" }
        ) {
            childImageSharp {
            fixed(width: 1024) {
                ...GatsbyImageSharpFixed
            }
            }
        }
        tabletImage: file(
            relativePath: { eq: "dragon-orig.png" }
        ) {
            childImageSharp {
            fixed(width: 1216, quality: 100) {
                ...GatsbyImageSharpFixed
            }
            }
        }
        hdImage: file(
            relativePath: { eq: "dragon-orig.png" }
        ) {
            childImageSharp {
            fixed(width: 1408) {
                ...GatsbyImageSharpFixed
            }
            }
        }
        }
    `
    );
    const sources = [
    data.mobileImage.childImageSharp.fixed,
    { ...data.tabletImage.childImageSharp.fixed, media: `(mind-width: 769px)` },
    { ...data.desktopImage.childImageSharp.fixed, media: `(mind-width: 1024px)` },
    { ...data.hdImage.childImageSharp.fixed, media: `(mind-width: 1216px)` },
    ];
    return (
        <header>
            <div>
                <h1 className={s.titleHeader}>
                    <Link
                        to="/"
                        className={s.title}
                    >
                        Carlos<span className={s.gm}>GM</span>
                    </Link>
                </h1>
                <Img fixed={sources} className={s.dragon} />
            </div>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
