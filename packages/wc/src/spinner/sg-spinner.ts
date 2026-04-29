import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sg-spinner')
export class SgSpinner extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
      width: 24px;
      height: 24px;
    }
    :host([size='sm']) {
      width: 16px;
      height: 16px;
    }
    :host([size='lg']) {
      width: 40px;
      height: 40px;
    }
    .ring {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border: 2px solid var(--sg-color-surface-variant);
      border-top-color: var(--sg-color-primary);
      border-radius: 50%;
      animation: sg-spin 0.8s linear infinite;
    }
    @keyframes sg-spin {
      to {
        transform: rotate(360deg);
      }
    }
  `;

  @property({ type: String, reflect: true }) accessor size: 'sm' | 'md' | 'lg' = 'md';

  override render() {
    return html`<div class="ring"></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sg-spinner': SgSpinner;
  }
}
