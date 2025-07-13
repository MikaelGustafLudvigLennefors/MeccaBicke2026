import { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Map from '../components/Map';
import Lodging from '../components/Lodging';
import RsvpForm from '../components/RsvpForm';
import History from '../components/History';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';

const Section = ({ id, children }) => (
  <motion.section
    id={id}
    className="py-16"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="max-w-4xl mx-auto px-4">{children}</div>
  </motion.section>
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rebecca &amp; Mikael | 1 Aug 2026</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      {/* 1. Hero */}
      <section
        id="start"
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="font-serif text-6xl md:text-7xl text-white mb-4">Vi gifter oss!</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-6">Rebecca &amp; Mikael<br/>1 augusti 2026</p>
        </div>
      </section>

      {/* 2. Vigsel */}
      <Section id="narvar">
        <h2 className="text-3xl font-semibold text-primary text-center mb-6">Vigsel</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img src="/vigsel.jpg" alt="Vigsel" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="space-y-4">
            <p className="font-medium">Vasa Kyrkoplan 5, 411 27 Göteborg</p>
            <p>Start kl. 14:30, 1 augusti 2026</p>
            <a href="https://goo.gl/maps/xxxxx" target="_blank" rel="noopener noreferrer" className="text-accent underline">
              Visa i Google Maps
            </a>
          </div>
        </div>
      </Section>

      {/* 3. Fest */}
      <Section id="fest">
        <h2 className="text-3xl font-semibold text-primary text-center mb-6">Fest</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <p className="font-medium">Lennart Torstenssonsgatan 4, 412 56 Göteborg</p>
            <p>Start kl. 16:00, 1 augusti 2026</p>
            <a href="https://goo.gl/maps/yyyyy" target="_blank" rel="noopener noreferrer" className="text-accent underline">
              Visa i Google Maps
            </a>
          </div>
          <div className="order-1 md:order-2">
            <img src="/fest.jpg" alt="Fest" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </Section>

      {/* 4. RSVP */}
      <Section id="rsvp">
        <h2 className="text-3xl font-semibold text-primary text-center mb-6">OSA / RSVP</h2>
        <RsvpForm />
      </Section>

      {/* 5. Historia + Galleri */}
      <Section id="history">
        <h2 className="text-3xl font-semibold text-primary text-center mb-6">Vår Historia</h2>
        <History />
        <Gallery />
      </Section>

      {/* 6. Boende */}
      <Section id="lodging">
        <h2 className="text-3xl font-semibold text-primary text-center mb-6">Boende</h2>
        <Lodging />
      </Section>

      {/* 7. FAQ */}
      <Section id="faq">
        <h2 className="text-3xl font-semibold text-primary text-center mb-6">FAQ</h2>
        <FAQ />
      </Section>
    </>
  );
};

export default Home;