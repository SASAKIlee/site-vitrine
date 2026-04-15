export default function Funcionalidades() {
  const features = [
    {
      icon: "📅",
      title: "Agenda inteligente",
      description: "Visão diária/semanal, arrasta e solta para agendar facilmente."
    },
    {
      icon: "🔔",
      title: "Lembretes de WhatsApp",
      description: "Reduza faltas automaticamente com lembretes enviados aos clientes."
    },
    {
      icon: "💰",
      title: "Comissão automática",
      description: "Cálculo por barbeiro, por serviço, por período. Sem erros manuais."
    },
    {
      icon: "🔗",
      title: "Link de agendamento",
      description: "Cliente marca sozinho, sem você precisar responder mensagens."
    },
    {
      icon: "📊",
      title: "Relatórios de caixa",
      description: "Saiba exatamente quanto entrou e por quem, em tempo real."
    },
    {
      icon: "🎁",
      title: "Clube de assinatura",
      description: "Crie planos recorrentes para seus clientes, tipo 'Netflix do corte'."
    }
  ];

  return (
    <section id="funcionalidades" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Funcionalidades principais</h2>
          <p className="text-gray-600">Tudo que você precisa para profissionalizar sua barbearia</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}