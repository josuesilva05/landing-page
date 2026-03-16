import { ArrowRight, Download } from "lucide-react";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative z-10 w-full min-h-screen grid grid-cols-1 lg:grid-cols-4 pointer-events-none overflow-hidden">
      {/* Background Grid Lines (Architectural Aesthetic) */}
      <div className="absolute inset-0 flex pointer-events-none w-full border-b border-white/10 z-0">
        <div className="flex-1 border-r border-white/10 h-full"></div>
        <div className="hidden lg:block flex-1 border-r border-white/10 h-full"></div>
        <div className="hidden lg:block flex-1 border-r border-white/10 h-full"></div>
        <div className="hidden lg:block flex-1 h-full"></div>
      </div>

      {/* MOBILE ONLY: Hero Text & Badge */}
      <div className="lg:hidden h-[85vh] col-span-1 flex flex-col justify-end pb-12 px-6 pointer-events-auto relative z-10">
        <div className="w-full select-none">
          <span className="text-hero-mobile font-extrabold tracking-tighter text-white mix-blend-overlay opacity-90 block">
            DESIGN
          </span>
          <span className="text-hero-mobile font-extrabold tracking-tighter text-white mix-blend-overlay opacity-90 block text-right">
            CRIATIVO
          </span>
        </div>
        <div className="mt-8 flex items-center gap-2 text-sm font-medium opacity-80 mix-blend-plus-lighter">
          <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
          <span>Disponível para trabalho</span>
        </div>
      </div>

      {/* DESKTOP ONLY: Typography */}
      {/* Placed absolutely across the grid to not disrupt column flows */}
      <div className="hidden lg:flex absolute top-[20%] left-0 w-screen flex-col pointer-events-none select-none z-10">
        <span className="text-hero font-extrabold tracking-tighter text-white mix-blend-overlay opacity-90 block whitespace-nowrap pl-[2vw]">
          DESIGN
        </span>
        <span className="text-hero font-extrabold tracking-tighter text-white mix-blend-overlay opacity-90 block whitespace-nowrap pl-[25.5vw] mt-[1vh]">
          CRIATIVO
        </span>
      </div>

      {/* Column 1: Case Study & CTA */}
      <div className="h-full border-r border-white/10 flex flex-col justify-end relative pointer-events-auto min-h-0 lg:min-h-screen z-20">
        {/* Case Study Card */}
        <div className="relative lg:absolute lg:bottom-32 left-0 w-full px-6 lg:px-8 flex flex-col gap-6 mt-12 lg:mt-0 mb-12 lg:mb-0">
          <div className="aspect-4/3 bg-black/40 overflow-hidden relative group cursor-pointer shadow-2xl border border-white/10 rounded-sm">
            <img
              alt="Case Study Interface"
              className="transition-transform duration-1000 group-hover:scale-105 opacity-80 w-full h-full object-cover absolute inset-0"
              src={`${import.meta.env.BASE_URL}assets/fa10ce6c-f914-4d7e-90ee-954612_eecd4c36aefd.webp`}
            />
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-semibold tracking-wider uppercase rounded text-white">
                Estudo de Caso
              </span>
            </div>
          </div>

          <div className="flex items-start gap-4 text-white">
            <p className="text-sm font-normal opacity-70 leading-relaxed drop-shadow-md flex-1">
              Criando ecossistemas digitais intuitivos e sistemas de design para
              empresas em crescimento.
            </p>
            <div className="shrink-0 w-10 h-10 bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition-colors cursor-pointer shadow-lg rounded-full">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Bottom CTA (Col 1 spans bottom) */}
        <div className="w-full h-24 bg-white/5 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none flex items-center justify-center text-white cursor-pointer hover:bg-white/10 transition-colors mt-auto lg:absolute lg:bottom-0 border-t border-white/10 z-30 group relative">
          <span className="text-sm font-medium tracking-tight mr-3 uppercase">
            Baixar Portfolio
          </span>
          <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </div>
      </div>

      {/* Column 2 (Spacer) */}
      <div className="hidden lg:block h-full border-r border-white/10 relative pointer-events-none z-0"></div>

      {/* Column 3 (Spacer) */}
      <div className="hidden lg:block h-full border-r border-white/10 relative pointer-events-none z-0"></div>

      {/* Column 4: Stats */}
      <div className="h-full relative pointer-events-auto flex flex-col justify-end lg:border-none border-t border-white/10 min-h-0 lg:min-h-screen z-20">
        {/* Stats */}
        <div className="relative lg:absolute lg:bottom-42 right-0 w-full px-6 lg:px-8 text-right mt-12 lg:mt-0 mb-8 lg:mb-0">
          <div className="flex flex-col items-end gap-1 text-white">
            <span className="text-7xl lg:text-8xl font-light tracking-tighter flex items-start gap-1 drop-shadow-lg">
              <span className="opacity-40 text-4xl lg:text-5xl font-light mt-2 lg:mt-3">
                /
              </span>
              03
            </span>
            <div className="mt-2 text-[10px] font-semibold tracking-widest uppercase opacity-70 leading-normal border-t border-white/30 pt-3 text-right">
              Anos de Experiência
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
