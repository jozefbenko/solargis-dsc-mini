import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sg-radio')
export class SgRadio extends LitElement {
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
      border-radius: 50%;
      background: var(--sg-color-surface);
      cursor: inherit;
      display: grid;
      place-items: center;
      transition: border-color var(--sg-duration-fast) var(--sg-easing-standard);
    }
    input:checked {
      border-color: var(--sg-color-primary);
    }
    input:checked::after {
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--sg-color-primary);
    }
    input:focus-visible {
      outline: 2px solid var(--sg-color-primary);
      outline-offset: 2px;
    }
  `;

  @property({ type: String, reflect: true }) accessor name = '';
  @property({ type: String }) accessor value = '';
  @property({ type: Boolean, reflect: true }) accessor checked = false;
  @property({ type: Boolean, reflect: true }) accessor disabled = false;

  private handleChange = (e: Event) => {
    const t = e.target as HTMLInputElement;
    this.checked = t.checked;
    this.dispatchEvent(
      new CustomEvent('sg-change', {
        detail: { value: this.value, checked: this.checked },
        bubbles: true,
        composed: true,
      }),
    );
  };

  override render() {
    return html`
      <label>
        <input
          type="radio"
          name=${this.name}
          .value=${this.value}
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
    'sg-radio': SgRadio;
  }
}
