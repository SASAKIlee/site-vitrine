'use client';

import { useState } from 'react';

const demoViews = [
  {
    id: 'dono',
    name: 'Visão do Dono',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    description: 'Dashboard completo com faturamento, gestão de equipe e despesas em tempo real.',
    metrics: [
      { label: 'Faturamento hoje', value: 'R$ 1.240', color: 'text-emerald-600' },
      { label: 'Lucro real', value: 'R$ 890', color: 'text-blue-600' },
      { label: 'Barbeiros ativos', value: '4', color: 'text-purple-600' },
      { label: 'Comissões a pagar', value: 'R$ 350', color: 'text-orange-600' },
    ],
    features: [
      'Gráficos de faturamento em tempo real',
      'Lucro líquido (receita - despesas)',
      'Gestão de barbeiros e comissões',
      'Histórico de transações detalhado',
      'Planos e upgrades disponíveis',
    ],
  },
  {
    id: 'barbeiro',
    name: 'Visão do Barbeiro',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    description: 'Carteira digital com agenda e acompanhamento de comissões.',
    metrics: [
      { label: 'Agendamentos hoje', value: '8', color: 'text-blue-600' },
      { label: 'Comissão acumulada', value: 'R$ 2.840', color: 'text-emerald-600' },
      { label: 'Próximo corte em', value: '45 min', color: 'text-purple-600' },
      { label: 'Taxa de satisfação', value: '4.8 ★', color: 'text-yellow-600' },
    ],
    features: [
      'Agenda de atendimentos do dia',
      'Acompanhamento de comissões em tempo real',
      'Perfil com foto e informações',
      'Contato rápido com clientes',
      'Feedback de clientes por serviço',
    ],
  },
  {
    id: 'agendamento',
    name: 'Link de Agendamento',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0121 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    description: 'Interface que seus clientes usam para marcar horários 24/7.',
    metrics: [
      { label: 'Horários disponíveis', value: '24+', color: 'text-emerald-600' },
      { label: 'Barbeiros', value: '4', color: 'text-purple-600' },
      { label: 'Tempo de marcação', value: '< 1 min', color: 'text-blue-600' },
      { label: 'Sem redirecionamentos', value: '✓', color: 'text-emerald-600' },
    ],
    features: [
      'Interface intuitiva e responsiva',
      'Funciona em qualquer celular',
      'Compartilhável via WhatsApp ou Instagram',
      'Confirmação automática de agendamento',
      'Cliente recebe lembretes antes do horário',
    ],
  },
  {
    id: 'relatorios',
    name: 'Relatórios & Analytics',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: 'Dados e análises para escalar seu negócio.',
    metrics: [
      { label: 'Serviço mais popular', value: 'Corte Clássico', color: 'text-purple-600' },
      { label: 'Taxa de conclusão', value: '97%', color: 'text-emerald-600' },
      { label: 'Faturamento mensal', value: 'R$ 18.520', color: 'text-blue-600' },
      { label: 'Crescimento vs mês anterior', value: '+23%', color: 'text-emerald-600' },
    ],
    features: [
      'Gráficos de faturamento e tendências',
      'Dados de clientes e frequência',
      'Histórico de pagamentos e comissões',
      'Indicadores de performance por barbeiro',
      'Exportar relatórios em PDF',
    ],
  },
];

export default function DemoShowcase() {
  const [selectedDemo, setSelectedDemo] = useState(0);
  const demo = demoViews[selectedDemo];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 bg-primary/5 px-4 py-1.5 rounded-full">
            Veja como funciona
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            O sistema em ação
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Explore as diferentes visões do sistema conforme seu perfil.
          </p>
        </div>

        {/* Tab Selector - Pílulas Premium */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {demoViews.map((view, index) => (
            <button
              key={view.id}
              onClick={() => setSelectedDemo(index)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${selectedDemo === index
                ? 'bg-primary text-gray-900 shadow-lg shadow-primary/30 scale-105'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-primary/50 hover:text-primary shadow-sm'
                }`}
            >
              {view.icon}
              <span>{view.name}</span>
            </button>
          ))}
        </div>

        {/* Mock Browser Window */}
        <div key={selectedDemo} className="rounded-[2rem] border border-gray-200/80 overflow-hidden shadow-2xl bg-white animate-in fade-in duration-500">

          {/* Fake Browser Top Bar */}
          <div className="flex items-center gap-2 px-5 py-3.5 bg-gray-50 border-b border-gray-200">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <div className="flex-1 text-center text-xs text-gray-400 font-medium tracking-wider uppercase">
              {demo.name}
            </div>
          </div>

          {/* Content Area */}
          <div className="p-8 lg:p-12">
            {/* Description */}
            <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-2">{demo.name}</h3>
            <p className="text-gray-500 text-lg mb-10">{demo.description}</p>

            {/* Metrics Grid - Mini Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {demo.metrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-center hover:border-primary/30 transition-colors">
                  <p className="text-sm text-gray-500 mb-1.5 font-medium">{metric.label}</p>
                  <p className={`text-2xl lg:text-3xl font-extrabold ${metric.color}`}>
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Features List - Clean Check Icons */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-6">Principais recursos</h4>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {demo.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium text-[15px]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6 text-base">Pronto para transformar sua barbearia?</p>
          <a
            href="https://www.instagram.com/caj.tech/"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Começar teste grátis de 7 dias
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}