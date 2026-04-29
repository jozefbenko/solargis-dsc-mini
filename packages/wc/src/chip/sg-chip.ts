import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sg-chip')
export class SgChip extends LitElement {
  static override styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: var(--sg-space-xs);
      padding: var(--sg-space-xs) var(--sg-space-md);
      border-radius: var(--sg-shape-round);
      background: var(--sg-color-surface-variant);
      color: var(--sg-color-on-surface-variant);
      font-size: var(--sg-font-size-sm);
      line-height: 1.4;
    }
    :host([variant='primary']) {
      background: var(--sg-color-primary);
      color: var(--sg-color-on-primary);
    }
    button {
      all: unset;
      cursor: pointer;
      width: 16px;
      height: 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      opacity: 0.7;
      font-size: var(--sg-font-size-md);
      line-height: 1;
    }
    button:hover {
      opacity: 1;
      background: rgba(0, 0, 0, 0.1);
    }
    button:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 1px;
    }
  `;

  @property({ type: String, reflect: true }) accessor variant: 'neutral' | 'primary' = 'neutral';
  @property({ type: Boolean, reflect: true }) accessor removable = false;

  private handleRemove = () => {
    this.dispatchEvent(new CustomEvent('sg-remove', { bubbles: true, composed: true }));
  };

  override render() {
    return html`
      <slot></slot>
      ${
        this.removable
          ? html`<button @click=${this.handleRemove} aria-label="Remove">×</button>`
          : ''
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sg-chip': SgChip;
  }
}
