import { Header } from '../components/Header';
import { Footer } from 'components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container pt-6">
      <Header />
      <div className="border-black-top border-x-8 pb-60 px-8">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
