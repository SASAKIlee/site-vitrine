import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProvaSocial from '@/components/ProvaSocial';
import ComoFunciona from '@/components/ComoFunciona';
import Visoes from '@/components/Visoes';
import DemoShowcase from '@/components/DemoShowcase';
import Funcionalidades from '@/components/Funcionalidades';
import Planos from '@/components/Planos';
import ComparacaoPlanos from '@/components/ComparacaoPlanos';
import DepoimentosAvancado from '@/components/DepoimentosAvancado';
import FAQ from '@/components/FAQ';
import CTAFinal from '@/components/CTAFinal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProvaSocial />
        <ComoFunciona />
        <Visoes />
        <DemoShowcase />
        <Funcionalidades />
        <Planos />
        <ComparacaoPlanos />
        <DepoimentosAvancado />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}
