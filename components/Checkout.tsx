import React, { useEffect } from 'react';
import { PRICE } from '../constants';

export const Checkout: React.FC = () => {
  
  useEffect(() => {
    // Dynamically inject the Hotmart scripts as requested
    const importHotmart = () => {
      // Check if script already exists to avoid duplicates
      if (!document.querySelector('script[src="https://static.hotmart.com/checkout/widget.min.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://static.hotmart.com/checkout/widget.min.js';
        script.type = 'text/javascript';
        document.head.appendChild(script);

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
        document.head.appendChild(link);
      }
    };
    
    importHotmart();
  }, []);

  return (
    <section id="checkout-section" className="py-16 md:py-24 bg-gradient-to-br from-slate-100 to-white border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Estás a un paso de empezar tu transformación
          </h2>
          <div className="inline-block bg-white border border-green-200 rounded-full px-6 py-2 shadow-sm">
             <span className="text-slate-500 font-medium">Oferta Especial: </span>
             <span className="text-red-400 line-through text-sm mr-2">{PRICE.currency} {PRICE.original}</span>
             <span className="text-green-600 font-bold text-xl">{PRICE.currency} {PRICE.current.toString().replace('.', ',')}</span>
          </div>
        </div>

        {/* Hotmart Widget Container */}
        <div className="flex justify-center my-12">
           {/* Custom styled button replacing the image but keeping the class for the widget */}
           <a 
             onClick={(e) => e.preventDefault()} 
             href="https://pay.hotmart.com/Q103839065N?checkoutMode=2" 
             className="hotmart-fb hotmart__button-checkout inline-flex items-center justify-center bg-[#40c351] hover:bg-[#36a544] text-white font-extrabold text-2xl py-5 px-12 rounded shadow-lg hover:shadow-xl transition-all duration-200 uppercase tracking-wide transform hover:-translate-y-1"
             style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
           >
             COMPRAR AHORA
           </a>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-slate-400 text-sm mt-8">
           <div className="flex items-center gap-2">
             <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
             <span>Compra Protegida por Hotmart</span>
           </div>
           <div className="flex items-center gap-2">
             <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             <span>Garantía de Satisfacción</span>
           </div>
           <div className="flex items-center gap-2">
             <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
             <span>Acceso Instantáneo</span>
           </div>
        </div>

      </div>
    </section>
  );
};