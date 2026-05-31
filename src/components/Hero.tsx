import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-28 lg:pt-36 pb-20 lg:pb-32 bg-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" aria-hidden="true" />

      {/* Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/8 rounded-full blur-[128px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - Glass Style */}
          <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 backdrop-blur-sm text-primary text-sm font-bold px-5 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Clientes · Agendamentos · Jornada
          </div>

          {/* Headline com Gradiente */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-900 leading-[1.05] tracking-tight">
            Sua barbearia no{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-300 to-primary">
              automático
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 lg:mt-8 text-lg sm:text-xl lg:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Agenda inteligente, lembretes de WhatsApp e comissão automática em um só lugar.
            <span className="font-bold text-gray-900"> Comece grátis por 7 dias</span>, sem cartão de crédito.
          </p>

          {/* CTAs - Pílulas Premium */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2.5 bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg"
            >
              <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              Ver demonstração
            </a>
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2.5 bg-primary hover:brightness-110 text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] text-lg"
            >
              Começar grátis
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            {['Sem cartão de crédito', 'Cancele quando quiser', 'Setup em 2 minutos'].map((text) => (
              <span key={text} className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Dashboard Preview - Mock Browser */}
        <div className="mt-16 lg:mt-20 relative">
          {/* Glow behind */}
          <div className="absolute -inset-8 bg-primary/5 rounded-[3rem] blur-[80px] pointer-events-none" aria-hidden="true" />

          <div className="relative rounded-[2rem] border border-gray-200/80 overflow-hidden shadow-2xl bg-white">
            {/* Browser Top Bar */}
            <div className="flex items-center gap-2 px-5 py-3.5 bg-gray-50 border-b border-gray-200">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 text-center text-xs text-gray-400 font-medium tracking-wider uppercase">
                app.cajtech.net.br
              </div>
            </div>

            {/* Dashboard Content Placeholder */}
            <div className="relative aspect-[16/9] lg:aspect-[21/9] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
              {/* Fake dashboard elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-8 left-8 w-48 h-8 bg-white/20 rounded-lg" />
                <div className="absolute top-8 left-64 w-32 h-8 bg-white/20 rounded-lg" />
                <div className="absolute top-24 left-8 w-40 h-24 bg-white/10 rounded-xl" />
                <div className="absolute top-24 left-56 w-40 h-24 bg-primary/20 rounded-xl" />
                <div className="absolute top-24 left-104 w-40 h-24 bg-white/10 rounded-xl" />
                <div className="absolute bottom-8 left-8 right-8 h-32 bg-white/5 rounded-xl" />
              </div>

              <div className="text-center relative z-10">
                <div className="w-20 h-20 mx-auto mb-5 bg-primary/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-primary/10">
                  <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <p className="text-white/60 text-base lg:text-lg font-medium">
                  Dashboard CAJ TECH
                </p>
                <p className="text-white/30 text-sm mt-1">
                  Agenda, clientes e faturamento em tempo real
                </p>
              </div>

              {/* Floating phone mockup */}
              <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 translate-x-12 w-52 bg-gray-900 rounded-[2rem] shadow-2xl p-2.5 border border-gray-700">
                <div className="aspect-[9/18] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[1.5rem] flex items-center justify-center overflow-hidden">
                  {/* Fake mobile elements */}
                  <div className="w-full h-full p-4 space-y-3 opacity-20">
                    <div className="w-20 h-4 bg-white rounded" />
                    <div className="w-full h-12 bg-white/30 rounded-lg" />
                    <div className="w-full h-12 bg-primary/40 rounded-lg" />
                    <div className="w-full h-12 bg-white/30 rounded-lg" />
                  </div>
                  <p className="absolute text-white/40 text-xs font-medium">Mobile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}