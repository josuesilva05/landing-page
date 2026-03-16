import { ArrowUp } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 w-full text-xs text-neutral-500 font-mono uppercase tracking-widest relative z-20 bg-black pointer-events-auto border-t border-white/10">
      <div className="p-8 border-b lg:border-b-0 border-r border-white/10">
        © 2026 Portfolio
      </div>
      <div className="p-8 border-b lg:border-b-0 border-r border-white/10">
        São Paulo, BR
      </div>
      <div className="p-8 border-b lg:border-b-0 border-r border-white/10">
        Hora Local: 10:42
      </div>
      <div className="p-8 hover:text-white transition-colors cursor-pointer flex items-center justify-between group">
        Voltar ao Topo
        <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
      </div>
    </div>
  );
};

export default Footer;
