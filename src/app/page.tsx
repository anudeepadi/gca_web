import Hero from '../components/Hero';
import About from '../components/About';
import Activities from '../components/Activities';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Activities />
      <Contact />
      <Footer />
    </main>
  );
}