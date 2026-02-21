import{j as e}from"./jsx-runtime-u17CrQMm.js";import{W as t}from"./WebGLHologram-qR0b3xr5.js";import{W as n}from"./WebGLDistortionImage-CAR35v4f.js";import{W as a}from"./WebGLTunnel-CCS0xbih.js";import"./iframe-CGazvlvx.js";import"./preload-helper-PPVm8Dsz.js";import"./react-three-fiber.esm-DZIapvUm.js";import"./index-ADqZr-JA.js";import"./index-7OC5HNn7.js";import"./ScrollControls-DSMIh7I9.js";import"./client-4ltIV3P4.js";import"./index-CfB_ZJHU.js";const b={title:"Cyberpunk/03 - WebGL & Three.js",parameters:{layout:"fullscreen"}},s={render:()=>e.jsxs("div",{className:"bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-blue-500 selection:text-black",children:[e.jsx("section",{className:"relative w-full h-[300vh]",children:e.jsxs("div",{className:"sticky top-0 h-screen w-full flex",children:[e.jsx("div",{className:"w-1/2 h-full absolute right-0",children:e.jsx(t,{})}),e.jsxs("div",{className:"w-1/2 h-full flex flex-col justify-center pl-20 z-10 pointer-events-none",children:[e.jsx("h2",{className:"text-blue-500 font-sans text-5xl mb-4",children:"ASIMILACIÓN 01:"}),e.jsx("p",{className:"font-sans text-zinc-500 dark:text-zinc-400 text-xl w-3/4",children:"El caos de datos no estructurados detecta tu presencia (Scroll). Lentamente, la gravedad cuántica de tu scroll agrupa los píxeles para formar la esfera de contención."})]})]})}),e.jsxs("section",{className:"min-h-screen py-32 flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-900/10 border-y border-gray-800",children:[e.jsx("h2",{className:"text-center font-sans text-4xl mb-10 text-zinc-500 tracking-tight ",children:"Sujetos Corruptos (Pasa el cursor)"}),e.jsx("div",{className:"flex gap-20",children:e.jsx(n,{})}),e.jsx("p",{className:"mt-8 text-gray-500 font-sans text-sm",children:"Impulsado por MeshDistortionMaterial y renderizado de Vértices GPU."})]}),e.jsxs("section",{className:"relative w-full border-t-[4px] border-blue-500",children:[e.jsx(a,{}),e.jsx("div",{className:"h-screen flex items-center justify-center bg-black",children:e.jsx("h1",{className:"text-blue-500 text-3xl font-sans",children:"END OF LINE."})})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-blue-500 selection:text-black">
      
      {/* Historia 1: Ensamblaje de Partículas Magnéticas */}
      <section className="relative w-full h-[300vh]">
        <div className="sticky top-0 h-screen w-full flex">
          {/* El canvas se encarga de leer su propio contenedor ScrollControls */}
          <div className="w-1/2 h-full absolute right-0">
             <WebGLHologram />
          </div>
          
          <div className="w-1/2 h-full flex flex-col justify-center pl-20 z-10 pointer-events-none">
              <h2 className="text-blue-500 font-sans text-5xl mb-4">ASIMILACIÓN 01:</h2>
              <p className="font-sans text-zinc-500 dark:text-zinc-400 text-xl w-3/4">
                El caos de datos no estructurados detecta tu presencia (Scroll). 
                Lentamente, la gravedad cuántica de tu scroll agrupa los píxeles 
                para formar la esfera de contención.
              </p>
          </div>
        </div>
      </section>
      
      {/* Historia 2: Imágenes Corruptas Habilitadas por WebGL */}
      <section className="min-h-screen py-32 flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-900/10 border-y border-gray-800">
         <h2 className="text-center font-sans text-4xl mb-10 text-zinc-500 tracking-tight ">
            Sujetos Corruptos (Pasa el cursor)
         </h2>
         <div className="flex gap-20">
             {/* Componente WebGL para distorsión de la imagen */}
             <WebGLDistortionImage />
         </div>
         <p className="mt-8 text-gray-500 font-sans text-sm">
           Impulsado por MeshDistortionMaterial y renderizado de Vértices GPU.
         </p>
      </section>
      
      {/* Historia 3: Túnel de Escape (Inmersión Total) */}
      {/* 
        This acts as a scroll wrapper to trigger the Tunnel effect. 
       */}
      <section className="relative w-full border-t-[4px] border-blue-500">
         <WebGLTunnel />
         <div className="h-screen flex items-center justify-center bg-black">
            <h1 className="text-blue-500 text-3xl font-sans">END OF LINE.</h1>
         </div>
      </section>
      
    </div>
}`,...s.parameters?.docs?.source}}};const g=["ThreeJS_Showcase"];export{s as ThreeJS_Showcase,g as __namedExportsOrder,b as default};
