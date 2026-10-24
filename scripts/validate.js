// Checks hltv-players.json before it reaches Lobbyscope users: valid JSON, known fields, sane formats,
// no duplicates. Run: node scripts/validate.js  (exit code 1 on any error).
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'hltv-players.json');
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
const HLTV_URL = /^https:\/\/www\.hltv\.org\/player\/(\d+)\/\S+$/;
// HLTV bodyshot (preferred) or, for players without one, their HLTV gallery picture. Both are signed CDN URLs.
const PHOTO = /^https:\/\/img-cdn\.hltv\.org\/(?:playerbodyshot\/[A-Za-z0-9_-]+\.png\?ixlib=java-2\.1\.0&w=400|gallerypicture\/[A-Za-z0-9_-]+\.(?:jpe?g|png)\?\S*)&s=[a-f0-9]{32}$/;
const FIELDS = new Set(['faceitId', 'faceit', 'name', 'team', 'country', 'hltvUrl', 'photo']);

const errors = [];
let list;
try {
  list = JSON.parse(fs.readFileSync(FILE, 'utf8'));
} catch (err) {
  console.error(`hltv-players.json is not valid JSON: ${err.message}`);
  process.exit(1);
}
if (!Array.isArray(list)) {
  console.error('hltv-players.json must be an array of players');
  process.exit(1);
}

const seen = { faceitId: new Map(), faceit: new Map(), hltv: new Map() };
const dupe = (kind, key, i, label) => {
  if (seen[kind].has(key)) errors.push(`${label}: duplicate ${kind} (also entry #${seen[kind].get(key)})`);
  else seen[kind].set(key, i);
};

list.forEach((p, i) => {
  const label = `#${i} ${p && p.name ? p.name : '(no name)'}`;
  if (!p || typeof p !== 'object' || Array.isArray(p)) return errors.push(`#${i}: must be an object`);
  for (const key of Object.keys(p)) if (!FIELDS.has(key)) errors.push(`${label}: unknown field "${key}"`);
  for (const key of FIELDS) if (key in p && typeof p[key] !== 'string') errors.push(`${label}: "${key}" must be a string`);

  if (!p.faceitId && !p.faceit) errors.push(`${label}: needs "faceitId" (preferred) or "faceit"`);
  if (p.faceitId && !UUID.test(p.faceitId)) errors.push(`${label}: "faceitId" must be a lowercase FACEIT user id (uuid)`);
  if (!p.name || !p.name.trim()) errors.push(`${label}: "name" is required`);
  const hltv = HLTV_URL.exec(p.hltvUrl || '');
  if (!hltv) errors.push(`${label}: "hltvUrl" must look like https://www.hltv.org/player/<id>/<nick>`);
  if (p.photo && !PHOTO.test(p.photo)) errors.push(`${label}: "photo" must be an HLTV bodyshot (w=400) or gallery picture URL (or empty)`);
  if (p.country && !/^[A-Z]{2}$/.test(p.country)) errors.push(`${label}: "country" must be a 2-letter uppercase code`);

  if (p.faceitId) dupe('faceitId', p.faceitId, i, label);
  if (p.faceit) dupe('faceit', p.faceit.toLowerCase(), i, label);
  if (hltv) dupe('hltv', hltv[1], i, label);
});

if (errors.length) {
  console.error(`${errors.length} problem(s) in hltv-players.json:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log(`hltv-players.json OK: ${list.length} players`);
