import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sg-label')
export class SgLabel extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-size: var(--sg-font-size-sm);
      font-weight: var(--sg-font-weight-medium);
      color: var(--sg-color-on-surface);
      margin-bottom: var(--sg-space-xs);
    }
    :host([required])::after {
      content: ' *';
      color: var(--sg-color-error);
    }
  `;

  @property({ type: Boolean, reflect: true }) accessor required = false;

  override render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sg-label': SgLabel;
  }
}
