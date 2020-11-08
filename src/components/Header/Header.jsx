import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';

import s from './Header.module.scss';

import LanguageSwitch from '../LanguageSwitch';

const Header = () => {
    const data = useStaticQuery(
        graphql`
            query {
                mobileImage: file(relativePath: { eq: "dragon-orig.png" }) {
                    childImageSharp {
                        fixed(width: 98) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                tabletImage: file(relativePath: { eq: "dragon-orig.png" }) {
                    childImageSharp {
                        fixed(width: 220) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    );
    const sources = [
        data.mobileImage.childImageSharp.fixed,
        {
            ...data.tabletImage.childImageSharp.fixed,
            media: `(min-width: 576px)`,
        },
    ];
    return (
        <header>
            <div className={s.header}>
                <div>
                    <h1 className={s.titleHeader}>
                        <Link to="/" className={s.title}>
                            Carlos
                            <span className={s.gm}>GM</span>
                        </Link>
                    </h1>
                    <Img fixed={sources} className={s.dragon} />
                </div>
                <LanguageSwitch />
            </div>
        </header>
    );
};

export default Header;
