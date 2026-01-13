import React from 'react';
import { Button } from './Button';
import { COPY, PRICE } from '../constants';

export const Problem: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
          {COPY.problem.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
          {COPY.problem.points.map((point, index) => (
            <div key={index} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </div>
              <p className="text-slate-600 font-medium">{point}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg mb-10">
          <p className="text-blue-800 text-lg">
            <strong>La realidad es:</strong> No es tu culpa. El sistema tradicional de dietas está diseñado para fallar, creando un efecto rebote que daña tu metabolismo y tu autoestima.
          </p>
        </div>

        <Button variant="secondary">
          Quiero salir de este ciclo por {PRICE.currency} {PRICE.current.toString().replace('.', ',')}
        </Button>
      </div>
    </section>
  );
};