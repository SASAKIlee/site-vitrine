const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: 'Agenda inteligente',
    description: 'Visão diária e semanal com sincronização em tempo real. Controle blindado contra fusos horários.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.642 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
    title: 'Lembretes WhatsApp',
    description: 'Reduza em até 40% as faltas com lembretes enviados aos clientes antes do horário automaticamente.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Comissão automática',
    description: 'Cálculo inteligente por barbeiro, por serviço e por período. Zero erros manuais, total transparência.',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.56a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L4.34 4.34" />
      </svg>
    ),
    title: 'Link de agendamento',
    description: 'Clientes marcam sozinhos pelo link 24/7. Compartilhe no WhatsApp ou Instagram sem responder mensagens.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Relatórios de caixa',
    description: 'Visualize faturamento do dia, do mês, lucro real líquido e despesas operacionais de um relance.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'Clube de assinatura',
    description: 'Crie planos recorrentes para seus clientes. Fidelize, tenha previsibilidade e faturamento automático.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fila de espera inteligente',
    description: 'Gerencie a fila em tempo real. Saiba quantos clientes esperam, por quanto tempo e otimize o fluxo.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 3v2.25M17.25 21v2.25m-15-2.25V5.25m0 19.5V3m6 2.25v17.25m6-17.25v17.25" />
      </svg>
    ),
    title: 'Gestão de despesas',
    description: 'Registre saídas operacionais e calcule lucro real descontando todas as despesas. Saiba seu ganho exato.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.125 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9 15.75h.008v.008H9v-.008z" />
      </svg>
    ),
    title: 'PDV (Lojinha)',
    description: 'Venda produtos adicionais na barbearia. Integre com o agendamento e gere receita extra facilmente.',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'Carteira do barbeiro',
    description: 'Barbeiro acompanha quanto faturou, histórico de cortes e comissões acumuladas em tempo real.',
    color: 'bg-teal-50 text-teal-600',
  },
];

export default function Funcionalidades() {
  return (
    <section id="funcionalidades" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[128px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Premium */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 bg-primary/5 px-4 py-1.5 rounded-full">
            Recursos completos
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Funcionalidades principais
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Tudo que você precisa para profissionalizar sua barbearia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-[1.5rem] p-6 border border-gray-100/80 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative"
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}