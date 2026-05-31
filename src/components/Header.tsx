'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#funcionalidades', label: 'Funcionalidades' },
    { href: '#planos', label: 'Planos' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="CAJ TECH - Página inicial"
          >
            <span className="text-2xl lg:text-3xl font-extrabold tracking-tight text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
              CAJ
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-300 to-primary">
                {' '}TECH
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 px-4 py-2 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* CTA Button - Dark Pill */}
            <a
              href="#"
              className="hidden sm:inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-sm shadow-sm"
            >
              Teste 7 dias grátis
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 transition-all duration-200"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Smooth Collapse */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <nav className="py-4 px-2 border-t border-gray-100/50 mt-1" aria-label="Navegação mobile">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-2xl transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                className="mx-2 mt-3 bg-gray-900 hover:bg-gray-800 text-white font-bold px-5 py-3.5 rounded-full text-center transition-colors shadow-sm"
              >
                Teste 7 dias grátis
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}