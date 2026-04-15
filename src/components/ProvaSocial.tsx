export default function ProvaSocial() {
  return (
    <section className="py-12 lg:py-16 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Estatística principal */}
        <div className="text-center mb-10">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Reduza em até{' '}
            <span className="text-primary">40% as faltas</span>{' '}
            com lembretes automáticos
          </p>
        </div>

        {/* Logos placeholder */}
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-6 uppercase tracking-wider font-medium">
            Em validação — Seja um dos primeiros
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm px-6 lg:px-8 py-3 rounded-xl border border-white/10 hover:border-primary/30 transition-colors duration-200"
              >
                <p className="text-gray-400 text-sm font-medium whitespace-nowrap">
                  Barbearia {i}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mini stats */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { value: '500+', label: 'Barbearias interessadas' },
            { value: '40%', label: 'Redução de faltas' },
            { value: '2min', label: 'Tempo de setup' },
            { value: '7 dias', label: 'Teste grátis' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl lg:text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
