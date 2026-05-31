export default function ProvaSocial() {
  return (
    <section className="py-20 lg:py-24 bg-gray-950 relative overflow-hidden">
      {/* Top Gradient Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Estatística principal */}
        <div className="text-center mb-14 lg:mb-16">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Reduza em até{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-300 to-primary">
              40% as faltas
            </span>{' '}
            com lembretes automáticos
          </p>
        </div>

        {/* Logos placeholder */}
        <div className="text-center mb-16">
          <p className="text-xs text-gray-600 mb-8 uppercase tracking-[0.2em] font-bold">
            Em validação — Seja um dos primeiros
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <p className="text-gray-500 text-sm font-semibold whitespace-nowrap">
                  Barbearia {i}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-white/5" aria-hidden="true" />

        {/* Mini stats */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {[
            { value: '40%', label: 'Redução de faltas' },
            { value: '2min', label: 'Tempo de setup' },
            { value: '7 dias', label: 'Teste grátis' },
            { value: '100%', label: 'Focado no Brasil' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}