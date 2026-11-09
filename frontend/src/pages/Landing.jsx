import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Stats from '../components/landing/Stats';
import TrustLogos from '../components/landing/TrustLogos';
import Features from '../components/landing/Features';
import Testimonials from '../components/landing/Testimonials';
import CTABanner from '../components/landing/CTABanner';
import Footer from '../components/landing/Footer';


export default function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <TrustLogos />
      <Features />
      <Testimonials />
      <CTABanner />
      <Footer />

    </div>
  );
}