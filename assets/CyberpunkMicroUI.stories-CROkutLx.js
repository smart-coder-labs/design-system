import{j as e}from"./jsx-runtime-u17CrQMm.js";import{M as t}from"./MagneticButton-CRnj1dsV.js";import{H as n}from"./HolographicCard-DjU9EgJw.js";import{T as r}from"./TerminalAccordion-CTQ4WuQP.js";import"./iframe-CGazvlvx.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-BNOm_ZMq.js";import"./resolve-elements-juiWZL7b.js";import"./use-transform-BZHWSeKy.js";import"./use-spring-CTtfhaSN.js";import"./index-C-eQ3fKV.js";const u={title:"Cyberpunk/02 - Micro-Interactions & UI",parameters:{layout:"centered"}},a={render:()=>e.jsxs("div",{className:"bg-void-black min-h-screen w-full p-20 flex flex-col items-center gap-32 text-white overflow-hidden perspective-1000",children:[e.jsxs("div",{className:"flex flex-col items-center gap-6",children:[e.jsx("h2",{className:"text-acid-green font-[family-name:var(--font-vt323)] tracking-widest text-xl mb-4 text-center",children:"01 // EXPERIMENTA EL MAGNETISMO FÍSICO"}),e.jsxs("div",{className:"flex gap-10",children:[e.jsx(t,{children:"Infiltrar Red"}),e.jsx(t,{className:"border-industrial-grey text-gray-400 bg-transparent hover:border-acid-green hover:text-black hover:bg-acid-green hover:shadow-[0_0_20px_var(--color-acid-green)]",children:"Descargar Matriz"})]})]}),e.jsxs("div",{className:"flex flex-col items-center gap-6 w-full max-w-5xl",children:[e.jsx("h2",{className:"text-acid-green font-[family-name:var(--font-vt323)] tracking-widest text-xl mb-4 text-center",children:"02 // ROTACIÓN DE EJES EN 2.5D"}),e.jsxs("div",{className:"flex flex-wrap justify-center gap-12 perspective-1000",children:[e.jsx(n,{title:"Firewall Subroutines",description:"Algoritmos de defensa reactiva que detectan intrusiones hostiles en nanosegundos. El glare reacciona a tu linterna holográfica cerebral.",icon:e.jsx("span",{className:"text-5xl",children:"🛡️"})}),e.jsx(n,{title:"Fatal Error",description:"Motor termonuclear inestable. Si los niveles de radiación bajan de cero, el sistema colapsará.",icon:e.jsx("h1",{className:"text-5xl text-electric-orange font-[family-name:var(--font-vt323)]",children:"404"})})]})]}),e.jsxs("div",{className:"flex flex-col items-center gap-6 w-full max-w-3xl border border-industrial-grey p-10 bg-[rgba(10,10,10,0.8)] backdrop-blur-md",children:[e.jsxs("h2",{className:"text-electric-orange font-[family-name:var(--font-vt323)] tracking-widest text-3xl mb-4 flex w-full justify-start items-center gap-2",children:[e.jsx("span",{className:"animate-pulse",children:"_"})," INTERROGATORIO DE KERNEL"]}),e.jsxs("div",{className:"w-full flex justify-between font-[family-name:var(--font-vt323)] text-gray-500 mb-6 border-b border-gray-800 pb-2",children:[e.jsx("span",{children:"SEC. STATUS: DECRYPTED"}),e.jsx("span",{children:"PORT: 8080 LOCAL"})]}),e.jsx(r,{question:"¿POR QUÉ LOS ENGRANAJES ESTÁN DETENIDOS?",answer:"El sistema detectó un parásito lógico en la red de suministro principal. Todas las rotaciones han sido congeladas (await) para prevenir la corrupción del frontend."}),e.jsx(r,{question:"INICIAR SECUENCIA DE PURGA DE MEMORIA",answer:"ADVERTENCIA: Destruir el caché borrará el progreso guardado y despertará los procesos huérfanos. Pulsa (y) para confirmar o espera hasta el fin de ciclo."}),e.jsx(r,{question:"MOSTRAR LICENCIA DEL VECTOR",answer:"Propiedad Intelectual de The Spark Corp. Acceso no autorizado revocado. Desconectando interfaz visual..."})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-void-black min-h-screen w-full p-20 flex flex-col items-center gap-32 text-white overflow-hidden perspective-1000">
      
      {/* 1. Botones Magnéticos */}
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-acid-green font-[family-name:var(--font-vt323)] tracking-widest text-xl mb-4 text-center">
          01 // EXPERIMENTA EL MAGNETISMO FÍSICO
        </h2>
        <div className="flex gap-10">
          <MagneticButton>Infiltrar Red</MagneticButton>
          <MagneticButton className="border-industrial-grey text-gray-400 bg-transparent hover:border-acid-green hover:text-black hover:bg-acid-green hover:shadow-[0_0_20px_var(--color-acid-green)]">
            Descargar Matriz
          </MagneticButton>
        </div>
      </div>
      
      {/* 2. Tarjetas Holográficas */}
      <div className="flex flex-col items-center gap-6 w-full max-w-5xl">
        <h2 className="text-acid-green font-[family-name:var(--font-vt323)] tracking-widest text-xl mb-4 text-center">
          02 // ROTACIÓN DE EJES EN 2.5D
        </h2>
        <div className="flex flex-wrap justify-center gap-12 perspective-1000">
          <HolographicCard title="Firewall Subroutines" description="Algoritmos de defensa reactiva que detectan intrusiones hostiles en nanosegundos. El glare reacciona a tu linterna holográfica cerebral." icon={<span className="text-5xl">🛡️</span>} />
          <HolographicCard title="Fatal Error" description="Motor termonuclear inestable. Si los niveles de radiación bajan de cero, el sistema colapsará." icon={<h1 className="text-5xl text-electric-orange font-[family-name:var(--font-vt323)]">404</h1>} />
        </div>
      </div>
      
      {/* 3. Acordeones Terminal */}
      <div className="flex flex-col items-center gap-6 w-full max-w-3xl border border-industrial-grey p-10 bg-[rgba(10,10,10,0.8)] backdrop-blur-md">
        <h2 className="text-electric-orange font-[family-name:var(--font-vt323)] tracking-widest text-3xl mb-4 flex w-full justify-start items-center gap-2">
          <span className="animate-pulse">_</span> INTERROGATORIO DE KERNEL
        </h2>
        
        <div className="w-full flex justify-between font-[family-name:var(--font-vt323)] text-gray-500 mb-6 border-b border-gray-800 pb-2">
          <span>SEC. STATUS: DECRYPTED</span>
          <span>PORT: 8080 LOCAL</span>
        </div>
        
        <TerminalAccordion question="¿POR QUÉ LOS ENGRANAJES ESTÁN DETENIDOS?" answer="El sistema detectó un parásito lógico en la red de suministro principal. Todas las rotaciones han sido congeladas (await) para prevenir la corrupción del frontend." />
        <TerminalAccordion question="INICIAR SECUENCIA DE PURGA DE MEMORIA" answer="ADVERTENCIA: Destruir el caché borrará el progreso guardado y despertará los procesos huérfanos. Pulsa (y) para confirmar o espera hasta el fin de ciclo." />
        <TerminalAccordion question="MOSTRAR LICENCIA DEL VECTOR" answer="Propiedad Intelectual de The Spark Corp. Acceso no autorizado revocado. Desconectando interfaz visual..." />
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};const E=["UIComponentsShowcase"];export{a as UIComponentsShowcase,E as __namedExportsOrder,u as default};
