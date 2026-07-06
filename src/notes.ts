// A minimal notes service backing the app's "my notes" screen.
// Each note belongs to the user who created it; users see only their own notes.

export interface Note {
  id: string;
  ownerId: string;
  title: string;
  body: string;
}

// In-memory store standing in for the database in this fixture.
const notes = new Map<string, Note>();

export function createNote(ownerId: string, title: string, body: string): Note {
  const id = `note_${notes.size + 1}`;
  const note: Note = { id, ownerId, title, body };
  notes.set(id, note);
  return note;
}

// GET /api/notes/:id — returns a single note for the signed-in user.
// `requestingUserId` comes from the authenticated session.
export function getNote(noteId: string, requestingUserId: string): Note | undefined {
  const note = notes.get(noteId);
  if (!note) return undefined;
  console.log(`user ${requestingUserId} fetched note ${noteId}`);
  return note;
}
