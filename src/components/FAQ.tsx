'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Preciso de cartão de crédito para testar?',
    answer: 'Não! Você pode testar a CAJ TECH gratuitamente por 7 dias, sem precisar inserir nenhum dado de pagamento. Sem compromisso, sem surpresas.',
  },
  {
    question: 'Funciona no celular?',
    answer: 'Sim, 100% responsivo! Você pode gerenciar sua barbearia de qualquer lugar, seja pelo celular, tablet ou computador. O sistema se adapta perfeitamente a qualquer tela.',
  },
  {
    question: 'E se eu já usar planilha ou outro sistema?',
    answer: 'Importamos seus dados em minutos! Nossa equipe te ajuda na migração para que você não perca nenhuma informação. É rápido e sem dor de cabeça.',
  },
  {
    question: 'Tem fidelidade ou multa por cancelamento?',
    answer: 'Não! Você pode cancelar quando quiser, sem contratos longos ou multas. Acreditamos que você fica porque quer, não porque é obrigado.',
  },
  {
    question: 'Como funciona o suporte?',
    answer: 'Oferecemos suporte por WhatsApp e e-mail, com resposta em até 24 horas. No plano PRO e Elite, o suporte é prioritário com atendimento mais rápido.',
  },
  {
    question: 'Posso adicionar mais barbeiros depois?',
    answer: 'Claro! No plano Starter você começa com até 2 barbeiros. No plano PRO e Elite, são barbeiros ilimitados. Você pode fazer upgrade a qualquer momento.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Premium */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4 bg-primary/5 px-4 py-1.5 rounded-full">
            Dúvidas
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Perguntas frequentes
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Tire suas dúvidas sobre a CAJ TECH
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-500 ${openIndex === index
                ? 'bg-white shadow-lg shadow-gray-200/50'
                : 'bg-transparent hover:bg-white/60'
                }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={`text-lg font-bold transition-colors duration-300 pr-6 ${openIndex === index ? 'text-primary' : 'text-gray-900 group-hover:text-primary'}`}>
                  {faq.question}
                </span>

                {/* Ícone Circular Animado */}
                <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                  ? 'bg-primary text-gray-900 rotate-180'
                  : 'bg-gray-100 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary'
                  }`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <p className="px-6 pb-6 text-gray-500 leading-relaxed text-base max-w-2xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6 text-base">Ainda tem dúvidas?</p>
          <a
            href="#"
            className="inline-flex items-center gap-2.5 bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl group"
          >
            <svg className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}