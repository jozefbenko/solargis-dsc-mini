import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sg-switch')
export class SgSwitch extends LitElement {
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
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
      pointer-events: none;
    }
    .track {
      position: relative;
      width: 36px;
      height: 20px;
      border-radius: var(--sg-shape-round);
      background: var(--sg-color-outline);
      transition: background var(--sg-duration-fast) var(--sg-easing-standard);
    }
    .thumb {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--sg-color-surface);
      box-shadow: var(--sg-elevation-1);
      transition: transform var(--sg-duration-fast) var(--sg-easing-standard);
    }
    input:checked + .track {
      background: var(--sg-color-primary);
    }
    input:checked + .track .thumb {
      transform: translateX(16px);
    }
    input:focus-visible + .track {
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
        <span class="track"><span class="thumb"></span></span>
        <slot></slot>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sg-switch': SgSwitch;
  }
}
