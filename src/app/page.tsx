// pages/index.js
import Head from 'next/head';
import Faq from './components/Faq'; // Ensure you have your FAQ component
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Ensure full height for flex column */}
      <Head>
        <title>FAQ Page</title>
        <meta name="description" content="FAQ section about Ubora" />
      </Head>

      {/* Main content area */}
      <main className="flex-grow bg-gray-50 pb-24"> {/* Added padding-bottom to prevent overlap with footer */}
        <Faq /> {/* Your FAQ component goes here */}
      </main>

      {/* Footer stays at the bottom of the content */}
      <Footer />
    </div>
  );
}