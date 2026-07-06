import { describe, expect, it } from 'vitest';
import { createNote, getNote } from './notes';

describe('notes', () => {
  it('returns a note to its owner', () => {
    const created = createNote('user-1', 'Groceries', 'milk, eggs');
    const fetched = getNote(created.id, 'user-1');
    expect(fetched?.title).toBe('Groceries');
  });
});
