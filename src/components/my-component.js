import { LitElement, html, css } from 'lit';

// Importa los estilos compilados
export class MyComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  static properties = {
    title: { type: String },
  };

  constructor() {
    super();
    this.title = 'Componente Lit con SCSS';
  }

  render() {
    return html`
      <h2>${this.title}</h2>
      <p>Contenido del componente.</p>
    `;
  }
}

customElements.define('my-component', MyComponent);
