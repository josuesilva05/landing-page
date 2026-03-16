import { Icon } from '@iconify/react';
import React from 'react';

const Clients: React.FC = () => {
    return (
        <div className="w-full border-b border-white/10 py-16 px-8 relative z-20 pointer-events-auto bg-black flex flex-col items-center lg:items-start">
            <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-10 text-center lg:text-left">Clientes &amp; Parceiros Selecionados</p>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-12 lg:gap-20 opacity-40 hover:opacity-100 transition-opacity duration-500 w-full">
                <Icon className="text-white" height="36" icon="simple-icons:vercel" width="96" />
                <Icon className="text-white" height="36" icon="simple-icons:stripe" width="96" />
                <Icon className="text-white" height="36" icon="simple-icons:linear" width="96" />
                <Icon className="text-white" height="36" icon="simple-icons:notion" width="96" />
                <Icon className="text-white" height="36" icon="simple-icons:airbnb" width="96" />
                <Icon className="text-white" height="36" icon="simple-icons:raycast" width="96" />
            </div>
        </div>
    );
};

export default Clients;
