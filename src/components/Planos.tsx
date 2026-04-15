export default function Planos() {
  const plans = [
    {
      name: "Starter",
      price: "R$ 50/mês",
      ideal: "Quem está saindo do WhatsApp",
      benefits: ["Link de agendamento", "Até 2 barbeiros", "Controle de caixa", "Suporte básico"],
      cta: "Escolher plano"
    },
    {
      name: "PRO",
      price: "R$ 99,90/mês",
      ideal: "Barbearia em crescimento",
      benefits: ["Tudo do Starter", "Lembretes automáticos de WhatsApp", "Cálculo de comissão", "Clube de assinatura", "Barbeiros ilimitados"],
      cta: "Escolher plano",
      featured: true
    },
    {
      name: "Elite",
      price: "R$ 497/mês",
      ideal: "Quem quer escala + marketing",
      benefits: ["Tudo do Pro", "Criação de identidade visual", "Gestão de redes sociais", "Tráfego pago gerenciado"],
      cta: "Escolher plano"
    }
  ];

  return (
    <section id="planos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Planos e preços</h2>
          <p className="text-gray-600 mb-4">Escolha o plano ideal para sua barbearia</p>
          <p className="text-sm text-gray-500">Consultor parceiro ganha 100% da instalação + 50% da recorrência</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`p-8 border rounded-lg ${plan.featured ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200 bg-white'}`}>
              {plan.featured && <div className="text-yellow-600 font-semibold mb-2">⭐ MAIS POPULAR</div>}
              <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-black mb-4">{plan.price}</div>
              <p className="text-gray-600 mb-6">{plan.ideal}</p>
              <ul className="mb-8 space-y-2">
                {plan.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-md font-semibold ${plan.featured ? 'bg-yellow-500 text-black hover:bg-yellow-600' : 'bg-black text-white hover:bg-gray-800'} transition-colors`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}