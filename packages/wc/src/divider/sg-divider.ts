import { css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sg-divider')
export class SgDivider extends LitElement {
  static override styles = css`
    :host {
      display: block;
      height: 1px;
      width: 100%;
      background: var(--sg-color-outline-variant);
      margin: var(--sg-space-md) 0;
    }
    :host([orientation='vertical']) {
      display: inline-block;
      height: 100%;
      width: 1px;
      margin: 0 var(--sg-space-md);
    }
  `;

  @property({ type: String, reflect: true }) accessor orientation: 'horizontal' | 'vertical' =
    'horizontal';
}

declare global {
  interface HTMLElementTagNameMap {
    'sg-divider': SgDivider;
  }
}
