import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const ICONS = {
  info: 'ⓘ',
  success: '✓',
  warning: '⚠',
  error: '✕',
} as const;

type Variant = keyof typeof ICONS;

@customElement('sg-alert')
export class SgAlert extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      gap: var(--sg-space-md);
      padding: var(--sg-space-md) var(--sg-space-lg);
      border-radius: var(--sg-shape-md);
      background: var(--sg-color-info);
      color: var(--sg-color-on-info);
      font-size: var(--sg-font-size-sm);
      align-items: flex-start;
    }
    :host([variant='success']) {
      background: var(--sg-color-success);
      color: var(--sg-color-on-success);
    }
    :host([variant='warning']) {
      background: var(--sg-color-warning);
      color: var(--sg-color-on-warning);
    }
    :host([variant='error']) {
      background: var(--sg-color-error);
      color: var(--sg-color-on-error);
    }
    .icon {
      font-size: var(--sg-font-size-md);
      flex-shrink: 0;
      line-height: 1.4;
    }
    .content {
      flex: 1;
      line-height: 1.4;
    }
  `;

  @property({ type: String, reflect: true }) accessor variant: Variant = 'info';

  override render() {
    return html`
      <span class="icon">${ICONS[this.variant]}</span>
      <div class="content"><slot></slot></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sg-alert': SgAlert;
  }
}
