export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Sua barbearia no automático: agenda, lembretes e comissão em um só lugar
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Mais de 500 barbearias já reduziram faltas e organizaram a gestão com a CAJ TECH. Comece grátis por 7 dias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors">
              Ver demonstração
            </button>
            <button className="bg-yellow-500 text-black px-8 py-4 rounded-md font-semibold hover:bg-yellow-600 transition-colors">
              Começar grátis
            </button>
          </div>
        </div>
        <div className="mt-16">
          {/* Placeholder para imagem do dashboard */}
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Imagem do dashboard CAJ TECH (mobile + desktop)</p>
          </div>
        </div>
      </div>
    </section>
  );
}