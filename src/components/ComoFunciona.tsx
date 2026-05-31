const steps = [
  {
    step: 1,
    title: 'Cadastre sua barbearia em 2 minutos',
    description: 'Crie sua conta gratuita sem burocracia e sem cartão de crédito. Configure o nome, horários, barbeiros e serviços.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
      </svg>
    ),
  },
  {
    step: 2,
    title: 'Convide sua equipe e gere seu link',
    description: 'Adicione barbeiros com foto e comissão personalizada. Gere um link para seus clientes marcarem sozinhos 24/7, direto pelo WhatsApp.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: 'Sistema cuida do resto: automação total',
    description: 'Lembretes automáticos via WhatsApp, cálculo de comissões em tempo real, dashboard financeiro e relatórios. Você gerencia, o sistema executa.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.642 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
      </svg>
    ),
  },
];

export default function ComoFunciona() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 bg-primary/5 px-4 py-1.5 rounded-full">
            Simples e rápido
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Como funciona?
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Em apenas 3 passos, transforme a gestão da sua barbearia e encante seus clientes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 relative">

          {/* Connector line (desktop only) - Tracejado elegante */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] border-t-2 border-dashed border-gray-200" aria-hidden="true" />

          {steps.map((step) => (
            <div
              key={step.step}
              className="relative text-center group bg-white border border-gray-100 rounded-[2rem] p-8 pt-14 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >

              {/* Floating Icon Badge */}
              <div className="relative z-10 w-20 h-20 mx-auto -mt-16 mb-6 bg-gradient-to-br from-primary to-primary-dark text-white rounded-3xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-all duration-300 rotate-0 group-hover:rotate-3">
                {step.icon}

                {/* Mini step number badge */}
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-white text-primary font-extrabold text-xs rounded-full border-2 border-primary flex items-center justify-center shadow-sm">
                  {step.step}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed max-w-xs mx-auto text-[15px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20 group"
          >
            Começar agora é grátis
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}