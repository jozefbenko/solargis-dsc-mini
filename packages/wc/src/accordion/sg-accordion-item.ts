import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sg-accordion-item')
export class SgAccordionItem extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border-bottom: 1px solid var(--sg-color-outline-variant);
    }
    button {
      all: unset;
      width: 100%;
      box-sizing: border-box;
      cursor: pointer;
      padding: var(--sg-space-md) 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: var(--sg-font-size-sm);
      font-weight: var(--sg-font-weight-medium);
      color: var(--sg-color-on-surface);
    }
    button:focus-visible {
      outline: 2px solid var(--sg-color-primary);
      outline-offset: 2px;
    }
    .chevron {
      transition: transform var(--sg-duration-fast) var(--sg-easing-standard);
      color: var(--sg-color-on-surface-variant);
    }
    :host([open]) .chevron {
      transform: rotate(180deg);
    }
    .panel {
      max-height: 0;
      overflow: hidden;
      transition: max-height var(--sg-duration-normal) var(--sg-easing-standard);
      color: var(--sg-color-on-surface);
      font-size: var(--sg-font-size-sm);
    }
    :host([open]) .panel {
      max-height: 1000px;
    }
    .panel-inner {
      padding-bottom: var(--sg-space-md);
    }
  `;

  @property({ type: Boolean, reflect: true }) accessor open = false;
  @property({ type: String }) accessor heading = '';

  private toggle = () => {
    this.open = !this.open;
    this.dispatchEvent(
      new CustomEvent('sg-toggle', {
        detail: { open: this.open },
        bubbles: true,
        composed: true,
      }),
    );
  };

  override render() {
    return html`
      <button @click=${this.toggle} aria-expanded=${this.open}>
        <span>${this.heading}</span>
        <span class="chevron">▾</span>
      </button>
      <div class="panel">
        <div class="panel-inner"><slot></slot></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sg-accordion-item': SgAccordionItem;
  }
}
