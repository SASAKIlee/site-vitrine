'use client';

export default function DepoimentosAvancado() {
  const testimonials = [
    {
      name: 'João Silva',
      role: 'Dono de Barbearia',
      location: 'São Paulo, SP',
      avatar: '👨‍💼',
      quote:
        'Aumentei meu lucro em 35% no primeiro mês. O sistema organiza tudo: agenda, comissões, faturamento. Meus barbeiros adoram!',
      metrics: ['Lucro +35%', 'Setup < 5min', 'Equipe mais motivada'],
    },
    {
      name: 'Carlos Mendes',
      role: 'Barbeiro Profissional',
      location: 'Rio de Janeiro, RJ',
      avatar: '💇‍♂️',
      quote:
        'Pela primeira vez sei exatamente quanto ganhei cada mês. A agenda organizada e os lembretes automáticos salvaram meu negócio.',
      metrics: ['+40% eficiência', 'Menos faltas', 'Clientes satisfeitos'],
    },
    {
      name: 'Ana Costa',
      role: 'Gerente de Rede',
      location: 'Belo Horizonte, MG',
      avatar: '👩‍💼',
      quote:
        'Gerencio 3 unidades com um clique. Os relatórios me dão insights que não tinha antes. Investimento que se paga sozinho.',
      metrics: ['3 unidades centralizadas', 'Dados em tempo real', 'ROI positivo'],
    },
    {
      name: 'Rafael Oliveira',
      role: 'Dono de Barbearia',
      location: 'Curitiba, PR',
      avatar: '👨‍💼',
      quote:
        'Meus clientes agora marcam sozinhos pelo link. Saí do WhatsApp e ganhei 10 horas por semana. Escala sem estresse.',
      metrics: ['10h livres/semana', '50+ clientes automáticos', 'Sem dores de cabeça'],
    },
  ];

  const stats = [
    { value: '40%', label: 'Redução média de faltas' },
    { value: '35%', label: 'Aumento de lucro' },
    { value: '7 dias', label: 'Teste grátis' },
    { value: '2.000+', label: 'Barbearias ativas' }, // ← adicionada 4ª stat
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 lg:mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Quem já está crescendo com CAJ TECH
          </h2>
          <p className="mt-4 text-lg lg:text-xl text-gray-300">
            Veja os resultados reais de barbearias que transformaram seu negócio
          </p>
        </div>

        {/* Stats — agora com 4 itens, grid fica equilibrado */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-emerald-400">
                {stat.value}
              </p>
              <p className="text-sm lg:text-base text-gray-400 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl lg:rounded-2xl p-6 lg:p-8 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300"
            >
              <p className="text-white text-lg lg:text-xl leading-relaxed mb-6 font-medium">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {testimonial.metrics.map((metric, i) => (
                  <span
                    key={i}
                    className="inline-block bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs lg:text-sm font-semibold"
                  >
                    ✓ {metric}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-800">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-gray-300 mb-6 text-lg">
            Quer sua barbearia nessa lista de sucesso?
          </p>
          <button className="inline-block bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-bold px-10 py-3.5 rounded-lg shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/40 transition-all duration-300 hover:-translate-y-1">
            Começar Teste Grátis de 7 Dias
          </button>
        </div>
      </div>
    </section>
  );
}