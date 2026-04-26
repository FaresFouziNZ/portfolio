import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative bg-gradient-to-r from-orange-400 via-pink-400 to-purple-700 py-16 text-center ">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-700 opacity-50"></div>
      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 md:flex-row md:items-start md:space-x-6">
        <Image
          className="rounded-2xl border-4 border-white shadow-lg"
          src="https://b2332b54ed.imgdist.com/pub/bfra/sglmpqsl/gl7/p81/4h1/201867080c.jpeg"
          alt="Fares Alnzlawe"
          width={200}
          height={200}
        />
        <div className="mt-6 text-left md:mt-0 self-center">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
            Fares Alnzlawe
          </h1>
          <h2 className="mt-2 text-2xl font-semibold text-white drop-shadow-lg">
            Data Engineer | Flutter Developer
          </h2>
          <h2 className="mt-2 text-1xl font-semibold text-white drop-shadow-lg">
            Building scalable data systems and modern mobile applications
          </h2>
          <div className="flex gap-4">
            <Link
              className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-semibold text-orange-400 shadow-lg transition-colors duration-200 hover:bg-gray-100 hover:shadow-xl"
              href="mailto:fares.alnzlawe@gmail.com"
              passHref
              target="_blank"
            >
              E-mail
            </Link>
            <Link
              className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-semibold text-orange-400 shadow-lg transition-colors duration-200 hover:bg-gray-100 hover:shadow-xl"
              href="https://www.linkedin.com/in/fares-alnzlawe/"
              passHref
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link
              className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-semibold text-orange-400 shadow-lg transition-colors duration-200 hover:bg-gray-100 hover:shadow-xl"
              href="https://github.com/FaresFouziNZ"
              passHref
              target="_blank"
            >
              GitHub
            </Link>
            <Link
              className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-semibold text-orange-400 shadow-lg transition-colors duration-200 hover:bg-gray-100 hover:shadow-xl"
              href="https://wa.me/966535361361"
              passHref
              target="_blank"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
