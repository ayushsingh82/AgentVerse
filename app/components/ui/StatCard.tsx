import { ReactNode } from 'react';

interface StatCardProps {
  value: string | ReactNode;
  label: string;
  icon?: ReactNode;
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
      {icon && <div className="mb-2 text-orange-600">{icon}</div>}
      <div className="text-3xl font-bold text-orange-600 mb-2">
        {value}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
}
