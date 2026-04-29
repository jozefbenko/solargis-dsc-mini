import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sg-button')
export class SgButton extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
    }
    button {
      font: inherit;
      padding: var(--sg-space-sm) var(--sg-space-lg);
      border-radius: var(--sg-shape-md);
      border: 1px solid var(--sg-color-primary);
      background: var(--sg-color-primary);
      color: var(--sg-color-on-primary);
      cursor: pointer;
      transition: opacity 120ms ease;
    }
    button:hover:not(:disabled) {
      opacity: 0.9;
    }
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    :host([variant='ghost']) button {
      background: transparent;
      color: var(--sg-color-primary);
    }
  `;

  @property({ type: Boolean, reflect: true }) accessor disabled = false;
  @property({ type: String, reflect: true }) accessor variant: 'solid' | 'ghost' = 'solid';

  override render() {
    return html`<button ?disabled=${this.disabled}><slot></slot></button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sg-button': SgButton;
  }
}
