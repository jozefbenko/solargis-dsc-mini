import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sg-badge')
export class SgBadge extends LitElement {
  static override styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0 var(--sg-space-sm);
      min-height: 18px;
      min-width: 18px;
      box-sizing: border-box;
      border-radius: var(--sg-shape-round);
      font-size: var(--sg-font-size-xs);
      font-weight: var(--sg-font-weight-medium);
      line-height: 1;
      background: var(--sg-color-primary);
      color: var(--sg-color-on-primary);
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
    :host([variant='info']) {
      background: var(--sg-color-info);
      color: var(--sg-color-on-info);
    }
    :host([variant='neutral']) {
      background: var(--sg-color-surface-variant);
      color: var(--sg-color-on-surface-variant);
    }
  `;

  @property({ type: String, reflect: true }) accessor variant:
    | 'primary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info'
    | 'neutral' = 'primary';

  override render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sg-badge': SgBadge;
  }
}
