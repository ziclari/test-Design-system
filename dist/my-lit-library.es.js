var n = Object.defineProperty;
var r = (e, t, s) => t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var o = (e, t, s) => r(e, typeof t != "symbol" ? t + "" : t, s);
import { LitElement as c, css as l, html as p } from "lit";
class i extends c {
  constructor() {
    super(), this.title = "Componente Lit con SCSS";
  }
  render() {
    return p`
      <h2>${this.title}</h2>
      <p>Contenido del componente.</p>
    `;
  }
}
o(i, "styles", l`
    :host {
      display: block;
    }
  `), o(i, "properties", {
  title: { type: String }
});
customElements.define("my-component", i);
export {
  i as MyComponent
};
