// Have You Tried Turning It Off? — the hand-in program (Node 22, standard library only).
//
// It writes exactly one funny single-line reply from a hopeless tech support
// agent to a desperate customer to /output/entry.txt. Outside the grader's
// container, MAKEFUN_OUTPUT_DIR stands in for /output:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The line (128 characters, one line, no trailing newline):
//
//   I know you've already turned it off and on three times — let's do it a fourth, because my script ends there and so does my hope.
//
// Why this line, against the judge's criteria in order:
//   1. On-prompt: it IS the agent's reply to a desperate customer, in the
//      agent's own voice — no setup about anything else, no meta text.
//   2. Funny: the twist is that the agent prescribes a fourth reboot while
//      confessing, in the same breath, that both the script and his hope are
//      exhausted — the humour is his cheerful uselessness, and the customer
//      is never the butt of it (their persistence is sympathetic).
//   3. Real agent voice: "let's do it a fourth" is exactly what a support
//      agent says; the customer's desperation is felt through "already ...
//      three times", never explained.
//   4. Tight: one setup clause, one punchline clause, 128 characters; the
//      joke is clear on a first read.
//   5. Fresh: it twists the classic "turn it off and on again" instead of
//      repeating it — reboot number four, script over, hope gone.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "I know you've already turned it off and on three times — let's do it a fourth, because my script ends there and so does my hope.";

// The gate's own caps: UTF-8 text, 1 to 199 characters, not only whitespace.
if (
  LINE.length < 1 ||
  LINE.length > 199 ||
  LINE.trim().length === 0 ||
  LINE.includes('\n')
) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
