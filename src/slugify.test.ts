import { describe, expect, it } from 'vitest';
import { slugify, uniqueSlug } from './slugify';

describe('slugify', () => {
  it('converts a title to a slug', () => {
    // expected value from the spec, not recomputed
    expect(slugify('Hello, World!')).toBe('hello-world');
  });

  it('trims and collapses separators', () => {
    expect(slugify('  Multiple   spaces & symbols  ')).toBe('multiple-spaces-symbols');
  });

  // Skipped on purpose: this is the red test for the T6 walk-away spike.
  // The ready-for-agent issue named after this test says: unskip, watch it fail, implement.
  it.skip('transliterates diacritics instead of dropping them', () => {
    expect(slugify('Crème Brûlée à la Française')).toBe('creme-brulee-a-la-francaise');
  });
});

describe('uniqueSlug', () => {
  it('returns the clean slug when nothing is taken', () => {
    expect(uniqueSlug('Hello World', () => false)).toBe('hello-world');
  });

  it('suffixes the first collision with -2, not -1', () => {
    const taken = new Set(['hello-world']);
    expect(uniqueSlug('Hello World', (s) => taken.has(s))).toBe('hello-world-2');
  });

  it('probes sequentially past consecutive collisions', () => {
    const taken = new Set(['hello-world', 'hello-world-2']);
    expect(uniqueSlug('Hello World', (s) => taken.has(s))).toBe('hello-world-3');
  });

  it('falls back to untitled when the title has no slug-able characters', () => {
    expect(uniqueSlug('!!!', () => false)).toBe('untitled');
  });

  it('suffixes the untitled fallback on collision', () => {
    const taken = new Set(['untitled']);
    expect(uniqueSlug('!!!', (s) => taken.has(s))).toBe('untitled-2');
  });

  it('lets the first publisher keep the un-suffixed slug', () => {
    const taken = new Set(['something-else']);
    expect(uniqueSlug('Hello World', (s) => taken.has(s))).toBe('hello-world');
  });
});
