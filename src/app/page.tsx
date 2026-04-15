import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProvaSocial from '@/components/ProvaSocial';
import ComoFunciona from '@/components/ComoFunciona';
import Funcionalidades from '@/components/Funcionalidades';
import Planos from '@/components/Planos';
import Depoimentos from '@/components/Depoimentos';
import FAQ from '@/components/FAQ';
import CTAFinal from '@/components/Footer';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProvaSocial />
        <ComoFunciona />
        <Funcionalidades />
        <Planos />
        <Depoimentos />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
