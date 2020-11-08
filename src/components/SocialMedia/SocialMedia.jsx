import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithubSquare,
    faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

import s from './SocialMedia.module.scss';

const SocialMedia = ({ withTitle }) => (
    <div className={`columns is-mobile is-centered ${s.socialMedia}`}>
        <div className="column">
            <a href="https://www.linkedin.com/in/carlosgarciam/">
                <div className={s.icon}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
                {withTitle && <div>LinkedIn</div>}
            </a>
        </div>
        <div className="column">
            <a href="https://github.com/">
                <div className={s.icon}>
                    <FontAwesomeIcon icon={faGithubSquare} />
                </div>
                {withTitle && <div>GitHub</div>}
            </a>
        </div>
        <div className="column">
            <a href="https://twitter.com/Kartalon">
                <div className={s.icon}>
                    <FontAwesomeIcon icon={faTwitterSquare} />
                </div>
                {withTitle && <div>Twitter</div>}
            </a>
        </div>
    </div>
);

export default SocialMedia;
