import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-b from-white via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 bg-primary/10 text-primary-dark text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Clientes · Agendamentos · Jornada
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-dark leading-tight tracking-tight">
            Sua barbearia no{' '}
            <span className="relative">
              <span className="text-primary">automático</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 8C50 2 100 2 150 6C200 10 250 4 298 8"
                  stroke="var(--primary)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up animation-delay-200 mt-6 lg:mt-8 text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Agenda inteligente, lembretes de WhatsApp e comissão automática em um só lugar.
            <span className="font-semibold text-primary-dark"> Comece grátis por 7 dias</span>, sem cartão de crédito.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up animation-delay-300 mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            {/* TODO: Substituir # pelo link real da demonstração (video, Loom, etc) */}
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              Ver demonstração
            </a>
            {/* TODO: Substituir # pelo link real de cadastro/trial */}
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-primary-dark font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 animate-pulse-gold text-lg"
            >
              Começar grátis
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="animate-fade-in-up animation-delay-400 mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Sem cartão de crédito
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Cancele quando quiser
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Setup em 2 minutos
            </span>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="animate-fade-in-up animation-delay-500 mt-12 lg:mt-16 relative">
          <div className="bg-gradient-to-br from-gray-900 to-primary-dark rounded-2xl lg:rounded-3xl p-1 shadow-2xl">
            <div className="bg-gray-100 rounded-xl lg:rounded-2xl overflow-hidden">
              {/* Placeholder do dashboard - Substituir por screenshot real */}
              <div className="relative aspect-[16/9] lg:aspect-[21/9] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 lg:w-10 lg:h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm lg:text-base">
                    Dashboard CAJ TECH — agenda, clientes e faturamento
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    {/* TODO: Substituir por screenshot real do sistema */}
                    (Insira aqui uma imagem real do dashboard)
                  </p>
                </div>

                {/* Floating phone mockup */}
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 translate-x-1/4 w-48 bg-white rounded-3xl shadow-2xl p-3 border border-gray-200">
                  <div className="aspect-[9/16] bg-gray-50 rounded-2xl flex items-center justify-center">
                    <p className="text-gray-400 text-xs text-center">Mobile<br />preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl -z-10" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
