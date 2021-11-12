import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Home from 'pageComponents/Home';
import GlobalStyle from '../globalStyles';

export default function Index() {
  return (
    <div className="container flex flex-col root">
      <Head>
        <title>bruno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyle />

      <main className="app flex flex-grow flex-col px-4">
        <Navbar />

        <Home />
      </main>

      <Footer />
    </div>
  );
};
