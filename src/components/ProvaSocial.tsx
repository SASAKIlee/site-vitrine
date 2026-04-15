export default function ProvaSocial() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-2xl font-semibold text-black mb-4">
            Reduza em até 40% as faltas com lembretes automáticos
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
            {/* Placeholder para logos de barbearias */}
            <div className="bg-gray-200 px-6 py-3 rounded-md">
              <p className="text-gray-500">Logo Barbearia 1</p>
            </div>
            <div className="bg-gray-200 px-6 py-3 rounded-md">
              <p className="text-gray-500">Logo Barbearia 2</p>
            </div>
            <div className="bg-gray-200 px-6 py-3 rounded-md">
              <p className="text-gray-500">Logo Barbearia 3</p>
            </div>
            <div className="bg-gray-200 px-6 py-3 rounded-md">
              <p className="text-gray-500">Em validação — Seja um dos primeiros</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}