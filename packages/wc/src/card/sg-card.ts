import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sg-card')
export class SgCard extends LitElement {
  static override styles = css`
    :host {
      display: block;
      background: var(--sg-color-surface);
      border: 1px solid var(--sg-color-outline-variant);
      border-radius: var(--sg-shape-lg);
      padding: var(--sg-space-lg);
      box-shadow: var(--sg-elevation-1);
    }
    :host([elevation='0']) {
      box-shadow: none;
    }
    :host([elevation='2']) {
      box-shadow: var(--sg-elevation-2);
    }
    :host([elevation='3']) {
      box-shadow: var(--sg-elevation-3);
    }
    ::slotted([slot='header']) {
      font-size: var(--sg-font-size-lg);
      font-weight: var(--sg-font-weight-medium);
      margin: 0 0 var(--sg-space-md) 0;
    }
    ::slotted([slot='footer']) {
      margin-top: var(--sg-space-md);
      padding-top: var(--sg-space-md);
      border-top: 1px solid var(--sg-color-outline-variant);
    }
  `;

  @property({ type: String, reflect: true }) accessor elevation: '0' | '1' | '2' | '3' = '1';

  override render() {
    return html`
      <slot name="header"></slot>
      <slot></slot>
      <slot name="footer"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sg-card': SgCard;
  }
}
