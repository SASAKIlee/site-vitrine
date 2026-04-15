import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-black">
              CAJ TECH
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#funcionalidades" className="text-gray-700 hover:text-black transition-colors">
              Funcionalidades
            </a>
            <a href="#planos" className="text-gray-700 hover:text-black transition-colors">
              Planos
            </a>
            <a href="#depoimentos" className="text-gray-700 hover:text-black transition-colors">
              Depoimentos
            </a>
            <a href="#faq" className="text-gray-700 hover:text-black transition-colors">
              FAQ
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 transition-colors">
              Teste 7 dias grátis
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}