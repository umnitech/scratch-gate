import { describe, expect, it } from 'vitest';
import { slugify } from './slugify';

describe('slugify', () => {
  it('converts a title to a slug', () => {
    // expected value from the spec, not recomputed
    expect(slugify('Hello, World!')).toBe('hello-world');
  });

  it('trims and collapses separators', () => {
    expect(slugify('  Multiple   spaces & symbols  ')).toBe('multiple-spaces-symbols');
  });
});
