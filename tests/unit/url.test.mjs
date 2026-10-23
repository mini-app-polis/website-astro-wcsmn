// safeUrl() is the scheme check for hrefs built from data. Runs on Node's
// built-in type stripping (Node >= 22.18).

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { safeUrl } from '../../src/lib/url.ts';

test('safeUrl returns http and https URLs unchanged', () => {
  assert.equal(safeUrl('https://www.facebook.com/groups/x'), 'https://www.facebook.com/groups/x');
  assert.equal(safeUrl('http://example.com/a?b=1#c'), 'http://example.com/a?b=1#c');
});

test('safeUrl returns site-relative paths unchanged', () => {
  assert.equal(safeUrl('/organizations/x/'), '/organizations/x/');
  assert.equal(safeUrl('/'), '/');
});

test('safeUrl trims surrounding whitespace', () => {
  assert.equal(safeUrl('  https://example.com  '), 'https://example.com');
});

test('safeUrl rejects script and data schemes, whatever their case', () => {
  assert.equal(safeUrl('javascript:alert(1)'), null);
  assert.equal(safeUrl('JavaScript:alert(1)'), null);
  assert.equal(safeUrl(' javascript:alert(1)'), null);
  assert.equal(safeUrl('data:text/html,<script>alert(1)</script>'), null);
  assert.equal(safeUrl('vbscript:msgbox(1)'), null);
});

test('safeUrl rejects protocol-relative and malformed input', () => {
  assert.equal(safeUrl('//evil.example/x'), null);
  assert.equal(safeUrl('/\\evil.example/x'), null);
  assert.equal(safeUrl('organizations/x'), null);
  assert.equal(safeUrl('https://'), null);
  assert.equal(safeUrl(''), null);
});

test('safeUrl rejects null, undefined and non-strings', () => {
  assert.equal(safeUrl(null), null);
  assert.equal(safeUrl(undefined), null);
  assert.equal(safeUrl(42), null);
});
