import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Ns4lj-Vt.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";async function o(e){if(typeof window>`u`)return;if(window.google&&window.google.maps)return window.google;let t=document.querySelector(`script[data-gmaps]`);if(t)return await new Promise(e=>{t.addEventListener(`load`,()=>e())}),window.google;let n=document.createElement(`script`);return n.setAttribute(`data-gmaps`,`1`),n.src=`https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(e)}&libraries=places`,n.async=!0,n.defer=!0,document.head.appendChild(n),await new Promise((e,t)=>{n.onload=()=>e(),n.onerror=()=>t(Error(`Failed to load Google Maps script`))}),window.google}var s,c,l,u=e((()=>{s=t(n()),r(),c=a(),l=({onSelect:e,apiKey:t,placeholder:n=`Search address`,className:r=``,minLength:a=3})=>{let[l,u]=(0,s.useState)(!1),[d,f]=(0,s.useState)(null),[p,m]=(0,s.useState)(``),[h,g]=(0,s.useState)([]),[_,v]=(0,s.useState)(-1),y=(0,s.useRef)(null),b=(0,s.useRef)(null),x=(0,s.useRef)(null);(0,s.useEffect)(()=>{let e=!0,n=t;if(!n){f("Google Maps API key not provided. Pass the `apiKey` prop to AddressSelector.");return}return o(n).then(t=>{if(!e)return;y.current=new t.maps.places.AutocompleteService;let n=document.createElement(`div`);b.current=new t.maps.places.PlacesService(n),u(!0)}).catch(e=>{console.error(e),f(String(e?.message??e))}),()=>{e=!1}},[t]),(0,s.useEffect)(()=>{if(!l||!y.current)return;if(p.length<a){g([]);return}let e=!1;return y.current.getPlacePredictions({input:p},(t,n)=>{e||(g(t??[]),v(-1))}),()=>{e=!0}},[p,l,a]);let S=t=>{b.current&&b.current.getDetails({placeId:t.place_id},(n,r)=>{if(r!==window.google.maps.places.PlacesServiceStatus.OK){console.warn(`PlacesService getDetails failed`,r),e?.({id:t.place_id,placeId:t.place_id,description:t.description,raw:t});return}let i={id:t.place_id,placeId:t.place_id,description:t.description,address:n?.formatted_address,raw:n};n?.geometry?.location&&(i.lat=n.geometry.location.lat(),i.lng=n.geometry.location.lng()),m(n?.formatted_address??t.description??``),g([]),e?.(i)})};return(0,s.useEffect)(()=>{let e=e=>{x.current&&(x.current.contains(e.target)||g([]))};return document.addEventListener(`click`,e),()=>document.removeEventListener(`click`,e)},[]),(0,c.jsxs)(`div`,{ref:x,className:i(`relative w-full`,r),children:[(0,c.jsx)(`input`,{type:`search`,placeholder:n,value:p,onChange:e=>m(e.target.value),onKeyDown:e=>{h.length!==0&&(e.key===`ArrowDown`?(e.preventDefault(),v(e=>Math.min(e+1,h.length-1))):e.key===`ArrowUp`?(e.preventDefault(),v(e=>Math.max(e-1,0))):e.key===`Enter`?(e.preventDefault(),_>=0&&_<h.length&&S(h[_])):e.key===`Escape`&&g([]))},className:`w-full px-3 py-2 rounded-lg border border-border-primary bg-surface-secondary`,"aria-autocomplete":`list`,"aria-expanded":h.length>0,"aria-owns":`address-selector-list`}),d&&(0,c.jsx)(`div`,{className:`mt-2 text-sm text-red-600`,children:d}),h.length>0&&(0,c.jsx)(`ul`,{id:`address-selector-list`,role:`listbox`,className:`absolute z-20 left-0 right-0 mt-2 bg-surface-primary border border-border-primary rounded-md shadow-lg max-h-64 overflow-auto`,children:h.map((e,t)=>(0,c.jsxs)(`li`,{role:`option`,"aria-selected":t===_,className:i(`px-3 py-2 cursor-pointer hover:bg-surface-primary`,t===_?`bg-surface-primary`:``),onMouseDown:t=>{t.preventDefault(),S(e)},onMouseEnter:()=>v(t),children:[(0,c.jsx)(`div`,{className:`text-sm font-medium`,children:e.structured_formatting.main_text}),(0,c.jsx)(`div`,{className:`text-xs text-text-tertiary`,children:e.structured_formatting.secondary_text??e.description})]},e.place_id))})]})},l.__docgenInfo={description:``,methods:[],displayName:`AddressSelector`,props:{onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(place: PlaceDetails) => void`,signature:{arguments:[{type:{name:`PlaceDetails`},name:`place`}],return:{name:`void`}}},description:`onSelect fires when the user chooses a place (place details provided)`},apiKey:{required:!1,tsType:{name:`string`},description:`optional API key (if not provided component will try window.__GMAPS_API_KEY__)`},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Search address'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},minLength:{required:!1,tsType:{name:`number`},description:`minimum characters before querying`,defaultValue:{value:`3`,computed:!1}}}}})),d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{u(),d=a(),f={title:`Forms/AddressSelector`,component:l,tags:[`autodocs`]},p={args:{placeholder:`Search address`,minLength:3,apiKey:`demo-key`}},m={args:{placeholder:`Enter your location...`,minLength:2,apiKey:`demo-key`}},h={args:{placeholder:`Type at least 4 characters`,minLength:4,apiKey:`demo-key`}},g={args:{placeholder:`Search address`,minLength:3}},_={args:{placeholder:`Address search disabled`,minLength:3,apiKey:`demo-key`,disabled:!0}},v={args:{placeholder:`Enter your address`,minLength:2,apiKey:`demo-key`},decorators:[e=>(0,d.jsx)(`div`,{className:`max-w-sm mx-auto`,children:(0,d.jsx)(e,{})})]},y={args:{placeholder:`Search a very long address with many characters`,minLength:10,apiKey:`demo-key`}},b={args:{placeholder:`Type to see selection demo`,minLength:3,apiKey:`demo-key`,onSelect:e=>console.log(`Selected:`,e)}},x={args:{placeholder:`Search address`,minLength:3,apiKey:`demo-key`},decorators:[e=>(0,d.jsx)(`div`,{className:`dark p-4 bg-gray-900 rounded-lg`,children:(0,d.jsx)(e,{})})]},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search address',
    minLength: 3,
    apiKey: 'demo-key'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your location...',
    minLength: 2,
    apiKey: 'demo-key'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type at least 4 characters',
    minLength: 4,
    apiKey: 'demo-key'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search address',
    minLength: 3
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Address search disabled',
    minLength: 3,
    apiKey: 'demo-key',
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your address',
    minLength: 2,
    apiKey: 'demo-key'
  },
  decorators: [Story => <div className="max-w-sm mx-auto">
                <Story />
            </div>]
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search a very long address with many characters',
    minLength: 10,
    apiKey: 'demo-key'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type to see selection demo',
    minLength: 3,
    apiKey: 'demo-key',
    onSelect: place => console.log('Selected:', place)
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search address',
    minLength: 3,
    apiKey: 'demo-key'
  },
  decorators: [Story => <div className="dark p-4 bg-gray-900 rounded-lg">
                <Story />
            </div>]
}`,...x.parameters?.docs?.source}}},S=[`Default`,`CustomPlaceholder`,`LongerMinLength`,`WithoutApiKey`,`Disabled`,`Mobile`,`TruncatedAddress`,`WithOnSelect`,`DarkMode`]}))();export{m as CustomPlaceholder,x as DarkMode,p as Default,_ as Disabled,h as LongerMinLength,v as Mobile,y as TruncatedAddress,b as WithOnSelect,g as WithoutApiKey,S as __namedExportsOrder,f as default};