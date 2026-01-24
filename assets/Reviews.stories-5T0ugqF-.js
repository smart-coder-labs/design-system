import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-B9hmpDEG.js";import{R as i,a as p}from"./Reviews-B3RKx1N1.js";import{A as t,a as n,b as c}from"./Avatar-htziZKud.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./index-B_jtOnfb.js";const R={title:"Data Display/Reviews & Ratings",component:i,tags:[]},d=[{id:1,author:"Ana Gomez",rating:5,date:"2025-11-01",text:"Excelente producto, lo recomiendo.",avatar:a.jsxs(t,{children:[a.jsx(n,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(c,{children:"CN"})]})},{id:2,author:"Luis Perez",rating:4,date:"2025-10-12",text:"Muy buena relación calidad-precio.",avatar:a.jsxs(t,{children:[a.jsx(n,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(c,{children:"CN"})]})},{id:3,author:"Carla Ruiz",rating:3,date:"2025-09-28",text:"Bien, pero esperaba más.",avatar:a.jsxs(t,{children:[a.jsx(n,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(c,{children:"CN"})]})}],e={render:()=>a.jsx("div",{className:"p-6",children:a.jsx(i,{reviews:d})})},s={render:()=>{const[o,l]=m.useState(3);return a.jsxs("div",{className:"p-6",children:[a.jsx("div",{className:"mb-4",children:"Interactivo:"}),a.jsx(p,{value:o,onChange:l}),a.jsxs("div",{className:"mt-3",children:["Valor actual: ",o]})]})}},r={render:()=>a.jsx("div",{className:"p-6",children:a.jsx(i,{reviews:d,compact:!0})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6">
            <ReviewsList reviews={sample} />
        </div>
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(3);
    return <div className="p-6">
                <div className="mb-4">Interactivo:</div>
                <RatingStars value={value} onChange={setValue} />
                <div className="mt-3">Valor actual: {value}</div>
            </div>;
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6">
            <ReviewsList reviews={sample} compact />
        </div>
}`,...r.parameters?.docs?.source}}};const b=["Default","RatingOnly","Compact"];export{r as Compact,e as Default,s as RatingOnly,b as __namedExportsOrder,R as default};
