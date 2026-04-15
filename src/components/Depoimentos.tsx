const testimonials = [
  {
    quote:
      'Com a CAJ TECH, parei de perder cliente por esquecimento. Minha agenda nunca mais ficou vazia. O sistema é simples e funciona de verdade.',
    author: 'João Silva',
    role: 'Barbearia Corte Fino',
    avatar: null, // TODO: Adicionar foto real do cliente
    // rating: 5,
  },
  {
    quote:
      'Reduzi minhas faltas em 35% no primeiro mês. Os lembretes automáticos de WhatsApp mudaram completamente a gestão da minha barbearia.',
    author: 'Carlos Mendes',
    role: 'Barbearia Premium Cuts',
    avatar: null, // TODO: Adicionar foto real do cliente
    // rating: 5,
  },
  {
    quote:
      'Antes eu perdia horas calculando comissão de cada barbeiro. Agora é tudo automático e sem erro. Recomendo demais!',
    author: 'Rafael Oliveira',
    role: 'Barbearia Old School',
    avatar: null, // TODO: Adicionar foto real do cliente
    // rating: 5,
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Depoimentos</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark tracking-tight">
            Quem usa, recomenda
          </h2>
          <p className="mt-4 text-lg lg:text-xl text-gray-600">
            Veja o que barbeiros estão falando sobre a CAJ TECH
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-primary-dark">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Validation badge */}
        <div className="mt-12 text-center">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary-dark text-sm font-medium px-5 py-2.5 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Em validação — Seja um dos primeiros a transformar sua barbearia
          </span>
        </div>
      </div>
    </section>
  );
}
