import { Icon } from "@iconify/react";
import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contato" className="relative z-20 bg-black text-white w-full border-t border-white/10 pointer-events-auto font-sans">
      <div className="w-full">
        {/* Contact Form Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-white/10 border-b bg-[#6D28D9]">
          {/* Left: Headline & Context */}
          <div className="col-span-1 lg:col-span-5 lg:p-16 lg:border-b-0 lg:border-r flex flex-col border-white/10 border-b p-8 justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                <Icon
                  className="text-white"
                  icon="solar:chat-round-dots-linear"
                  width="16"
                />
                <span className="text-xs font-medium tracking-wide text-white/60 uppercase">
                  Entre em contato
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-medium tracking-tighter text-white leading-[0.95] mb-6">
                Pronto para elevar sua{" "}
                <span className="text-violet-300">presença digital?</span>
              </h2>
              <p className="text-lg text-white/50 font-light leading-relaxed max-w-md">
                Meu fluxo de trabalho é desenvolvido para marcas ambiciosas que
                querem se destacar. Vamos construir juntos um espaço digital
                seguro, limpo e organizado.
              </p>
            </div>
            <div className="hidden lg:block mt-12">
              <div className="flex items-center gap-2 text-sm text-white/40 mb-2">
                <Icon icon="solar:clock-circle-linear" width="16" />
                <span>Tempo médio de resposta: 24h</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="col-span-1 lg:col-span-7 p-8 lg:p-16 bg-white/5">
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Name */}
                <div className="relative group input-group">
                  <label className="block uppercase text-xs font-medium text-white/80 tracking-widest mb-2">
                    Nome
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-white/10 py-3 text-lg text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors"
                    placeholder="João Silva"
                    type="text"
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-green-400 w-0 group-focus-within:w-full transition-all duration-300 opacity-100"></div>
                </div>
                {/* Email */}
                <div className="relative group input-group">
                  <label className="block uppercase text-xs font-medium text-white/80 tracking-widest mb-2">
                    E-mail
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-white/10 py-3 text-lg text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors"
                    placeholder="joaosilva@exemplo.com"
                    type="email"
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-green-400 w-0 group-focus-within:w-full transition-all duration-300 opacity-100"></div>
                </div>
              </div>

              {/* Phone */}
              <div className="relative group input-group">
                <label className="block uppercase text-xs font-medium text-white/80 tracking-widest mb-2">
                  Telefone
                </label>
                <input
                  className="w-full bg-transparent border-b border-white/10 py-3 text-lg text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors"
                  placeholder="+55 (65) 99999-9999"
                  type="tel"
                />
                <div className="absolute bottom-0 left-0 h-[1px] bg-green-400 w-0 group-focus-within:w-full transition-all duration-300 opacity-100"></div>
              </div>

              {/* Message */}
              <div className="relative group input-group">
                <label className="block uppercase text-xs font-medium text-white/80 tracking-widest mb-2">
                  Fale sobre o seu projeto
                </label>
                <textarea
                  className="w-full bg-transparent border-b border-white/10 py-3 text-lg text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="Preciso de um novo sistema de design para..."
                  rows={3}
                ></textarea>
                <div className="absolute bottom-0 left-0 h-[1px] bg-green-400 w-0 group-focus-within:w-full transition-all duration-300 opacity-100"></div>
              </div>

              <div className="flex items-center justify-end pt-4">
                <button
                  className="group relative px-8 py-4 bg-white text-black text-sm font-semibold tracking-wide rounded-sm overflow-hidden transition-all hover:bg-green-400 hover:text-black hover:shadow-lg hover:shadow-green-900/20"
                  type="button"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Enviar Mensagem
                    <Icon
                      className="group-hover:translate-x-1 transition-transform"
                      icon="solar:arrow-right-linear"
                      width="16"
                    />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Main Footer Links Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 bg-[#0A0A0A]">
          {/* Brand Column */}
          <div className="col-span-1 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between h-full min-h-[300px]">
            <div className="space-y-8">
              {/* Brand Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-sm">
                <Icon icon="solar:infinity-bold" width="24" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium tracking-tight text-white">
                  Ray Felipe
                </h3>
                <p className="text-sm text-white/40 leading-relaxed max-w-[200px]">
                  Criando experiências digitais que unem arte e função.
                </p>
              </div>
            </div>

            {/* Footer Social Icons (Simple Icons) */}
            <div className="flex gap-4 mt-auto pt-8">
              <a
                className="text-white/40 hover:text-white transition-colors"
                href="#"
              >
                <Icon icon="simple-icons:x" width="20" />
              </a>
              <a
                className="text-white/40 hover:text-white transition-colors"
                href="#"
              >
                <Icon icon="simple-icons:instagram" width="20" />
              </a>
              <a
                className="text-white/40 hover:text-white transition-colors"
                href="#"
              >
                <Icon icon="simple-icons:linkedin" width="20" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-2 md:grid-cols-3">
            {/* Sitemap */}
            <div className="p-8 lg:p-12 border-r border-b lg:border-b-0 border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-8">
                Mapa do Site
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                    href="#servicos"
                  >
                    Serviços
                    <Icon
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#6D28D9]"
                      icon="solar:arrow-right-up-linear"
                      width="12"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                    href="#sobre"
                  >
                    Sobre
                    <Icon
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#6D28D9]"
                      icon="solar:arrow-right-up-linear"
                      width="12"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                    href="#depoimentos"
                  >
                    Depoimentos
                    <Icon
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#6D28D9]"
                      icon="solar:arrow-right-up-linear"
                      width="12"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                    href="#contato"
                  >
                    Contato
                    <Icon
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#6D28D9]"
                      icon="solar:arrow-right-up-linear"
                      width="12"
                    />
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            {/* <div className="p-8 lg:p-12 border-r border-b lg:border-b-0 border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-8">
                Recursos
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    className="text-sm text-white/70 hover:text-white transition-colors"
                    href="#"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-white/70 hover:text-white transition-colors"
                    href="#"
                  >

                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-white/70 hover:text-white transition-colors"
                    href="#"
                  >
                    Sistema de Design
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-white/70 hover:text-white transition-colors"
                    href="#"
                  >
                    Templates Framer
                  </a>
                </li>
              </ul>
            </div> */}

            {/* Legal / Support */}
            <div className="col-span-2 md:col-span-1 p-8 lg:p-12">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-8">
                Legal
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    className="text-sm text-white/70 hover:text-white transition-colors"
                    href="#"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-white/70 hover:text-white transition-colors"
                    href="#"
                  >
                    Termos de Serviço
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-white/70 hover:text-white transition-colors"
                    href="#"
                  >
                    Política de Cookies
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-white/70 hover:text-white transition-colors"
                    href="#"
                  >
                    Impressum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 p-6 lg:px-12 lg:py-8 bg-black flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/30 font-light tracking-wide">
            © 2026 Ray Felipe. Todos os direitos reservados. Cuiabá, Mato
            Grosso.
          </div>
          <div className="text-xs text-white/30 font-light tracking-wide">
            Site desenvolvido por Josué Silva.
          </div>
          <button
            className="group flex items-center gap-2 text-xs font-medium text-white/60 hover:text-white transition-colors uppercase tracking-wider cursor-pointer border px-4 py-2 border-white/10 rounded-full hover:bg-white/5"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Voltar ao topo
            <Icon
              className="group-hover:-translate-y-0.5 transition-transform"
              icon="solar:arrow-up-linear"
              width="14"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
