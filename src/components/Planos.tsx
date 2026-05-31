const plans = [
  {
    name: 'Starter',
    price: '50',
    priceLabel: 'R$ 50/mês',
    ideal: 'Quem está saindo do WhatsApp',
    benefits: [
      'Link de agendamento',
      'Até 2 barbeiros',
      'Controle de caixa básico',
      'Suporte por e-mail',
    ],
    cta: 'Escolher Starter',
    featured: false,
    link: '#',
  },
  {
    name: 'PRO',
    price: '99',
    priceCents: ',90',
    priceLabel: 'R$ 99,90/mês',
    ideal: 'Barbearia em crescimento',
    benefits: [
      'Tudo do Starter',
      'Lembretes automáticos de WhatsApp',
      'Cálculo de comissão automático',
      'Clube de assinatura ("Netflix do corte")',
      'Barbeiros ilimitados',
      'Suporte prioritário',
    ],
    cta: 'Escolher PRO',
    featured: true,
    link: '#',
  },
  {
    name: 'Elite',
    price: '497',
    priceLabel: 'R$ 497/mês',
    ideal: 'Quem quer escala + marketing',
    benefits: [
      'Tudo do Pro',
      'Criação de identidade visual',
      'Gestão de redes sociais',
      'Tráfego pago gerenciado por especialistas',
      'Consultoria dedicada',
    ],
    cta: 'Falar com consultor',
    featured: false,
    link: '#',
  },
];

export default function Planos() {
  return (
    <section id="planos" className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[128px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Premium */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 bg-primary/5 px-4 py-1.5 rounded-full">
            Investimento
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Planos e preços
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Escolha o plano ideal para sua barbearia crescer.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[2rem] p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 ${plan.featured
                ? 'bg-gray-900 text-white shadow-2xl shadow-primary/20 border-2 border-primary/50 z-10 lg:scale-105'
                : 'bg-white text-gray-900 border border-gray-200 hover:border-primary/30 hover:shadow-2xl'
                }`}
            >
              {/* Featured Badge - Sem Emoji, Gradiente Premium */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary via-yellow-300 to-primary text-gray-900 text-xs font-extrabold px-6 py-2 rounded-full shadow-lg uppercase tracking-wider whitespace-nowrap">
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-2xl font-extrabold tracking-tight">{plan.name}</h3>

              {/* Ideal for */}
              <p className={`mt-2 text-sm font-medium ${plan.featured ? 'text-gray-400' : 'text-gray-500'}`}>
                {plan.ideal}
              </p>

              {/* Price */}
              <div className="mt-8 mb-8">
                <div className="flex items-baseline gap-1">
                  <span className={`text-lg font-bold ${plan.featured ? 'text-gray-400' : 'text-gray-500'}`}>R$</span>
                  <span className="text-6xl font-extrabold tracking-tighter">{plan.price}</span>
                  {plan.priceCents && (
                    <span className="text-2xl font-bold mt-1">{plan.priceCents}</span>
                  )}
                  <span className={`text-sm font-medium ml-1 ${plan.featured ? 'text-gray-400' : 'text-gray-500'}`}>/mês</span>
                </div>
              </div>

              {/* CTA Button - Pílula Premium */}
              <a
                href={plan.link}
                className={`w-full py-4 rounded-full font-extrabold text-center block transition-all duration-300 hover:-translate-y-1 text-base ${plan.featured
                  ? 'bg-primary hover:brightness-110 text-gray-900 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)]'
                  : 'bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl'
                  }`}
              >
                {plan.cta}
              </a>

              {/* Benefits */}
              <ul className="mt-8 space-y-4">
                {plan.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.featured ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'
                      }`}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`text-sm ${plan.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Partner note - Limpo e Elegante */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            <span className="font-bold text-gray-700">Consultor parceiro?</span>{' '}
            Ganhe 100% da instalação + 50% da recorrência.{' '}
            <a href="#" className="text-primary font-bold hover:underline">
              Saiba mais →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}