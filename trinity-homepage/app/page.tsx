import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Benefits from '@/components/sections/Benefits';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}