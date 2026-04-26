import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface NavbarProps {
  sections: { id: string; title: string }[];
}

export default function Navbar({ sections }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-50 w-full bg-white/30 backdrop-blur-md border-b border-white/40">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-lg font-semibold text-white-800">
          Fares Alnzlawe
        </div>
        <div className="hidden space-x-8 md:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#/portfolio/${section.id}`}
              className="text-gray-800 transition-colors duration-200 hover:text-blue-500"
            >
              {section.title}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <FiX className="size-6" />
            ) : (
              <FiMenu className="size-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="bg-white shadow-lg md:hidden">
          <div className="space-y-2 p-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#/portfolio/${section.id}`}
                className="block text-gray-800 transition-colors duration-200 hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
