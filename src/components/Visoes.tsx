'use client';

import { Crown, Scissors, TrendingUp } from 'lucide-react';

const personas = [
  {
    id: 'dono',
    name: 'Dono de Barbearia',
    icon: <Crown className="w-8 h-8" />,
    color: 'from-purple-500 to-purple-600',
    accentColor: 'bg-purple-100 text-purple-700',
    description: 'Controle total do seu negócio',
    challenges: [
      'Difícil acompanhar o faturamento',
      'Comissões calculadas manualmente',
      'Não sabe quanto realmente lucra',
      'Barbeiros desorganizados',
    ],
    solutions: [
      '💰 Dashboard mostra faturamento real em tempo real',
      '🤖 Comissões calculadas automaticamente por barbeiro',
      '📊 Lucro líquido (receita - despesas) sempre atualizado',
      '👥 Gestão centralizada de toda equipe',
      '📈 Relatórios detalhados para decisões seguras',
    ],
  },
  {
    id: 'barbeiro',
    name: 'Barbeiro',
    icon: <Scissors className="w-8 h-8" />,
    color: 'from-blue-500 to-blue-600',
    accentColor: 'bg-blue-100 text-blue-700',
    description: 'Organização e ganhos claros',
    challenges: [
      'Confundido com horários e agendamentos',
      'Não sabe quanto ganhou no mês',
      'Precisa confirmar clientes manualmente',
      'Sem histórico de atendimentos',
    ],
    solutions: [
      '📅 Agenda clara com todos os horários confirmados',
      '💵 Vê quanto ganhou em tempo real',
      '🔔 Clientes recebem lembretes (reduz faltas)',
      '📱 Carteira digital com histórico completo',
      '⭐ Feedback de clientes por serviço',
    ],
  },
  {
    id: 'ceo',
    name: 'CEO / Gerente',
    icon: <TrendingUp className="w-8 h-8" />,
    color: 'from-green-500 to-green-600',
    accentColor: 'bg-green-100 text-green-700',
    description: 'Estratégia baseada em dados',
    challenges: [
      'Sem visão consolidada de múltiplas unidades',
      'Dados desatualizados ou inconsistentes',
      'Impossível prever tendências',
      'Muita papelada e processos lentos',
    ],
    solutions: [
      '🏪 Visão consolidada de todas as unidades',
      '📊 Analytics em tempo real: faturamento, tendências',
      '🎯 Identifique barbeiros top e oportunidades',
      '⚡ Automação reduz custos operacionais',
      '🚀 Decisões estratégicas com dados concretos',
    ],
  },
];

export default function Visoes() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Para todos os perfis</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark tracking-tight">
            Uma solução para cada perfil
          </h2>
          <p className="mt-4 text-lg lg:text-xl text-gray-600">
            Cada usuário tem funções especializadas adaptadas ao seu papel
          </p>
        </div>

        {/* Personas Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {personas.map((persona) => (
            <div
              key={persona.id}
              className="group h-full bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${persona.color} p-6 lg:p-8 text-white`}>
                <div className="flex items-center gap-4 mb-4">
                  {persona.icon}
                  <h3 className="text-2xl font-bold">{persona.name}</h3>
                </div>
                <p className="text-sm lg:text-base text-white/90">{persona.description}</p>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                {/* Challenges */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-4">
                    ❌ Seus desafios
                  </h4>
                  <ul className="space-y-2">
                    {persona.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-red-500 font-bold">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div>
                  <h4 className="text-sm font-bold text-green-600 uppercase tracking-wider mb-4">
                    ✓ Nossas soluções
                  </h4>
                  <ul className="space-y-3">
                    {persona.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="text-green-600 font-bold flex-shrink-0">✓</span>
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
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-gray-700 mb-6 text-lg">
            Todos ganham com uma plataforma unificada, profissional e segura
          </p>
          <button className="inline-block bg-primary hover:bg-primary/90 text-primary-dark font-bold px-10 py-3.5 rounded-lg shadow-lg shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1">
            Ver planos e começar agora
          </button>
        </div>
      </div>
    </section>
  );
}
