import React from 'react';
import { Button } from './Button';
import { COPY, PRICE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-white pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Copy Column */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 font-bold text-xs tracking-wider mb-6">
              {COPY.hero.badge}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              {COPY.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              {COPY.hero.subtitle}
            </p>
            
            {/* Price Block */}
            <div className="mb-8 flex flex-col items-center md:items-start">
               <div className="flex items-center gap-4 mb-2">
                 <span className="text-gray-400 text-xl font-medium line-through decoration-red-500">
                    {PRICE.currency} {PRICE.original.toFixed(2)}
                 </span>
                 <span className="text-green-700 text-4xl font-black">
                    {PRICE.currency} {PRICE.current.toString().replace('.', ',')}
                 </span>
               </div>
               <p className="text-sm text-green-600 font-semibold bg-green-50 px-2 py-1 rounded">
                 Ahorras un 56% HOY
               </p>
            </div>

            <Button className="w-full md:w-auto min-w-[300px] mb-4">
              COMPRAR AHORA – {PRICE.currency} {PRICE.current.toString().replace('.', ',')}
            </Button>
            
            <div className="flex flex-col md:flex-row gap-3 text-xs text-slate-500 mt-2">
              <span className="flex items-center justify-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Pago 100% Seguro
              </span>
              <span className="flex items-center justify-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                Acceso Inmediato
              </span>
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full md:w-1/2 relative flex justify-center">
            {/* Abstract Background Blob */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-50 rounded-full blur-3xl -z-10 opacity-70"></div>
            
            <div className="relative w-64 md:w-80 shadow-2xl rounded-lg transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
               <div className="aspect-[2/3] bg-slate-200 rounded-lg overflow-hidden relative border-4 border-white shadow-book">
                  {/* 
                      👇 AQUÍ DEBES PEGAR LA URL DE TU IMAGEN 👇
                      Reemplaza la URL del placeholder con la ruta de tu imagen subida.
                  */}
                  <img 
                    src="https://sxcxlnvxoefnpoasptdl.supabase.co/storage/v1/object/sign/resources/bajarpeso.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NGY4OGVlZi04ODVmLTRmZjEtODM4YS0zYzU2ODhhMmU3YzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXNvdXJjZXMvYmFqYXJwZXNvLnBuZyIsImlhdCI6MTc2ODMwMzE2OCwiZXhwIjoyMDgzNjYzMTY4fQ.5m1bAjDDxgDP1NEz-Gd3ruHyS_RGKBAO4Jr7eQ5QSjc" 
                    alt="Portada Guía Práctica para Bajar de Peso" 
                    className="w-full h-full object-cover" 
                  />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};