import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sg-button')
export class SgButton extends LitElement {
  static override styles = css`
    :host {
      display: inline-flex;
    }
    button {
      font: inherit;
      font-weight: var(--sg-font-weight-medium);
      padding: var(--sg-space-sm) var(--sg-space-lg);
      border-radius: var(--sg-shape-md);
      border: 1px solid var(--sg-color-primary);
      background: var(--sg-color-primary);
      color: var(--sg-color-on-primary);
      cursor: pointer;
      transition:
        background var(--sg-duration-fast) var(--sg-easing-standard),
        border-color var(--sg-duration-fast) var(--sg-easing-standard),
        opacity var(--sg-duration-fast) var(--sg-easing-standard);
    }
    button:hover:not(:disabled) {
      background: var(--sg-color-primary-hover);
      border-color: var(--sg-color-primary-hover);
    }
    button:active:not(:disabled) {
      background: var(--sg-color-primary-active);
      border-color: var(--sg-color-primary-active);
    }
    button:focus-visible {
      outline: 2px solid var(--sg-color-primary);
      outline-offset: 2px;
    }
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    :host([size='sm']) button {
      padding: var(--sg-space-xs) var(--sg-space-md);
      font-size: var(--sg-font-size-sm);
    }
    :host([size='lg']) button {
      padding: var(--sg-space-md) var(--sg-space-xl);
      font-size: var(--sg-font-size-lg);
    }

    :host([variant='ghost']) button,
    :host([variant='outline']) button {
      background: transparent;
      color: var(--sg-color-primary);
    }
    :host([variant='ghost']) button {
      border-color: transparent;
    }
    :host([variant='ghost']) button:hover:not(:disabled),
    :host([variant='outline']) button:hover:not(:disabled) {
      background: var(--sg-color-surface-variant);
      border-color: var(--sg-color-primary);
    }

    :host([variant='danger']) button {
      background: var(--sg-color-error);
      border-color: var(--sg-color-error);
      color: var(--sg-color-on-error);
    }
  `;

  @property({ type: Boolean, reflect: true }) accessor disabled = false;
  @property({ type: String, reflect: true }) accessor variant:
    | 'solid'
    | 'ghost'
    | 'outline'
    | 'danger' = 'solid';
  @property({ type: String, reflect: true }) accessor size: 'sm' | 'md' | 'lg' = 'md';

  override render() {
    return html`<button ?disabled=${this.disabled}><slot></slot></button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sg-button': SgButton;
  }
}
