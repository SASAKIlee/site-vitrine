export default function Depoimentos() {
  const testimonials = [
    {
      quote: "Com a CAJ, parei de perder cliente por esquecimento. Minha agenda nunca mais ficou vazia.",
      author: "João, Barbearia Corte Fino"
    }
  ];

  return (
    <section id="depoimentos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Depoimentos</h2>
          <p className="text-gray-600">Em validação — Seja um dos primeiros a transformar sua barbearia</p>
        </div>
        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 border border-gray-200 rounded-lg bg-gray-50">
              <p className="text-lg text-gray-700 mb-4">"{testimonial.quote}"</p>
              <p className="text-gray-600 font-semibold">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}