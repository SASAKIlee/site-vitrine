const steps = [
  {
    step: 1,
    title: 'Cadastre sua barbearia em 2 minutos',
    description: 'Crie sua conta gratuita sem burocracia, sem cartão de crédito. Configure os dados básicos: nome, endereço, horário de funcionamento, barbeiros e serviços.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
      </svg>
    ),
  },
  {
    step: 2,
    title: 'Convide sua equipe e gere seu link de agendamento',
    description: 'Adicione barbeiros facilmente com foto e comissão personalizada. Gere um link público para seus clientes marcarem sozinhos 24/7, direto pelo WhatsApp ou seu site.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: 'Sistema cuida do resto: automação total e relatórios',
    description: 'Lembretes automáticos via WhatsApp (reduz 40% das faltas), cálculo de comissões em tempo real, dashboard com faturamento, e relatórios financeiros. Você gerencia, o sistema executa.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.642 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
      </svg>
    ),
  },
];

export default function ComoFunciona() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Simples e rápido</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark tracking-tight">
            Como funciona
          </h2>
          <p className="mt-4 text-lg lg:text-xl text-gray-600">
            Em 3 passos simples, transforme sua barbearia
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0" aria-hidden="true" />

          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative text-center group"
            >
              {/* Step number badge */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-primary text-primary-dark rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                {step.step}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-4 bg-gray-50 group-hover:bg-primary/10 rounded-xl flex items-center justify-center text-gray-500 group-hover:text-primary transition-all duration-300">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary-dark mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          {/* TODO: Substituir # pelo link real de cadastro */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors group"
          >
            Começar agora é grátis
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
