import { Menu } from "lucide-react";
import React from "react";

const Navigation: React.FC = () => {
  return (
    <nav className="sticky lg:absolute top-0 inset-x-0 z-50 w-full flex justify-between items-center p-6 lg:px-8 lg:py-8 text-sm font-normal tracking-wide bg-[#6D28D9]/80 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none border-b lg:border-none border-white/10">
      {/* Mobile: Logo / Brand */}
      <div className="lg:hidden font-bold text-lg tracking-tight">
        Ray Felipe - Designer
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex gap-6 items-center mix-blend-plus-lighter">
        <a
          className="hover:opacity-70 transition-opacity font-medium"
          href="#servicos"
        >
          Serviços
        </a>
        <a className="hover:opacity-70 transition-opacity" href="#sobre">
          Sobre
        </a>
        <a className="hover:opacity-70 transition-opacity" href="#depoimentos">
          Depoimentos
        </a>
      </div>

      {/* Right Side Actions */}
      <div className="flex gap-6 items-center">
        {/* Contact (Desktop) */}
        <a
          className="hidden lg:block hover:opacity-70 transition-opacity mix-blend-plus-lighter"
          href="#contato"
        >
          Fale Comigo
        </a>

        {/* Hamburger Menu (Mobile Only) */}
        <button className="lg:hidden p-2 -mr-2 text-white hover:opacity-70">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
