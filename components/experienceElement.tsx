import Image from "next/image";
import Link from "next/link";

interface ExperienceElement {
  id: string;
  poistion: string;
  entity: string;
  date?: string;
  text: string;
  imageUrl: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  reverse?: boolean;
  linkUrl?: string;
  linkText?: string;
}

export default function ExperienceElement({
  id,
  poistion,
  entity,
  text,
  date,
  imageUrl,
  imageAlt,
  imageWidth,
  imageHeight,
  reverse = false,
  linkUrl,
  linkText,
}: ExperienceElement) {
  return (
    <section id={id} className="py-16">
      <div className="container mx-auto flex flex-col items-center px-4 md:flex-row">
        <div
          className={`md:w-1/2 ${reverse ? "order-last md:order-first" : ""}`}
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-800">{poistion}</h2>
          <h3 className="mb-2 text-xl font-bold text-gray-900">{entity}</h3>
          <p className="mb-2 text-lg font-semibold text-gray-700">{date}</p>
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
