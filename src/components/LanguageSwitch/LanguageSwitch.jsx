import React, { useContext } from 'react';

import s from './LanguageSwitch.module.scss';

import { LanguageContext } from '../../templates/post';

const LanguageSwitch = () => {
    const { related, language } = useContext(LanguageContext);
    const en = language === 'en';
    const es = language === 'es';
    return (
        <div className={s.switch}>
            <a
                href={en ? '.' : `https://www.carlosgm.com${related || '/'}`}
                className={`${s.link} ${en ? s.active : ''}`}
            >
                EN
            </a>
            <span className={s.bar}>|</span>
            <a
                href={es ? '.' : `https:///www.carlosgm.es${related || '/'}`}
                className={`${s.link} ${es ? s.active : ''}`}
            >
                ES
            </a>
        </div>
    );
};

export default LanguageSwitch;
