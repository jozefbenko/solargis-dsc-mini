import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sg-tabs')
export class SgTabs extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-size: var(--sg-font-size-sm);
    }
    .tablist {
      display: flex;
      gap: var(--sg-space-md);
      border-bottom: 1px solid var(--sg-color-outline-variant);
      margin-bottom: var(--sg-space-md);
    }
    button {
      all: unset;
      cursor: pointer;
      padding: var(--sg-space-sm) var(--sg-space-md);
      font-weight: var(--sg-font-weight-medium);
      color: var(--sg-color-on-surface-variant);
      border-bottom: 2px solid transparent;
      transition:
        color var(--sg-duration-fast) var(--sg-easing-standard),
        border-color var(--sg-duration-fast) var(--sg-easing-standard);
    }
    button[aria-selected='true'] {
      color: var(--sg-color-primary);
      border-bottom-color: var(--sg-color-primary);
    }
    button:hover:not([aria-selected='true']) {
      color: var(--sg-color-on-surface);
    }
    button:focus-visible {
      outline: 2px solid var(--sg-color-primary);
      outline-offset: 2px;
    }
    .panel {
      color: var(--sg-color-on-surface);
    }
  `;

  @property({ type: Number }) accessor selected = 0;
  @property({ attribute: false }) accessor tabs: string[] = [];

  private select(i: number) {
    this.selected = i;
    this.dispatchEvent(
      new CustomEvent('sg-change', {
        detail: { selected: i },
        bubbles: true,
        composed: true,
      }),
    );
  }

  override render() {
    const slotName = `panel-${this.selected}`;
    return html`
      <div class="tablist" role="tablist">
        ${this.tabs.map(
          (label, i) => html`
            <button
              role="tab"
              aria-selected=${this.selected === i ? 'true' : 'false'}
              @click=${() => this.select(i)}
            >
              ${label}
            </button>
          `,
        )}
      </div>
      <div class="panel" role="tabpanel">
        <slot name=${slotName}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sg-tabs': SgTabs;
  }
}
