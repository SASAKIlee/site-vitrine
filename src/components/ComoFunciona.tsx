export default function ComoFunciona() {
  const steps = [
    {
      step: 1,
      title: "Cadastre sua barbearia em 2 minutos",
      description: "Crie sua conta gratuita e configure os dados básicos da sua barbearia."
    },
    {
      step: 2,
      title: "Convide sua equipe e importe seus clientes",
      description: "Adicione barbeiros e importe sua lista de clientes existente."
    },
    {
      step: 3,
      title: "Receba lembretes automáticos e veja as comissões calculadas",
      description: "O sistema cuida do resto: lembretes, agenda e relatórios financeiros."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Como funciona</h2>
          <p className="text-gray-600">Em 3 passos simples, transforme sua barbearia</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="bg-yellow-500 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}