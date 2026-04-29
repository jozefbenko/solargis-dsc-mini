import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sg-input')
export class SgInput extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
      width: 100%;
    }
    input {
      font: inherit;
      width: 100%;
      box-sizing: border-box;
      padding: var(--sg-space-sm) var(--sg-space-md);
      border-radius: var(--sg-shape-md);
      border: 1px solid var(--sg-color-outline);
      background: var(--sg-color-surface);
      color: var(--sg-color-on-surface);
      transition:
        border-color var(--sg-duration-fast) var(--sg-easing-standard),
        box-shadow var(--sg-duration-fast) var(--sg-easing-standard);
    }
    input::placeholder {
      color: var(--sg-color-on-surface-variant);
    }
    input:focus {
      outline: none;
      border-color: var(--sg-color-primary);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--sg-color-primary) 25%, transparent);
    }
    input:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background: var(--sg-color-surface-variant);
    }
    :host([invalid]) input {
      border-color: var(--sg-color-error);
    }
    :host([invalid]) input:focus {
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--sg-color-error) 25%, transparent);
    }
  `;

  @property({ type: String }) accessor type = 'text';
  @property({ type: String }) accessor value = '';
  @property({ type: String }) accessor placeholder = '';
  @property({ type: String }) accessor name = '';
  @property({ type: Boolean, reflect: true }) accessor disabled = false;
  @property({ type: Boolean, reflect: true }) accessor invalid = false;

  private handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    this.dispatchEvent(
      new CustomEvent('sg-input', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  };

  override render() {
    return html`
      <input
        .type=${this.type}
        .value=${this.value}
        placeholder=${this.placeholder}
        name=${this.name}
        ?disabled=${this.disabled}
        @input=${this.handleInput}
      />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sg-input': SgInput;
  }
}
