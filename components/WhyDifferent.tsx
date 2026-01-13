import React from 'react';
import { Button } from './Button';
import { COPY, PRICE } from '../constants';

export const WhyDifferent: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {COPY.solution.title}
          </h2>
          <p className="text-xl text-slate-600">
            {COPY.solution.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {COPY.solution.features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4 text-2xl font-bold">
                {idx + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-slate-500 mb-4 font-medium uppercase tracking-wider text-xs">
            Oferta Especial Hoy
          </p>
          <div className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg mb-8 shadow-lg">
            <span className="text-gray-400 line-through mr-3 text-sm">Antes {PRICE.currency} {PRICE.original}</span>
            <span className="font-bold text-xl text-green-400">Solo {PRICE.currency} {PRICE.current.toString().replace('.', ',')}</span>
          </div>
          <br />
          <Button>
            Comprar ahora con descuento
          </Button>
        </div>
      </div>
    </section>
  );
};