import { Hero } from "./components/home/Hero";
import { Features } from "./components/home/Features";
import { Services } from "./components/home/Services";
import { Testimonials } from "./components/home/Testimonials";
import { CTA } from "./components/home/CTA";
import { FloatingWhatsApp } from "./components/layout/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden font-display antialiased">
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <CTA />
      <FloatingWhatsApp />
    </div>
  );
}
