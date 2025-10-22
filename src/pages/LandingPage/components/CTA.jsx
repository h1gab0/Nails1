import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-soft-rose/20 to-sage-green/20">
      <div className="max-w-4xl mx-auto text-center reveal">
        <h2 className="font-display text-4xl lg:text-5xl font-medium mb-6">¿Listo para Transformar Tu <span className="text-soft-rose">Salón de Belleza?</span></h2>
        <p className="text-xl text-warm-gray mb-8 max-w-2xl mx-auto">Únete a más de 500 salones que ya han optimizado su operación y aumentado sus ingresos con Nails Now.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="border-2 border-soft-rose text-soft-rose px-8 py-4 rounded-full font-medium text-lg hover:bg-soft-rose hover:text-white transition-all">Agendar Demo Personalizada</button>
        </div>
        <div className="text-sm text-warm-gray"><p>Sin tarjeta de crédito • Cancelación en cualquier momento • Soporte personalizado</p></div>
      </div>
    </section>
  );
};

export default CTA;
