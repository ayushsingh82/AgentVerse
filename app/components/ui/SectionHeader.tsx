interface SectionHeaderProps {
  title: string;
  description?: string;
  badge?: string;
}

export default function SectionHeader({ title, description, badge }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      {badge && (
        <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
          {badge}
        </div>
      )}
      <h2 className="text-4xl font-bold text-orange-600 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
