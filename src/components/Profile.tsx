import { Icon } from "@iconify/react";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const Profile: React.FC = () => {
  return (
    <section id="sobre" className="relative z-20 bg-[#6D28D9] text-white w-full border-b border-white/10 pointer-events-auto font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-4 w-full">
        {/* Header (Full Width) */}
        <div className="col-span-1 lg:col-span-4 p-8 lg:p-12 border-b border-white/10 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md shadow-sm">
            <Icon
              className="text-white"
              icon="solar:star-fall-minimalistic-2-linear"
              width="16"
            />
            <span className="text-xs font-medium tracking-wide text-white/90 uppercase">
              Videomaker & Profissional de Marketing
            </span>
          </div>
          <h2 className="text-5xl lg:text-8xl font-medium tracking-tighter text-white leading-[0.9]">
            Ray Felipe<span className="text-white/40">.</span>
          </h2>
          <p className="text-white/70 text-xl lg:text-2xl max-w-4xl font-light leading-relaxed">
            Estudante de Publicidade e Marketing, apaixonado por contar
            histórias e focado em resultados através do audiovisual e de
            estratégias precisas.
          </p>
        </div>

        {/* Left Column: Profile Card */}
        <div className="col-span-1 lg:col-span-1 border-r border-b lg:border-b-0 border-white/10 flex flex-col min-h-[600px] bg-black/5 h-full p-8 justify-between">
          <div className="flex flex-col gap-8">
            {/* Avatar */}
            <div className="aspect-4/5 overflow-hidden group bg-black/20 w-full border-white/10 border rounded-sm relative shadow-2xl">
              <img
                alt="Profile"
                className="group-hover:grayscale-0 transition-all duration-700 w-full h-full object-cover"
                src="/assets/ray.jpg"
              />
              <div className="bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>

              {/* Availability Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
                  <span className="text-[10px] font-medium uppercase tracking-wider">
                    Disponível para trabalho
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-medium tracking-tight mb-2">
                Olá, eu sou Ray
              </h3>
              <p className="text-base text-white/60 leading-relaxed font-light">
                Precisão, disciplina e foco no resultado.
              </p>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-white hover:text-[#6D28D9] transition-all hover:scale-110 group"
                href="#"
              >
                <Icon icon="simple-icons:x" width="20" />
              </a>
              <a
                className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-white hover:text-[#6D28D9] transition-all hover:scale-110 group"
                href="#"
              >
                <Icon icon="simple-icons:instagram" width="20" />
              </a>
              <a
                className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-white hover:text-[#6D28D9] transition-all hover:scale-110 group"
                href="#"
              >
                <Icon icon="simple-icons:whatsapp" width="20" />
              </a>
            </div>
          </div>

          <a href="#contato" className="group mt-12 w-full py-4 px-6 bg-white text-[#6D28D9] font-semibold text-sm tracking-wide rounded-sm flex items-center justify-between hover:bg-white/90 transition-all shadow-xl">
            Conecte-se comigo
            <ArrowUpRight
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform stroke-2"
              width="18"
            />
          </a>
        </div>

        {/* Right Column: Details */}
        <div className="col-span-1 lg:col-span-3 flex flex-col h-full">
          {/* Bio Section */}
          <div className="p-8 lg:p-12 border-b border-white/10 bg-white/2">
            <div className="space-y-6 max-w-4xl">
              <p className="text-2xl lg:text-3xl font-normal leading-snug text-white/90">
                Sou Estudante de Publicidade e Marketing e trago na bagagem 2
                anos de experiência como barbeiro profissional. Minha transição
                para o Marketing não foi por acaso: sempre fui apaixonado por
                expressar emoções e contar histórias através de vídeos e
                edições.
              </p>
              <p className="text-lg lg:text-xl font-light leading-relaxed text-white/70">
                Meu diferencial é a precisão. Assim como um corte de cabelo
                exige técnica, meu marketing exige dados e fontes. Sou movido
                pela pontualidade e pela clareza. Gerenciei rotinas de 12 horas
                diárias entre serviço, faculdade e investimentos — sei o que é
                ter disciplina e foco no resultado.
              </p>
              <p className="text-lg lg:text-xl font-medium text-green-400">
                Aqui, o pessoal e o profissional não se misturam; o foco é a
                entrega objetiva.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12">
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-xs font-mono uppercase tracking-wider text-white/80 hover:bg-white/10 transition-colors cursor-default">
                Marketing
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-xs font-mono uppercase tracking-wider text-white/80 hover:bg-white/10 transition-colors cursor-default">
                Publicidade
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-xs font-mono uppercase tracking-wider text-white/80 hover:bg-white/10 transition-colors cursor-default">
                Video-Making
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-xs font-mono uppercase tracking-wider text-white/80 hover:bg-white/10 transition-colors cursor-default">
                Gestão de Tráfego
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-xs font-mono uppercase tracking-wider text-white/80 hover:bg-white/10 transition-colors cursor-default">
                Edição de Vídeo
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-xs font-mono uppercase tracking-wider text-white/80 hover:bg-white/10 transition-colors cursor-default">
                Consultoria
              </span>
            </div>
          </div>

          {/* Experience Grid */}
          <div className="flex-1 bg-black/10 flex flex-col">
            {/* Item 1 */}
            <div className="group flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 lg:px-12 border-b border-white/10 hover:bg-white/5 transition-colors cursor-default gap-4">
              <div className="flex items-center gap-8 w-full lg:w-auto">
                <div className="flex items-center gap-3 w-32">
                  <Icon
                    className="text-white/40"
                    icon="solar:calendar-linear"
                    width="16"
                  />
                  <span className="text-sm font-mono text-white/40 group-hover:text-white/60 transition-colors">
                    2 Anos
                  </span>
                </div>
                <h4 className="text-lg font-medium tracking-tight">
                  Barbeiro Profissional
                </h4>
              </div>
              <div className="flex items-center justify-between w-full lg:w-auto lg:flex-1 lg:justify-end gap-8">
                <span className="text-white/30 font-mono text-xs uppercase tracking-widest hidden lg:block group-hover:text-white/70 transition-colors">
                  Precisão e Técnica
                </span>
                <Icon
                  className="text-white/20 group-hover:text-white group-hover:translate-x-2 transition-transform"
                  icon="solar:arrow-right-linear"
                  width="24"
                />
              </div>
            </div>

            {/* Item 2 */}
            <div className="group flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 lg:px-12 border-b border-white/10 hover:bg-white/5 transition-colors cursor-default gap-4">
              <div className="flex items-center gap-8 w-full lg:w-auto">
                <div className="flex items-center gap-3 w-32">
                  <Icon
                    className="text-white/40"
                    icon="solar:calendar-linear"
                    width="16"
                  />
                  <span className="text-sm font-mono text-white/40 group-hover:text-white/60 transition-colors">
                    Atual
                  </span>
                </div>
                <h4 className="text-lg font-medium tracking-tight">
                  Publicidade & Marketing
                </h4>
              </div>
              <div className="flex items-center justify-between w-full lg:w-auto lg:flex-1 lg:justify-end gap-8">
                <span className="text-white/30 font-mono text-xs uppercase tracking-widest hidden lg:block group-hover:text-white/70 transition-colors">
                  Dados & Estratégia
                </span>
                <Icon
                  className="text-white/20 group-hover:text-white group-hover:translate-x-2 transition-transform"
                  icon="solar:arrow-right-linear"
                  width="24"
                />
              </div>
            </div>

            {/* Item 3 */}
            <div className="group flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 lg:px-12 hover:bg-white/5 transition-colors cursor-default gap-4">
              <div className="flex items-center gap-8 w-full lg:w-auto">
                <div className="flex items-center gap-3 w-32">
                  <Icon
                    className="text-white/40"
                    icon="solar:star-linear"
                    width="16"
                  />
                  <span className="text-sm font-mono text-white/40 group-hover:text-white/60 transition-colors">
                    Atual
                  </span>
                </div>
                <h4 className="text-lg font-medium tracking-tight">
                  Video-Making & Edição
                </h4>
              </div>
              <div className="flex items-center justify-between w-full lg:w-auto lg:flex-1 lg:justify-end gap-8">
                <span className="text-white/30 font-mono text-xs uppercase tracking-widest hidden lg:block group-hover:text-white/70 transition-colors">
                  Emoções e Histórias
                </span>
                <Icon
                  className="text-white/20 group-hover:text-white group-hover:translate-x-2 transition-transform"
                  icon="solar:arrow-right-linear"
                  width="24"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
