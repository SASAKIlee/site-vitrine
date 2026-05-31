'use client';

export default function ComparacaoPlanos() {
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
        { name: 'Clube de assinatura (Netflix do corte)', starter: false, pro: true, elite: true },
        { name: 'Fila de espera inteligente', starter: false, pro: false, elite: true },
        { name: 'PDV Lojinha integrada', starter: false, pro: false, elite: true },
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
  ];

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  const DashIcon = () => (
    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mx-auto" />
  );

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 bg-primary/5 px-4 py-1.5 rounded-full">
            Comparação Detalhada
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Qual plano é ideal para você?
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Compare todos os recursos e escolha o melhor para o seu negócio crescer.
          </p>
        </div>

        {/* Table Container - Premium Card Style */}
        <div className="overflow-x-auto rounded-[2rem] border border-gray-100 shadow-lg bg-white">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-6 px-6 text-sm font-bold text-gray-400 uppercase tracking-widest">
                  Funcionalidade
                </th>
                <th className="text-center py-6 px-4 w-[160px]">
                  <div className="text-lg font-bold text-gray-800">Starter</div>
                  <div className="mt-1 inline-block bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">
                    R$ 50/mês
                  </div>
                </th>
                <th className="text-center py-6 px-4 w-[160px] bg-primary/[0.03] relative">
                  {/* Badge Mais Popular */}
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary text-primary-dark text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md shadow-primary/20">
                      Mais Popular
                    </span>
                  </div>
                  <div className="text-lg font-extrabold text-primary">PRO</div>
                  <div className="mt-1 inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                    R$ 99,90/mês
                  </div>
                </th>
                <th className="text-center py-6 px-4 w-[160px]">
                  <div className="text-lg font-bold text-gray-800">Elite</div>
                  <div className="mt-1 inline-block bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">
                    R$ 497/mês
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {featureComparison.map((category, categoryIndex) => (
                <>
                  {/* Category Header */}
                  <tr key={`cat-${categoryIndex}`} className="bg-gray-50/80">
                    <td colSpan={4} className="py-4 px-6 text-xs font-extrabold text-gray-400 uppercase tracking-[0.15em]">
                      {category.category}
                    </td>
                  </tr>
                  {/* Feature Rows */}
                  {category.features.map((feature, featureIndex) => (
                    <tr
                      key={`feat-${categoryIndex}-${featureIndex}`}
                      className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-4 px-6 text-gray-700 font-medium text-sm">
                        {feature.name}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {feature.starter ? <CheckIcon /> : <DashIcon />}
                      </td>
                      <td className="py-4 px-4 text-center bg-primary/[0.03]">
                        {feature.pro ? <CheckIcon /> : <DashIcon />}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {feature.elite ? <CheckIcon /> : <DashIcon />}
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-8 text-base">
            Todos os planos incluem <span className="font-bold text-gray-700">teste grátis de 7 dias</span>, sem cartão de crédito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#planos"
              className="inline-flex items-center justify-center bg-primary hover:brightness-110 text-primary-dark font-bold px-8 py-4 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              Ver Planos Detalhados
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              Falar com especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}