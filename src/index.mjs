import assert from 'node:assert/strict';
import { signatureOf, signatureId } from '@x12i/memorix-scoper-functions';
const common = { profileId: 'fixture-profile', question: 'Summarize asset coverage' };
const first = signatureOf({ ...common, focus: { objectTypes: ['asset'], contentTypes: ['core'], recordIds: ['asset-1'] } });
const second = signatureOf({ ...common, focus: { objectTypes: ['asset'], contentTypes: ['core'], recordIds: ['asset-2'] } });
assert.equal(signatureId(first), signatureId(second));
assert.notEqual(signatureId(first), signatureId(signatureOf({ ...common, question: 'Find missing owners' })));
console.log({ signature: first, functionId: signatureId(first) });
