// Crea una aplicación 4 botones. Cada botón tendrá un color diferente (rojo, azul, verde y reestablecer)
// Cuando el usuario presione cada uno de estos botones, el contenedor (div) tendrá que pintarse del color que el botón indique
// Solo puedes usar una propiedad y NO puedes usar métodos, NI agregar más estilos

import { LitElement, html, css } from "lit";

export class changeColor extends LitElement {
  static get properties() {
    return {
      color: { type: String },
    };
  }

  static get styles() {
    return css`
      .red {
        background-color: red;
        color: white;
      }
      .blue {
        background-color: blue;
        color: white;
      }
      .green {
        background-color: green;
        color: white;
      }
      .reset {
        background-color: white;
        color: black;
      }
      .size {
        width: 100px;
        height: 100px;
      }
    `;
  }

  constructor() {
    super();
    this.color = "";
  }

  render() {
    return html` <div class="size"></div> `;
  }
}
customElements.define("change-color", changeColor);
