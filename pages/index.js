import Head from '@components/Head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Main from '@components/Main';

export default function Home() {
  return (
    <div>
      <Head />
      <div className="blue-background">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
