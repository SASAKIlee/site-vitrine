export default function CTAFinal() {
  return (
    <section className="py-24 lg:py-32 bg-gray-950 relative overflow-hidden">
      {/* Decorative glowing orbs */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-[128px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary rounded-full blur-[128px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge com efeito vidro */}
        <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 backdrop-blur-sm text-primary text-sm font-bold px-5 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Oferta por tempo limitado
        </div>

        {/* Headline com gradiente premium */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
          Pronto para{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-300 to-primary">
            profissionalizar
          </span>
          <br />
          sua barbearia?
        </h2>

        {/* Subheadline */}
        <p className="mt-6 text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Junte-se a centenas de barbeiros que já transformaram seus negócios com a CAJ TECH. Seu primeiro passo para faturar mais começa aqui.
        </p>

        {/* CTA Button com Glow */}
        <div className="mt-10">
          <a
            href="#"
            className="group inline-flex items-center gap-3 bg-primary hover:brightness-110 text-gray-900 font-extrabold px-10 lg:px-14 py-5 rounded-full text-lg lg:text-xl transition-all duration-300 shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] hover:-translate-y-1"
          >
            Começar teste grátis de 7 dias
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Trust badges com divisor sutil */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Sem cartão de crédito
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Setup em 2 minutos
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Cancele quando quiser
          </span>
        </div>
      </div>
    </section>
  );
}