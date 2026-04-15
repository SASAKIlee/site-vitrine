export default function CTAFinal() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para profissionalizar sua barbearia?</h2>
        <p className="text-gray-300 mb-8">Junte-se a centenas de barbeiros que já transformaram seus negócios</p>
        <button className="bg-yellow-500 text-black px-8 py-4 rounded-md font-semibold text-lg hover:bg-yellow-600 transition-colors">
          Começar teste grátis de 7 dias
        </button>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CAJ TECH</h3>
            <p className="text-gray-400">Entregar tecnologia de ponta para barbearias, sem burocracia.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-white">Planos</a></li>
              <li><a href="#" className="hover:text-white">Demonstração</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Contato</a></li>
              <li><a href="#" className="hover:text-white">WhatsApp</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Termos de uso</a></li>
              <li><a href="#" className="hover:text-white">Política de privacidade</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CAJ TECH. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}