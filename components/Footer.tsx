import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-500 py-12 text-sm text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="mb-4">
          Copyright © {new Date().getFullYear()} Guía Práctica de Pérdida de Peso. Todos los derechos reservados.
        </p>
        <p className="max-w-2xl mx-auto text-xs leading-relaxed text-slate-600">
          Descargo de responsabilidad: Este producto no sustituye el parecer de un médico profesional. Consulta siempre a un médico para tratar los asuntos relacionados con tu salud. Los resultados pueden variar de persona a persona. No garantizamos resultados específicos, ya que dependen del compromiso y la fisiología de cada individuo.
        </p>
      </div>
    </footer>
  );
};