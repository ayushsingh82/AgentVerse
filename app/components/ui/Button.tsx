import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all';
  
  const variants = {
    primary: 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-orange-600 hover:bg-orange-50 border-2 border-orange-300 hover:border-orange-400',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white/10'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
