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
    // TODO: Substituir # pelo link real de checkout/assinatura do plano Starter
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
    // TODO: Substituir # pelo link real de checkout/assinatura do plano PRO
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
    // TODO: Substituir # pelo link real de contato/Calendly para plano Elite
    link: '#',
  },
];

export default function Planos() {
  return (
    <section id="planos" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Investimento</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark tracking-tight">
            Planos e preços
          </h2>
          <p className="mt-4 text-lg lg:text-xl text-gray-600">
            Escolha o plano ideal para sua barbearia
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? 'bg-primary-dark text-white shadow-2xl border-2 border-primary scale-105 z-10'
                  : 'bg-white text-primary-dark border border-gray-200 hover:border-primary/30 hover:shadow-lg'
              }`}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-dark text-sm font-bold px-6 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                    ⭐ MAIS POPULAR
                  </span>
                </div>
              )}

              <div className="p-6 lg:p-8">
                {/* Plan name */}
                <h3 className="text-2xl font-extrabold">{plan.name}</h3>

                {/* Ideal for */}
                <p className={`mt-1 text-sm ${plan.featured ? 'text-gray-300' : 'text-gray-500'}`}>
                  {plan.ideal}
                </p>

                {/* Price */}
                <div className="mt-6 mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg">R$</span>
                    <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                    {plan.priceCents && (
                      <span className="text-2xl font-bold">{plan.priceCents}</span>
                    )}
                    <span className={`text-sm ${plan.featured ? 'text-gray-400' : 'text-gray-500'}`}>/mês</span>
                  </div>
                </div>

                {/* CTA Button */}
                {/* TODO: Substituir href pelo link real de checkout */}
                <a
                  href={plan.link}
                  className={`w-full py-3.5 rounded-xl font-bold text-center block transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${
                    plan.featured
                      ? 'bg-primary text-primary-dark hover:bg-primary-hover'
                      : 'bg-primary-dark text-white hover:bg-primary-dark-hover'
                  }`}
                >
                  {plan.cta}
                </a>

                {/* Benefits */}
                <ul className="mt-8 space-y-3">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          plan.featured ? 'text-primary' : 'text-green-500'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={`text-sm ${plan.featured ? 'text-gray-200' : 'text-gray-600'}`}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Partner note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-6 py-4">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-primary-dark">Consultor parceiro?</span>{' '}
              Ganhe 100% da instalação + 50% da recorrência.{' '}
              {/* TODO: Substituir # pelo link real de programa de parceiros */}
              <a href="#" className="text-primary font-semibold hover:underline">
                Saiba mais →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
