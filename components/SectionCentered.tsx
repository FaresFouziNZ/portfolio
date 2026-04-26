interface SectionProps {
  id: string;
  title: string;
  textColor: string;
  children: React.ReactNode;
}

export default function SectionCentered({
  id,
  title,
  textColor,
  children,
}: SectionProps) {
  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <h2
          className={`mb-6 text-4xl font-bold flex items-center justify-center ${textColor}`}
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
