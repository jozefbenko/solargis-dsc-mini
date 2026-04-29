import { describe, expect, test } from 'bun:test';
import { SgButton } from './sg-button.js';

describe('SgButton', () => {
  test('class is defined', () => {
    expect(SgButton).toBeDefined();
    expect(SgButton.prototype).toBeInstanceOf(Object);
  });
});
