import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sg-modal')
export class SgModal extends LitElement {
  static override styles = css`
    :host {
      display: none;
      position: fixed;
      inset: 0;
      z-index: var(--sg-z-modal);
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
    }
    :host([open]) {
      display: flex;
    }
    .panel {
      background: var(--sg-color-surface);
      border-radius: var(--sg-shape-lg);
      padding: var(--sg-space-xl);
      max-width: 500px;
      width: 90%;
      box-shadow: var(--sg-elevation-4);
      color: var(--sg-color-on-surface);
    }
    ::slotted([slot='header']) {
      font-size: var(--sg-font-size-xl);
      font-weight: var(--sg-font-weight-bold);
      margin: 0 0 var(--sg-space-lg) 0;
    }
    ::slotted([slot='footer']) {
      display: flex;
      justify-content: flex-end;
      gap: var(--sg-space-sm);
      margin-top: var(--sg-space-lg);
    }
  `;

  @property({ type: Boolean, reflect: true }) accessor open = false;

  private handleBackdropClick = (e: Event) => {
    if (e.target === this) this.close();
  };

  private close() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('sg-close', { bubbles: true, composed: true }));
  }

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.handleBackdropClick);
  }

  override render() {
    return html`
      <div class="panel">
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sg-modal': SgModal;
  }
}
