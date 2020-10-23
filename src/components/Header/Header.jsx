import { Link, graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Img from 'gatsby-image';

import s from './Header.module.scss';

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
            tabletImage: file(
                relativePath: { eq: "dragon-orig.png" }
            ) {
                childImageSharp {
                fixed(width: 220) {
                    ...GatsbyImageSharpFixed
                }
                }
            }
            desktopImage: file(
                relativePath: { eq: "dragon-orig.png" }
            ) {
                childImageSharp {
                fixed(width: 120) {
                    ...GatsbyImageSharpFixed
                }
                }
            }
        }
    `
    );
    const sources = [
    data.mobileImage.childImageSharp.fixed,
    { ...data.tabletImage.childImageSharp.fixed, media: `(min-width: 576px)` },
    { ...data.desktopImage.childImageSharp.fixed, media: `(min-width: 769px)` },
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
