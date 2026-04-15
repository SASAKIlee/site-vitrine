'use client';

const featureComparison = [
  {
    category: 'Funcionalidades Básicas',
    features: [
      { name: 'Link de agendamento', starter: true, pro: true, elite: true },
      { name: 'Agenda do barbeiro', starter: true, pro: true, elite: true },
      { name: 'Gestão de barbeiros', starter: true, pro: true, elite: true },
      { name: 'Gestão de serviços', starter: true, pro: true, elite: true },
      { name: 'Controle de caixa básico', starter: true, pro: true, elite: true },
    ],
  },
  {
    category: 'Automação & Inteligência',
    features: [
      { name: 'Lembretes automáticos WhatsApp', starter: false, pro: true, elite: true },
      { name: 'Cálculo de comissão automático', starter: false, pro: true, elite: true },
      { name: 'Clube de assinatura ("Netflix do corte")', starter: false, pro: true, elite: true },
      { name: 'Fila de espera inteligente', starter: false, pro: false, elite: true },
      { name: 'PDV (Lojinha integrada)', starter: false, pro: false, elite: true },
    ],
  },
  {
    category: 'Gestão Financeira Avançada',
    features: [
      { name: 'Relatórios de caixa em tempo real', starter: false, pro: true, elite: true },
      { name: 'Gestão de despesas', starter: false, pro: true, elite: true },
      { name: 'Lucro real (receita - despesas)', starter: false, pro: true, elite: true },
      { name: 'Dashboard CEO/Gerente', starter: false, pro: false, elite: true },
      { name: 'Múltiplas unidades centralizadas', starter: false, pro: false, elite: true },
    ],
  },
  {
    category: 'Suporte & Consultoria',
    features: [
      { name: 'Suporte por e-mail', starter: true, pro: true, elite: true },
      { name: 'Base de conhecimento', starter: true, pro: true, elite: true },
      { name: 'Suporte prioritário (chat)', starter: false, pro: true, elite: true },
      { name: 'Consultoria dedicada', starter: false, pro: false, elite: true },
      { name: 'Treinamento personalizado', starter: false, pro: false, elite: true },
    ],
  },
  {
    category: 'Branding & Marketing (Plano Elite)',
    features: [
      { name: 'Design personalizado do link', starter: false, pro: false, elite: true },
      { name: 'Criação de identidade visual', starter: false, pro: false, elite: true },
      { name: 'Gestão de redes sociais', starter: false, pro: false, elite: true },
      { name: 'Tráfego pago gerenciado', starter: false, pro: false, elite: true },
    ],
  },
];

export default function ComparacaoPlanos() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Comparação Detalhada</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark tracking-tight">
            Qual plano é ideal para você?
          </h2>
          <p className="mt-4 text-lg lg:text-xl text-gray-600">
            Compare todos os recursos e escolha o melhor para seu negócio
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-4 font-bold text-primary-dark">Funcionalidade</th>
                <th className="text-center py-4 px-4">
                  <div className="font-bold text-primary-dark">Starter</div>
                  <div className="text-sm text-gray-600">R$ 50/mês</div>
                </th>
                <th className="text-center py-4 px-4 bg-primary/10 rounded-t-lg">
                  <div className="font-bold text-primary">PRO</div>
                  <div className="text-sm text-gray-600">R$ 99,90/mês</div>
                </th>
                <th className="text-center py-4 px-4">
                  <div className="font-bold text-primary-dark">Elite</div>
                  <div className="text-sm text-gray-600">R$ 497/mês</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {featureComparison.map((category, categoryIndex) => (
                <tbody key={categoryIndex}>
                  {/* Category Header */}
                  <tr className="bg-gray-100 border-t border-gray-200">
                    <td colSpan={4} className="py-3 px-4 font-bold text-gray-700 text-sm lg:text-base">
                      {category.category}
                    </td>
                  </tr>

                  {/* Features */}
                  {category.features.map((feature, featureIndex) => (
                    <tr
                      key={featureIndex}
                      className={`border-b border-gray-200 ${
                        featureIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <td className="py-4 px-4 text-gray-700 font-medium text-sm lg:text-base">
                        {feature.name}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {feature.starter ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center bg-primary/5">
                        {feature.pro ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20">
                            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {feature.elite ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-gray-700 mb-6 text-lg">
            Todos os planos incluem teste grátis de 7 dias, sem cartão de crédito
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#planos"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-dark font-bold px-8 py-3.5 rounded-lg shadow-lg shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              Ver Planos Detalhados
            </a>
            <a
              href="#"
              className="inline-block bg-white hover:bg-gray-50 text-primary-dark border-2 border-primary font-bold px-8 py-3.5 rounded-lg transition-all duration-300 hover:-translate-y-1"
            >
              Falar com especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
