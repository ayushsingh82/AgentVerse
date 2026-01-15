import Button from './Button';

interface CTAProps {
  title: string;
  description: string;
  primaryButton: { text: string; onClick?: () => void };
  secondaryButton?: { text: string; onClick?: () => void };
}

export default function CTA({ title, description, primaryButton, secondaryButton }: CTAProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-orange-100 mb-8">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg" onClick={primaryButton.onClick}>
            {primaryButton.text}
          </Button>
          {secondaryButton && (
            <Button variant="outline" size="lg" onClick={secondaryButton.onClick}>
              {secondaryButton.text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
