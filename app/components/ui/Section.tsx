import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'orange';
}

export default function Section({
  id,
  children,
  className = '',
  background = 'white'
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    orange: 'bg-gradient-to-r from-orange-500 to-orange-600'
  };
  
  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${backgrounds[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
