import React from 'react';
import PropTypes from 'prop-types';

import s from './LanguageSwitch.module.scss';

const LanguageSwitch = ({ en, es }) => (
    <div className={s.switch}>
        <a
            href={en ? "/" : "http://wwww.carlosgm.com"}
            className={`${s.link} ${en ? s.active : ''}`}
        >EN</a>
        <span className={s.bar}>{'|'}</span>
        <a
            href={es ? "/" : "http:///www.carlosgm.es"}
            className={`${s.link} ${es ? s.active : ''}`}
        >ES</a>
    </div>
);

LanguageSwitch.propTypes = {
    en: PropTypes.bool,
    es: PropTypes.bool
};

export default LanguageSwitch;