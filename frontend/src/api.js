const BASE = 'http://localhost:8080/api';

// ── Aliases ─────────────────────────────────────────────────────────────────
export async function generateAlias() {
  const res = await fetch(`${BASE}/aliases/generate`);
  if (!res.ok) throw new Error('Failed to generate alias');
  return res.text(); // returns plain string e.g. "Serene Fox"
}

// ── Doubts ───────────────────────────────────────────────────────────────────
export async function getAllDoubts() {
  const res = await fetch(`${BASE}/doubts`);
  if (!res.ok) throw new Error('Failed to fetch doubts');
  return res.json(); // returns List<Doubt>
}

export async function createDoubt(authorId, questionText, imageUrl) {
  const res = await fetch(`${BASE}/doubts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ authorId, questionText, imageUrl }),
  });
  if (!res.ok) throw new Error('Failed to create doubt');
  return res.json(); // returns boolean
}

export async function resolveDoubt(doubtId) {
  const res = await fetch(`${BASE}/doubts/${doubtId}/resolve`, {
    method: 'PUT',
  });
  if (!res.ok) throw new Error('Failed to resolve doubt');
  return res.json(); // returns boolean
}

// ── Replies ──────────────────────────────────────────────────────────────────
export async function getReplies(doubtId) {
  const res = await fetch(`${BASE}/replies/doubt/${doubtId}`);
  if (!res.ok) throw new Error('Failed to fetch replies');
  return res.json(); // returns List<DoubtReply>
}

export async function postReply(parentId, authorId, replyText, imageUrl) {
  const res = await fetch(`${BASE}/replies`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ parentId, authorId, replyText, imageUrl }),
  });
  if (!res.ok) throw new Error('Failed to post reply');
  return res.json(); // returns boolean
}

// ── Prompts ──────────────────────────────────────────────────────────────────
export async function generatePrompt(preferences) {
  // preferences = { context, imageUrl, responseType, length, extraInstructions }
  const res = await fetch(`${BASE}/prompts/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(preferences),
  });
  if (!res.ok) throw new Error('Failed to generate prompt');
  return res.text(); // returns plain string
}
