'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { supabaseUrl, supabaseKey } from '@/lib/supabase';

// Inicializa o cliente fora do componente para evitar recriação a cada render
const supabase = createClient(supabaseUrl, supabaseKey);

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    barberShop: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const { error } = await supabase
        .from('demo_leads')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          barber_shop: formData.barberShop,
          source: 'landing-page',
        }]);

      if (error) throw error;

      setMessage({ type: 'success', text: 'Obrigado! Entraremos em contato em breve.' });
      setFormData({ name: '', email: '', phone: '', barberShop: '' });
    } catch (error) {
      console.error('Error submitting lead:', error);
      setMessage({ type: 'error', text: 'Erro ao enviar. Tente novamente ou fale conosco no WhatsApp.' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Classes padronizadas para os inputs
  const inputClasses = "w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-white transition-all duration-300 placeholder:text-gray-400 text-gray-900";

  return (
    <div className="relative max-w-md mx-auto">
      {/* Glow Dourado Atrás do Card */}
      <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-[80px] pointer-events-none" aria-hidden="true" />

      <div className="relative bg-white rounded-[2rem] shadow-2xl p-8 lg:p-10 border border-gray-100/80">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Comece seu teste grátis
          </h3>
          <p className="text-gray-500 mt-2 text-base">
            Preencha abaixo e comece em 2 minutos
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Nome */}
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
              Nome completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Seu nome"
              className={inputClasses}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
              className={inputClasses}
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
              WhatsApp
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(11) 99999-9999"
              className={inputClasses}
            />
          </div>

          {/* Nome da Barbearia */}
          <div>
            <label htmlFor="barberShop" className="block text-sm font-bold text-gray-700 mb-2">
              Nome da barbearia
            </label>
            <input
              type="text"
              id="barberShop"
              name="barberShop"
              value={formData.barberShop}
              onChange={handleChange}
              required
              placeholder="Nome da sua barbearia"
              className={inputClasses}
            />
          </div>

          {/* Botão Submit com Glow */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:brightness-110 text-gray-900 font-extrabold py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] text-lg"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Enviando...
              </span>
            ) : (
              'Começar teste grátis'
            )}
          </button>

          {/* Mensagem de Sucesso/Erro */}
          {message && (
            <div
              className={`flex items-center gap-2 text-sm font-medium p-4 rounded-xl ${message.type === 'success'
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                : 'bg-red-50 text-red-700 border border-red-100'
                }`}
              role="alert"
            >
              {message.type === 'success' ? (
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              )}
              <span>{message.text}</span>
            </div>
          )}
        </form>

        {/* Termos */}
        <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
          Ao se cadastrar, você concorda com nossos{' '}
          <a href="#" className="text-primary font-semibold hover:underline">Termos de uso</a>
        </p>
      </div>
    </div>
  );
}