import React from 'react';
import { Button } from './Button';
import { COPY, PRICE } from '../constants';

export const ContentList: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              {COPY.content.title}
            </h2>
            <ul className="space-y-4">
              {COPY.content.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5">✓</span>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2 bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
             <h3 className="text-xl font-bold text-center text-slate-800 mb-6">Resumen de Valor</h3>
             
             <div className="space-y-4 mb-8">
               <div className="flex justify-between items-center text-slate-500 pb-2 border-b border-slate-100">
                 <span>Guía Completa (PDF)</span>
                 <span className="line-through">{PRICE.currency} {PRICE.original}</span>
               </div>
               <div className="flex justify-between items-center text-slate-500 pb-2 border-b border-slate-100">
                 <span>Plan de Hábitos</span>
                 <span className="line-through">Invaluable</span>
               </div>
               <div className="flex justify-between items-center font-bold text-lg text-slate-900 pt-2">
                 <span>Precio Hoy:</span>
                 <span className="text-green-600 text-2xl">{PRICE.currency} {PRICE.current.toString().replace('.', ',')}</span>
               </div>
             </div>

             <Button className="w-full">
               Sí, quiero esta guía
             </Button>
             <p className="text-center text-xs text-slate-400 mt-4">Descarga inmediata tras el pago</p>
          </div>

        </div>
      </div>
    </section>
  );
};