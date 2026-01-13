import React, { useState } from 'react';
import { Button } from './Button';
import { COPY, PRICE } from '../constants';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Preguntas Frecuentes</h2>
        
        <div className="space-y-4 mb-12">
          {COPY.faq.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-5 bg-slate-50 hover:bg-slate-100 transition-colors text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-slate-800">{item.question}</span>
                <span className="text-slate-500 text-2xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-5 bg-white text-slate-600 border-t border-slate-100">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center bg-green-50 p-8 rounded-2xl border border-green-100">
          <p className="text-slate-500 mb-2 font-medium">No dejes pasar esta oportunidad</p>
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Antes {PRICE.currency} {PRICE.original} <span className="mx-2 text-slate-300">|</span> <span className="text-green-600">Hoy {PRICE.currency} {PRICE.current.toString().replace('.', ',')}</span>
          </h3>
          <Button>
            COMPRAR AHORA
          </Button>
        </div>
      </div>
    </section>
  );
};