import React from 'react';
import { Button } from './Button';

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-16 bg-white">
       <div className="container mx-auto px-4 max-w-4xl">
         <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">¿Para quién es esta guía?</h2>
         
         <div className="grid md:grid-cols-2 gap-8">
           {/* YES */}
           <div className="bg-green-50 p-6 rounded-xl border border-green-100">
             <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
               <span className="text-2xl">👍</span> Para ti si...
             </h3>
             <ul className="space-y-3 text-slate-700">
               <li>• Buscas resultados sostenibles a largo plazo.</li>
               <li>• Quieres mejorar tu salud, no solo tu estética.</li>
               <li>• Estás dispuesto a cambiar hábitos, no solo a seguir un menú.</li>
               <li>• Valoras tu paz mental y tu relación con la comida.</li>
             </ul>
           </div>

           {/* NO */}
           <div className="bg-red-50 p-6 rounded-xl border border-red-100">
             <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
               <span className="text-2xl">🙅‍♂️</span> NO es para ti si...
             </h3>
             <ul className="space-y-3 text-slate-700">
               <li>• Buscas una "píldora mágica" para bajar 10kg en una semana.</li>
               <li>• Quieres una dieta de hambre extrema.</li>
               <li>• No estás dispuesto a cuestionar tus creencias sobre nutrición.</li>
               <li>• Buscas un plan médico para tratar patologías graves.</li>
             </ul>
           </div>
         </div>

         <div className="mt-12 text-center">
            <Button variant="secondary" className="px-12">
              Comprar ahora – Oferta Vigente
            </Button>
         </div>
       </div>
    </section>
  );
};