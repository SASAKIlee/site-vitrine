export default function FAQ() {
  const faqs = [
    {
      question: "Preciso de cartão para testar?",
      answer: "Não, 7 dias grátis sem compromisso. Sem cartão de crédito necessário."
    },
    {
      question: "Funciona no celular?",
      answer: "Sim, 100% responsivo. Gerencie sua barbearia de qualquer lugar."
    },
    {
      question: "E se eu já usar planilha?",
      answer: "Importamos seus dados em minutos. Migração fácil e sem perda."
    },
    {
      question: "Tem fidelidade?",
      answer: "Não, cancele quando quiser. Sem contratos longos ou multas."
    },
    {
      question: "Como funciona o suporte?",
      answer: "WhatsApp e e-mail, resposta em até 24h. Suporte dedicado para barbearias."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Perguntas frequentes</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}