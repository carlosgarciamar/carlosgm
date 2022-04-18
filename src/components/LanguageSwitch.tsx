import { useRouter } from 'next/router';
import Link from 'next/link';

const LanguageSwitch = () => {
  const { locale } = useRouter();

  const enLocale = 'en-GB';
  const esLocale = 'es-ES';

  return (
    <div className="inline-block pt-5">
      <Link href="/" locale={enLocale}>
        <a
          className={`no-decoration ${
            locale === enLocale ? 'font-extrabold' : 'font-normal'
          }`}
        >
          EN
        </a>
      </Link>
      <span className="px-2">|</span>
      <Link href="/" locale={esLocale}>
        <a
          className={`no-decoration ${
            locale === esLocale ? 'font-extrabold' : 'font-normal'
          }`}
        >
          ES
        </a>
      </Link>
    </div>
  );
};

export { LanguageSwitch };
