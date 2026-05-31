const testimonials = [
  {
    quote: 'Com a CAJ TECH, parei de perder cliente por esquecimento. Minha agenda nunca mais ficou vazia. O sistema é simples e funciona de verdade.',
    author: 'João Silva',
    role: 'Barbearia Corte Fino',
  },
  {
    quote: 'Reduzi minhas faltas em 35% no primeiro mês. Os lembretes automáticos de WhatsApp mudaram completamente a gestão da minha barbearia.',
    author: 'Carlos Mendes',
    role: 'Barbearia Premium Cuts',
  },
  {
    quote: 'Antes eu perdia horas calculando comissão de cada barbeiro. Agora é tudo automático e sem erro. Recomendo demais!',
    author: 'Rafael Oliveira',
    role: 'Barbearia Old School',
  },
];

// Helper para gerar iniciais (ex: "João Silva" -> "JS")
const getInitials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Premium */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 bg-primary/5 px-4 py-1.5 rounded-full">
            Depoimentos
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Quem usa, recomenda
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Veja o que barbeiros estão falando sobre a CAJ TECH.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-[1.5rem] p-8 lg:p-10 border border-gray-100 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
            >
              {/* Decorative Giant Quote Mark */}
              <div className="absolute top-4 right-6 text-primary/10 text-8xl font-serif leading-none select-none pointer-events-none" aria-hidden="true">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-600 text-lg leading-relaxed mb-8 relative z-10">
                {testimonial.quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                {/* Avatar com Iniciais */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark text-gray-900 rounded-full flex items-center justify-center flex-shrink-0 font-extrabold text-sm shadow-sm shadow-primary/20">
                  {getInitials(testimonial.author)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Validation Badge - Glass Style */}
        <div className="mt-16 text-center">
          <span className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 backdrop-blur-sm text-primary text-sm font-bold px-6 py-3 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Em validação — Seja um dos primeiros a transformar sua barbearia
          </span>
        </div>
      </div>
    </section>
  );
}