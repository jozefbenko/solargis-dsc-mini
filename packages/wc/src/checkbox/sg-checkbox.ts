import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sg-checkbox')
export class SgCheckbox extends LitElement {
  static override styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
    }
    :host([disabled]) {
      cursor: not-allowed;
      opacity: 0.5;
    }
    label {
      display: inline-flex;
      align-items: center;
      gap: var(--sg-space-sm);
      cursor: inherit;
      font-size: var(--sg-font-size-sm);
      color: var(--sg-color-on-surface);
    }
    input {
      appearance: none;
      width: 16px;
      height: 16px;
      margin: 0;
      border: 1px solid var(--sg-color-outline);
      border-radius: var(--sg-shape-sm);
      background: var(--sg-color-surface);
      cursor: inherit;
      display: grid;
      place-items: center;
      transition:
        background var(--sg-duration-fast) var(--sg-easing-standard),
        border-color var(--sg-duration-fast) var(--sg-easing-standard);
    }
    input:checked {
      background: var(--sg-color-primary);
      border-color: var(--sg-color-primary);
    }
    input:checked::after {
      content: '';
      width: 12px;
      height: 12px;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='white' d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
      background-size: contain;
      background-repeat: no-repeat;
    }
    input:focus-visible {
      outline: 2px solid var(--sg-color-primary);
      outline-offset: 2px;
    }
  `;

  @property({ type: Boolean, reflect: true }) accessor checked = false;
  @property({ type: Boolean, reflect: true }) accessor disabled = false;

  private handleChange = (e: Event) => {
    const t = e.target as HTMLInputElement;
    this.checked = t.checked;
    this.dispatchEvent(
      new CustomEvent('sg-change', {
        detail: { checked: this.checked },
        bubbles: true,
        composed: true,
      }),
    );
  };

  override render() {
    return html`
      <label>
        <input
          type="checkbox"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.handleChange}
        />
        <slot></slot>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sg-checkbox': SgCheckbox;
  }
}
