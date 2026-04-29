import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export interface SgSelectOption {
  value: string;
  label: string;
}

@customElement('sg-select')
export class SgSelect extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
      width: 100%;
    }
    select {
      font: inherit;
      width: 100%;
      box-sizing: border-box;
      padding: var(--sg-space-sm) var(--sg-space-2xl) var(--sg-space-sm) var(--sg-space-md);
      border-radius: var(--sg-shape-md);
      border: 1px solid var(--sg-color-outline);
      background-color: var(--sg-color-surface);
      color: var(--sg-color-on-surface);
      cursor: pointer;
      appearance: none;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3e%3cpath stroke='%231a1a1a' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none' d='M2 4l4 4 4-4'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right var(--sg-space-md) center;
      background-size: 12px;
      transition:
        border-color var(--sg-duration-fast) var(--sg-easing-standard),
        box-shadow var(--sg-duration-fast) var(--sg-easing-standard);
    }
    select:focus {
      outline: none;
      border-color: var(--sg-color-primary);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--sg-color-primary) 25%, transparent);
    }
    select:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background-color: var(--sg-color-surface-variant);
    }
  `;

  @property({ type: String }) accessor value = '';
  @property({ type: String }) accessor name = '';
  @property({ type: Boolean, reflect: true }) accessor disabled = false;
  @property({ attribute: false }) accessor options: SgSelectOption[] = [];

  private handleChange = (e: Event) => {
    const t = e.target as HTMLSelectElement;
    this.value = t.value;
    this.dispatchEvent(
      new CustomEvent('sg-change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  };

  override render() {
    return html`
      <select
        name=${this.name}
        .value=${this.value}
        ?disabled=${this.disabled}
        @change=${this.handleChange}
      >
        ${this.options.map(
          (o) =>
            html`<option value=${o.value} ?selected=${o.value === this.value}>${o.label}</option>`,
        )}
      </select>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sg-select': SgSelect;
  }
}
