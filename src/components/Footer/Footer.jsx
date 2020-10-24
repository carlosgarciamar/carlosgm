import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import s from './Footer.module.css';

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "carlosgm-bg769.png" }) {
          childImageSharp {
            fluid(maxWidth: 769, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tabletImage: file(
          relativePath: { eq: "carlosgm-bg1216.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1216, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desktopImage: file(
          relativePath: { eq: "carlosgm-bg1024.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    { ...data.tabletImage.childImageSharp.fluid, media: `(min-width: 576px)` },
    { ...data.desktopImage.childImageSharp.fluid, media: `(min-width: 769px)` }
  ];
  return (
    <footer>
      <Img fluid={sources} />
      <div className={s.acknowledgments}>
        <div>Art by the amazing <a href="https://lewesherriot.carbonmade.com/" rel="noreferrer" target="_blank">Lewes Herriot</a></div>
        <div>Made with &hearts; using <a href="https://www.gatsbyjs.org" rel="noreferrer" target="_blank">Gatsby</a></div>
      </div>
    </footer>
  );
};

export default Footer;