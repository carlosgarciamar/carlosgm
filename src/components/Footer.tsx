import Image from 'next/image';
import background from '../../public/carlosgm-bg1216.png';

const Footer = () => (
  <footer
    className="relative -left-[2px]"
    style={{ width: 'calc(100% + 5px)', marginTop: '-200px' }}
  >
    <Image
      src={background}
      width="769"
      height="679"
      layout="responsive"
      alt="A drawing of Carlos holding a sword and a shield inspired on the videogame Zelda"
      priority
    />
    <div className="text-right">
      <div>
        Art by the amazing{' '}
        <a
          href="https://lewesherriot.carbonmade.com/"
          rel="noreferrer"
          target="_blank"
        >
          Lewes Herriot
        </a>
      </div>
      <div>
        Made with &hearts; using{' '}
        <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
          Next.js
        </a>
      </div>
    </div>
  </footer>
);

export { Footer };
