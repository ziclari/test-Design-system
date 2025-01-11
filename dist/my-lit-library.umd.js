(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("lit")):typeof define=="function"&&define.amd?define(["exports","lit"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.MyLitLibrary={},t.lit))})(this,function(t,e){"use strict";var o=Object.defineProperty;var s=(t,e,i)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var n=(t,e,i)=>s(t,typeof e!="symbol"?e+"":e,i);class i extends e.LitElement{constructor(){super(),this.title="Componente Lit con SCSS"}render(){return e.html`
      <h2>${this.title}</h2>
      <p>Contenido del componente.</p>
    `}}n(i,"styles",e.css`
    :host {
      display: block;
    }
  `),n(i,"properties",{title:{type:String}}),customElements.define("my-component",i),t.MyComponent=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});
