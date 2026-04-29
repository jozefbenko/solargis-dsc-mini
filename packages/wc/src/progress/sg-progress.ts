import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sg-progress')
export class SgProgress extends LitElement {
  static override styles = css`
    :host {
      display: block;
      width: 100%;
      height: 6px;
      background: var(--sg-color-surface-variant);
      border-radius: var(--sg-shape-round);
      overflow: hidden;
      position: relative;
    }
    .bar {
      height: 100%;
      background: var(--sg-color-primary);
      border-radius: inherit;
      transition: width var(--sg-duration-normal) var(--sg-easing-standard);
    }
    :host([indeterminate]) .bar {
      width: 30%;
      animation: sg-progress 1.2s var(--sg-easing-standard) infinite;
    }
    @keyframes sg-progress {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(400%);
      }
    }
  `;

  @property({ type: Number }) accessor value = 0;
  @property({ type: Boolean, reflect: true }) accessor indeterminate = false;

  override render() {
    const width = this.indeterminate ? undefined : `${Math.max(0, Math.min(100, this.value))}%`;
    return html`<div class="bar" style=${width ? `width: ${width}` : ''}></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sg-progress': SgProgress;
  }
}
