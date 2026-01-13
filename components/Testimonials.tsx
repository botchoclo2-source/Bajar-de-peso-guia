import React from 'react';
import { Button } from './Button';
import { PRICE } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-4">Lo que dicen quienes han aplicado el método</h2>
        <p className="text-slate-400 mb-12 max-w-2xl mx-auto">Miles de personas buscan soluciones reales, no dietas milagro. Aquí algunos ejemplos de mentalidad transformada.</p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Testimonial 1 */}
          <div className="bg-slate-800 p-6 rounded-xl text-left border border-slate-700">
            <div className="flex text-yellow-400 mb-4">★★★★★</div>
            <p className="text-slate-300 mb-6 italic">"Por primera vez en años no siento ansiedad por la noche. Entender que no es falta de voluntad sino biología me cambió la vida."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-600 rounded-full overflow-hidden">
                <img src="https://picsum.photos/100/100?random=1" alt="Usuario" />
              </div>
              <div>
                <p className="font-bold text-white">María G.</p>
                <p className="text-xs text-slate-400">Compradora Verificada</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-slate-800 p-6 rounded-xl text-left border border-slate-700">
            <div className="flex text-yellow-400 mb-4">★★★★★</div>
            <p className="text-slate-300 mb-6 italic">"Pensé que era otra dieta más, pero es educación pura. He bajado 4 kilos en un mes sin pasar hambre y comiendo lo que me gusta."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-600 rounded-full overflow-hidden">
                <img src="https://picsum.photos/100/100?random=2" alt="Usuario" />
              </div>
              <div>
                <p className="font-bold text-white">Carlos R.</p>
                <p className="text-xs text-slate-400">Comprador Verificado</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-slate-800 p-6 rounded-xl text-left border border-slate-700">
            <div className="flex text-yellow-400 mb-4">★★★★★</div>
            <p className="text-slate-300 mb-6 italic">"El capítulo sobre el sueño y el estrés fue revelador. Vale cada centavo, especialmente a este precio."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-600 rounded-full overflow-hidden">
                <img src="https://picsum.photos/100/100?random=3" alt="Usuario" />
              </div>
              <div>
                <p className="font-bold text-white">Ana P.</p>
                <p className="text-xs text-slate-400">Compradora Verificada</p>
              </div>
            </div>
          </div>
        </div>

        <Button variant="primary" className="bg-green-500 hover:bg-green-400 text-white border-green-700">
          Acceder ahora por {PRICE.currency} {PRICE.current.toString().replace('.', ',')}
        </Button>
      </div>
    </section>
  );
};