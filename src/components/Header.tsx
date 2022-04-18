import Link from 'next/link';
import Image from 'next/image';
import dragon from '../../public/dragon-orig.png';
import { LanguageSwitch } from './LanguageSwitch';

const Header = () => (
  <header className="border-t-8 border-x-8 border-black-top px-8 pt-6 flex justify-between">
    <div>
      <Link href="/" passHref>
        <h1 className="inline-block align-top pt-4">
          Carlos<span className="text-red-gm">GM</span>
        </h1>
      </Link>
      <div className="hidden sm:inline-block">
        <Image
          src={dragon}
          alt="A red dragon looking to the left"
          width={220}
          height={80}
        />
      </div>
    </div>
    <LanguageSwitch />
  </header>
);

export { Header };
