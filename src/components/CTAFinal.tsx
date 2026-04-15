export default function CTAFinal() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-dark via-gray-900 to-primary-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Oferta por tempo limitado
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight">
          Pronto para{' '}
          <span className="text-primary">profissionalizar</span>
          <br />
          sua barbearia?
        </h2>

        {/* Subheadline */}
        <p className="mt-4 lg:mt-6 text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
          Junte-se a centenas de barbeiros que já transformaram seus negócios com a CAJ TECH.
        </p>

        {/* CTA Button */}
        {/* TODO: Substituir # pelo link real de cadastro/trial */}
        <div className="mt-8 lg:mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-primary-dark font-bold px-10 lg:px-12 py-5 rounded-xl text-lg lg:text-xl transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 animate-pulse-gold"
          >
            Começar teste grátis de 7 dias
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Sem cartão de crédito
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Setup em 2 minutos
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Cancele quando quiser
          </span>
        </div>
      </div>
    </section>
  );
}
