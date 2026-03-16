import { ArrowRight, BookOpen, Code2, TrendingUp, Video } from "lucide-react";
import React from "react";

const Services: React.FC = () => {
  return (
    <section
      id="servicos"
      className="relative z-20 bg-black text-white w-full border-t border-white/10 pointer-events-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 w-full">
        {/* Texto de introdução */}
        <div className="col-span-1 lg:col-span-4 p-8 lg:p-12 border-b border-white/10 flex flex-col lg:flex-row justify-between items-end gap-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl lg:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[0.9]">
              Tem uma ideia de negócio?
              <br />
              <span className="text-neutral-500">Nós criamos.</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-xl leading-relaxed">
              A vivência de quem entende o seu negócio e sabe exatamente o que
              precisa para se destacar no mercado.
            </p>
          </div>
          <div className="mb-2">
            <a
              className="group flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors pb-1 border-b border-white/20 hover:border-white"
              href="#portfolio"
            >
              Explorar Portfolio
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform w-4 h-4" />
            </a>
          </div>
        </div>
        {/* Card 1: Video-Making */}
        <div className="group relative col-span-1 border-r border-b border-white/10 p-8 h-[500px] flex flex-col justify-between hover:bg-neutral-900/50 transition-colors">
          <div className="relative w-full h-48 border border-white/10 bg-neutral-900/50 flex flex-col items-center justify-center overflow-hidden group-hover:bg-neutral-800/50 transition-colors">
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-[10px] font-mono text-white/50 font-bold uppercase tracking-widest">
                REC
              </span>
            </div>
            <div className="w-20 h-14 border-2 border-white/20 rounded-sm flex items-center justify-center relative group-hover:border-white/40 transition-colors shadow-2xl">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-10 border-l-white/60 group-hover:border-l-white transition-colors border-b-[6px] border-b-transparent ml-1"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full border border-white/20 bg-black"></div>
              <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full border border-white/20 bg-black"></div>
            </div>
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-neutral-500">
              4K-60FPS
            </div>
          </div>
          <div className="flex flex-col flex-1 mt-6">
            <div className="w-8 h-8 flex items-center justify-center bg-white text-black mb-6">
              <Video className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-2">
              Video-Making
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Vídeos que prendem a atenção do público para o seu negócio.
            </p>
            <div className="mt-auto flex items-center gap-2 text-[#6D28D9] font-medium text-sm opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              Explorar Portfolio
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
        {/* Card 2: Marketing para comércios */}
        <div className="group relative col-span-1 border-r border-b border-white/10 p-8 h-[500px] flex flex-col justify-between hover:bg-neutral-900/50 transition-colors">
          <div className="relative w-full h-48 border border-white/10 bg-neutral-900/50 flex items-end justify-center p-6 gap-3 overflow-hidden group-hover:bg-neutral-800/50 transition-colors">
            <div className="w-8 bg-white/10 group-hover:bg-white/20 transition-all duration-300 h-12 rounded-t-sm"></div>
            <div className="w-8 bg-white/20 group-hover:bg-white/30 transition-all duration-300 h-20 rounded-t-sm"></div>
            <div className="w-8 bg-[#6D28D9]/40 group-hover:bg-[#6D28D9]/70 transition-all duration-300 h-28 rounded-t-sm relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full border-2 border-[#6D28D9] scale-0 group-hover:scale-100 transition-transform delay-150 duration-300"></div>
            </div>
            <div className="absolute bottom-4 left-4 text-[10px] font-mono text-neutral-500">
              ROI +340%
            </div>
          </div>
          <div className="flex flex-col flex-1 mt-6">
            <div className="w-8 h-8 flex items-center justify-center bg-white text-black mb-6">
              <TrendingUp className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-2">
              Marketing para comércios
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Produção de conteúdo para redes sociais, consultoria e estratégias
              para alavancar o seu negócio.
            </p>
            <div className="mt-auto flex items-center gap-2 text-[#6D28D9] font-medium text-sm opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              Explorar Portfolio
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
        {/* Card 3: E-books e infoprodutos */}
        <div className="group relative col-span-1 border-r border-b border-white/10 p-8 h-[500px] flex flex-col justify-between hover:bg-neutral-900/50 transition-colors">
          <div className="relative w-full h-48 border border-white/10 bg-neutral-900/50 flex items-center justify-center p-4 overflow-hidden group-hover:bg-neutral-800/50 transition-colors">
            <div className="relative w-24 h-32 bg-white/5 border border-white/10 rounded-sm group-hover:-rotate-6 group-hover:scale-105 transition-all duration-500 flex flex-col items-center justify-center shadow-2xl overflow-hidden before:absolute before:inset-0 before:bg-linear-to-tr before:from-transparent before:via-white/5 before:to-transparent">
              <div className="absolute top-0 right-0 w-0 h-0 border-t-12 border-t-black border-r-12 border-r-black border-l-12 border-l-white/20 border-b-12 border-b-white/20 opacity-50"></div>
              <div className="w-10 h-[2px] bg-white/30 mb-3"></div>
              <div className="w-14 h-[2px] bg-white/20 mb-2"></div>
              <div className="w-12 h-[2px] bg-white/20 mb-2"></div>
              <div className="w-14 h-[2px] bg-white/20"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border border-white/20 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-neutral-500">
              PDF/EPUB
            </div>
          </div>
          <div className="flex flex-col flex-1 mt-6">
            <div className="w-8 h-8 flex items-center justify-center bg-white text-black mb-6">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-2">
              E-books & Infoprodutos
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Criando materiais ricos que agregam valor ao seu público e
              fortalecem sua autoridade no mercado.
            </p>
            <div className="mt-auto flex items-center gap-2 text-[#6D28D9] font-medium text-sm opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              Explorar Portfolio
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
        {/* Card 2: Development */}
        <div className="group relative col-span-1 border-r border-b border-white/10 p-8 h-[500px] flex flex-col justify-between hover:bg-neutral-900/50 transition-colors">
          <div className="relative w-full h-48 border border-white/10 bg-[#0d1117] flex flex-col p-6 overflow-hidden group-hover:bg-black transition-colors">
            <div className="flex gap-2 mb-4 opacity-70">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
            <div className="font-mono text-xs text-neutral-400 space-y-1.5 leading-tight">
              <p>
                <span className="text-pink-400">import</span>{" "}
                <span className="text-amber-300">{"{ CTA }"}</span>{" "}
                <span className="text-pink-400">from</span>{" "}
                <span className="text-green-400">"@/components"</span>;
              </p>
              <br />
              <p>
                <span className="text-purple-400">export function</span>{" "}
                <span className="text-blue-400">LandingPage</span>() {"{"}
              </p>
              <p className="pl-4">
                <span className="text-purple-400">return</span>{" "}
                <span className="text-white">&lt;</span>
                <span className="text-blue-400">CTA</span>{" "}
                <span className="text-amber-300">conversion</span>=
                <span className="text-green-400">"100%"</span>{" "}
                <span className="text-white">/&gt;</span>;
              </p>
              <p>{"}"}</p>
            </div>
          </div>
          <div className="flex flex-col flex-1 mt-6">
            <div className="w-8 h-8 flex items-center justify-center bg-white text-black mb-6">
              <Code2 className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-2">
              Sites & Landing Pages
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Desenvolvimento de sites e landing pages como esta, com design
              moderno, rápido e otimizado para conversão.
            </p>
            <div className="mt-auto flex items-center gap-2 text-[#6D28D9] font-medium text-sm opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              Explorar Portfolio
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
