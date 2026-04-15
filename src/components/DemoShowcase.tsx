'use client';

import { useState } from 'react';
import { BarChart3, Users, Clock, TrendingUp } from 'lucide-react';

const demoViews = [
  {
    id: 'dono',
    name: 'Visão do Dono',
    icon: <BarChart3 className="w-5 h-5" />,
    description: 'Dashboard completo com faturamento, gestão de equipe e despesas',
    metrics: [
      { label: 'Faturamento hoje', value: 'R$ 1.240', color: 'text-green-600' },
      { label: 'Lucro real', value: 'R$ 890', color: 'text-blue-600' },
      { label: 'Barbeiros ativos', value: '4', color: 'text-purple-600' },
      { label: 'Comissões a pagar', value: 'R$ 350', color: 'text-orange-600' },
    ],
    features: [
      '📊 Gráficos de faturamento em tempo real',
      '💰 Lucro líquido (receita - despesas)',
      '👥 Gestão de barbeiros e comissões',
      '📝 Histórico de transações detalhado',
      '🎯 Planos e upgrades disponíveis',
    ],
  },
  {
    id: 'barbeiro',
    name: 'Visão do Barbeiro',
    icon: <Users className="w-5 h-5" />,
    description: 'Carteira digital com agenda e acompanhamento de comissões',
    metrics: [
      { label: 'Agendamentos hoje', value: '8', color: 'text-blue-600' },
      { label: 'Comissão acumulada (mês)', value: 'R$ 2.840', color: 'text-green-600' },
      { label: 'Próximo corte em', value: '45 min', color: 'text-purple-600' },
      { label: 'Taxa de satisfação', value: '4.8★', color: 'text-yellow-600' },
    ],
    features: [
      '📅 Agenda de atendimentos do dia',
      '💵 Acompanhamento de comissões em tempo real',
      '👤 Perfil com foto e informações',
      '📞 Contato rápido com clientes',
      '⭐ Feedback de clientes por serviço',
    ],
  },
  {
    id: 'agendamento',
    name: 'Link de Agendamento Público',
    icon: <Clock className="w-5 h-5" />,
    description: 'Interface que seus clientes usam para marcar horários',
    metrics: [
      { label: 'Horários disponíveis', value: '24+', color: 'text-green-600' },
      { label: 'Barbeiros', value: '4', color: 'text-purple-600' },
      { label: 'Tempo de marcação', value: '< 1 min', color: 'text-blue-600' },
      { label: 'Sem redirecionamentos', value: '✓', color: 'text-green-600' },
    ],
    features: [
      '🎯 Interface intuitiva e responsiva',
      '📱 Funciona em qualquer celular',
      '🔗 Compartilhável via WhatsApp, Instagram, email',
      '✅ Confirmação automática de agendamento',
      '🔔 Cliente recebe lembretes antes do horário',
    ],
  },
  {
    id: 'relatorios',
    name: 'Relatórios & Analytics',
    icon: <TrendingUp className="w-5 h-5" />,
    description: 'Dados e análises para melhorar seu negócio',
    metrics: [
      { label: 'Serviço mais popular', value: 'Corte Clássico', color: 'text-purple-600' },
      { label: 'Taxa de conclusão', value: '97%', color: 'text-green-600' },
      { label: 'Faturamento mensal', value: 'R$ 18.520', color: 'text-blue-600' },
      { label: 'Crescimento vs mês anterior', value: '+23%', color: 'text-green-600' },
    ],
    features: [
      '📈 Gráficos de faturamento e tendências',
      '👥 Dados de clientes e frequência',
      '💳 Histórico de pagamentos e comissões',
      '🎯 Indicadores de performance por barbeiro',
      '📊 Exportar relatórios em PDF',
    ],
  },
];

export default function DemoShowcase() {
  const [selectedDemo, setSelectedDemo] = useState(0);
  const demo = demoViews[selectedDemo];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Veja como funciona</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark tracking-tight">
            O sistema em ação
          </h2>
          <p className="mt-4 text-lg lg:text-xl text-gray-600">
            Explore as diferentes visões do sistema conforme seu perfil
          </p>
        </div>

        {/* Demo Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 lg:mb-14">
          {demoViews.map((view, index) => (
            <button
              key={view.id}
              onClick={() => setSelectedDemo(index)}
              className={`flex items-center gap-2 px-4 lg:px-6 py-2.5 lg:py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedDemo === index
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {view.icon}
              <span className="hidden sm:inline text-sm lg:text-base">{view.name}</span>
              <span className="sm:hidden text-xs">{view.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-primary-dark text-white p-6 lg:p-8">
            <h3 className="text-xl lg:text-2xl font-bold mb-2">{demo.name}</h3>
            <p className="text-gray-300">{demo.description}</p>
          </div>

          {/* Metrics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 lg:p-8 border-b border-gray-200">
            {demo.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-rm text-gray-600 mb-2">{metric.label}</p>
                <p className={`text-2xl lg:text-3xl font-bold ${metric.color}`}>
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          {/* Features List */}
          <div className="p-6 lg:p-8">
            <h4 className="text-lg font-bold text-primary-dark mb-5">Principais recursos:</h4>
            <ul className="grid sm:grid-cols-2 gap-4">
              {demo.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 lg:mt-14 text-center">
          <p className="text-gray-600 mb-5">Pronto para transformar sua barbearia?</p>
          <button className="inline-block bg-primary hover:bg-primary/90 text-primary-dark font-bold px-10 py-3.5 rounded-lg shadow-lg shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1">
            Começar teste grátis de 7 dias
          </button>
        </div>
      </div>
    </section>
  );
}
