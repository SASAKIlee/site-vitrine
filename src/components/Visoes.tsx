'use client';

const personas = [
  {
    id: 'dono',
    name: 'Dono de Barbearia',
    color: 'from-gray-900 to-purple-950/40',
    description: 'Controle total do seu negócio',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    challenges: [
      'Difícil acompanhar o faturamento',
      'Comissões calculadas manualmente',
      'Não sabe quanto realmente lucra',
      'Barbeiros desorganizados',
    ],
    solutions: [
      'Dashboard mostra faturamento real em tempo real',
      'Comissões calculadas automaticamente por barbeiro',
      'Lucro líquido (receita - despesas) sempre atualizado',
      'Gestão centralizada de toda equipe',
      'Relatórios detalhados para decisões seguras',
    ],
  },
  {
    id: 'barbeiro',
    name: 'Barbeiro',
    color: 'from-gray-900 to-blue-950/40',
    description: 'Organização e ganhos claros',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    challenges: [
      'Confusão com horários e agendamentos',
      'Não sabe quanto ganhou no mês',
      'Precisa confirmar clientes manualmente',
      'Sem histórico de atendimentos',
    ],
    solutions: [
      'Agenda clara com todos os horários confirmados',
      'Vê quanto ganhou em tempo real',
      'Clientes recebem lembretes (reduz faltas)',
      'Carteira digital com histórico completo',
      'Feedback de clientes por serviço',
    ],
  },
];

export default function Visoes() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Premium */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 bg-primary/5 px-4 py-1.5 rounded-full">
            Para todos os perfis
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Uma solução para cada perfil
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Cada usuário tem funções especializadas adaptadas ao seu papel.
          </p>
        </div>

        {/* Cards Grid - 2 colunas centralizadas */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {personas.map((persona) => (
            <div
              key={persona.id}
              className="group h-full bg-white rounded-[2rem] border border-gray-100/80 overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-br ${persona.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 border border-white/10">
                    {persona.icon}
                  </div>
                  <h3 className="text-xl font-extrabold tracking-tight">{persona.name}</h3>
                  <p className="text-sm text-white/60 mt-1 font-medium">{persona.description}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-red-400 uppercase tracking-[0.15em] mb-4">Antes</h4>
                  <ul className="space-y-3">
                    {persona.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-gray-500">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-primary uppercase tracking-[0.15em] mb-4">Com a CAJ TECH</h4>
                  <ul className="space-y-3">
                    {persona.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6 text-base">
            Todos ganham com uma plataforma unificada, profissional e segura.
          </p>
          <a
            href="#planos"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl group"
          >
            Ver planos e começar agora
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}