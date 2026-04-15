'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { supabaseUrl, supabaseKey } from '@/lib/supabase';

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

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 max-w-md mx-auto border border-gray-100">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-primary-dark">Comece seu teste grátis</h3>
        <p className="text-gray-500 mt-2 text-sm">Preencha abaixo e comece em 2 minutos</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
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
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
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
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
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
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400"
          />
        </div>

        <div>
          <label htmlFor="barberShop" className="block text-sm font-medium text-gray-700 mb-1.5">
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
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary-hover text-primary-dark font-bold py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
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

        {message && (
          <p
            className={`text-center text-sm font-medium mt-4 p-3 rounded-lg ${
              message.type === 'success'
                ? 'bg-green-50 text-green-700'
                : 'bg-red-50 text-red-700'
            }`}
            role="alert"
          >
            {message.text}
          </p>
        )}
      </form>

      <p className="text-xs text-gray-400 text-center mt-4">
        Ao se cadastrar, você concorda com nossos{' '}
        {/* TODO: Substituir # pela página real de termos de uso */}
        <a href="#" className="text-primary hover:underline">Termos de uso</a>
      </p>
    </div>
  );
}
