import { Icon } from "@iconify/react";
import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="relative z-20 bg-black text-white w-full border-b border-white/10 pointer-events-auto font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-4 w-full">
        {/* Left Column: Title & Feature Image */}
        <div className="col-span-1 lg:col-span-2 border-r border-white/10 flex flex-col">
          {/* Header */}
          <div className="p-8 lg:p-12 border-b border-white/10 bg-white/[0.02]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <Icon
                className="text-white"
                icon="solar:heart-angle-linear"
                width="16"
              />
              <span className="text-xs font-medium tracking-wide text-white/60 uppercase">
                Histórias de Clientes
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-medium tracking-tighter text-white leading-[0.95] max-w-lg">
              Ouça o que nossos{" "}
              <span className="text-[#6D28D9]">parceiros</span> satisfeitos têm
              a dizer.
            </h2>
          </div>
          {/* Large Visual Feature */}
          <div className="flex-1 relative min-h-[500px] overflow-hidden group">
            <img
              alt="Abstract Nature"
              className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000"
              src="/assets/c7f83ca2-8834-4deb-8448-b3bbb5_4ff34c43bccd.webp"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-8 lg:bottom-12 left-8 lg:left-12 z-10">
              {/* <div className="text-7xl lg:text-9xl font-semibold tracking-tighter text-white mb-2">
                10.9K<span className="text-[#6D28D9]">+</span>
              </div> */}
              <p className="text-xl text-white/60 font-light max-w-md">
                Clientes felizes e colaborações bem-sucedidas ao redor de
                Cuiabá.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Testimonial Vertical Stack */}
        <div className="col-span-1 lg:col-span-2 flex flex-col h-full bg-white/[0.01]">
          {/* Testimonial 1 (Active/Purple) */}
          <div className="p-8 lg:p-10 border-b border-white/10 bg-[#6D28D9] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-20">
              <Icon
                className="text-white"
                icon="solar:quote-up-linear"
                width="64"
              />
            </div>
            <div className="flex gap-1 mb-6 text-white">
              <Icon icon="solar:star-bold" width="16" />
              <Icon icon="solar:star-bold" width="16" />
              <Icon icon="solar:star-bold" width="16" />
              <Icon icon="solar:star-bold" width="16" />
              <Icon icon="solar:star-bold" width="16" />
            </div>
            <p className="text-xl lg:text-2xl font-normal leading-relaxed text-white mb-8">
              "A equipe foi incrível. Contratei o serviço de videomaker e acho
              que o resultado foi perfeito. Meus clientes aumentaram
              significativamente."
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 border border-white/20 overflow-hidden">
                  <img
                    alt="User"
                    className="w-full h-full object-cover"
                    src="/assets/150_4f363cc9cbaa.jpg"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    Barbearia Rodrigues
                  </div>
                  <div className="text-xs text-white/60 uppercase tracking-wider mt-0.5">
                    Rodrigues - Dono da Barbearia
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full sm:w-auto">
                <Icon
                  className="text-white/60"
                  height="30"
                  icon="simple-icons:stripe"
                  width="80"
                />
                <div className="sm:hidden w-8 h-8 rounded-full bg-white text-[#6D28D9] flex items-center justify-center">
                  <Icon icon="solar:arrow-right-up-linear" width="16" />
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-8 lg:p-10 border-b border-white/10 hover:bg-white/[0.02] transition-colors cursor-default relative group">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-1 text-[#6D28D9]">
                <Icon icon="solar:star-bold" width="14" />
                <Icon icon="solar:star-bold" width="14" />
                <Icon icon="solar:star-bold" width="14" />
                <Icon icon="solar:star-bold" width="14" />
                <Icon icon="solar:star-bold" width="14" />
              </div>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-white group-hover:text-black transition-all">
                <Icon icon="solar:arrow-right-up-linear" width="16" />
              </div>
            </div>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
              "Como profissional criativo exigente, tenho padrões elevados. Não
              só foram atendidos, mas superados. Otimizado especificamente para
              experiências de usuário perfeitas em todos os dispositivos."
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 overflow-hidden grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                  <img
                    alt="User"
                    className="w-full h-full object-cover"
                    src="/assets/150_6c964dacfd02.jpg"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    Thomas Gala
                  </div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider mt-0.5">
                    Fundador, Zentech
                  </div>
                </div>
              </div>
              <Icon
                className="text-white/20 group-hover:text-white transition-colors"
                height="24"
                icon="simple-icons:vercel"
                width="70"
              />
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="flex-1 p-8 lg:p-10 hover:bg-white/[0.02] transition-colors cursor-default relative group flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-[#6D28D9] mb-6">
                <Icon icon="solar:star-bold" width="14" />
                <Icon icon="solar:star-bold" width="14" />
                <Icon icon="solar:star-bold" width="14" />
                <Icon icon="solar:star-bold" width="14" />
                <Icon className="" icon="solar:star-bold" width="14" />
              </div>
              <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
                "A atenção aos detalhes no design de interação é incomparável.
                Um verdadeiro parceiro na construção do futuro do nosso
                produto."
              </p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 overflow-hidden grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                  <img
                    alt="User"
                    className="w-full h-full object-cover"
                    src="/assets/150_56a40793991a.jpg"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    Sarah Jenks
                  </div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider mt-0.5">
                    Líder de Produto
                  </div>
                </div>
              </div>
              <Icon
                className="text-white/20 group-hover:text-[#5E6AD2] transition-colors"
                height="24"
                icon="simple-icons:linear"
                width="70"
              />
            </div>
          </div>
        </div>

        {/* Call to Action Footer */}
        <div className="col-span-1 lg:col-span-4 border-t border-white/10 bg-white/[0.05] backdrop-blur-sm p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#6D28D9] flex items-center justify-center text-white shadow-lg shadow-purple-900/50">
              <Icon icon="solar:confetti-minimalistic-linear" width="24" />
            </div>
            <div>
              <h3 className="text-2xl font-medium tracking-tight text-white">
                Você será a próxima história de sucesso?
              </h3>
              <p className="text-sm text-white/50 mt-1">
                Junte-se as empresas que crescem com melhor design.
              </p>
            </div>
          </div>
          <a href="#contato" className="group px-8 py-4 bg-white text-black font-semibold text-sm tracking-wide rounded-sm hover:bg-[#6D28D9] hover:text-white transition-all duration-300 shadow-xl w-full md:w-auto flex items-center justify-center gap-3">
            Iniciar um Projeto
            <Icon
              className="group-hover:translate-x-1 transition-transform"
              icon="solar:arrow-right-linear"
              width="18"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
