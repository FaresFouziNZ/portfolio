interface SkillsCardProps {
  title: string;
  text: string;
}

export default function SkillsCard({ title, text }: SkillsCardProps) {
  return (
    <div className="bg-white/30 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-md ml-8 mr-8 mb-8">
      <h3 className="mb-4 text-2xl font-bold text-gray-800">{title}</h3>
      <p className="text-lg text-gray-700 whitespace-pre-line">{text}</p>
    </div>
  );
}
