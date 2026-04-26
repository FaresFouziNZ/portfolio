import Image from "next/image";
import Link from "next/link";

interface SectionWithImageNew {
  id: string;
  title: string;
  subtitle?: string;
  techstack?: string;
  developmentpoints: string;
  impactpoints: string;
  text?: string;
  imageUrl: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  reverse?: boolean;
  linkUrl?: string;
  linkText?: string;
}

export default function SectionWithImageNew({
  id,
  title,
  subtitle,
  techstack,
  developmentpoints,
  impactpoints,
  text,
  imageUrl,
  imageAlt,
  imageWidth,
  imageHeight,
  linkUrl,
  linkText,
  reverse = false,
}: SectionWithImageNew) {
  return (
    <section id={id} className="py-16">
      <div className="container mx-auto flex flex-col items-center px-4 md:flex-row">
        <div
          className={`md:w-1/2 ${reverse ? "order-last md:order-first" : ""}`}
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-800">{title}</h2>
          <h3 className="mb-2 text-2xl font-bold text-gray-900">{subtitle}</h3>
          <p className="mb-2 text-xl font-bold">Tech Stack:</p>
          <p className="mb-4 text-lg font-semibold text-gray-700 whitespace-pre-line">
            {techstack}
          </p>
          <h4 className="mb-2 text-xl font-bold text-gray-900">
            What I built:
          </h4>
          <div className="whitespace-pre-line text-lg text-gray-700 leading-relaxed">
            {developmentpoints}
          </div>
          <h4 className="mb-2 text-xl font-bold text-gray-900">Impact:</h4>
          <div className="whitespace-pre-line text-lg text-gray-700 leading-relaxed">
            {impactpoints}
          </div>
          <p className="text-lg text-gray-700 whitespace-pre-line">{text}</p>
          {linkUrl && (
            <Link
              href={linkUrl}
              passHref
              target="_blank"
              className="relative bg-gradient-to-r from-orange-400 via-pink-400 to-purple-700 py-16 text-center rounded-xl inline-block mt-4 px-6 py-3 text-white font-semibold hover:bg-gradient-to-r hover:from-orange-500 hover:via-amber-500 hover:to-yellow-400 transition"
            >
              {linkText}
            </Link>
          )}
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
