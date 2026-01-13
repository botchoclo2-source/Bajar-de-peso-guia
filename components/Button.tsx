import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', variant = 'primary' }) => {
  const baseStyles = "font-bold text-lg md:text-xl py-4 px-8 rounded-lg shadow-lg transform transition-all hover:scale-105 active:scale-95 text-center w-full md:w-auto block";
  
  const variants = {
    primary: "bg-green-600 hover:bg-green-500 text-white border-b-4 border-green-800",
    secondary: "bg-amber-500 hover:bg-amber-400 text-white border-b-4 border-amber-700",
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    } else {
      const checkoutSection = document.getElementById('checkout-section');
      if (checkoutSection) {
        checkoutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <button onClick={handleClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};