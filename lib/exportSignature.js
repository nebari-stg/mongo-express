import crypto from 'node:crypto';
import pbkdf2 from 'pbkdf2';

// Per-database signing key so export checksums can't be reused across databases.
export function exportSignature(secret, database, collection) {
  const key = pbkdf2.pbkdf2Sync(secret || 'mongo-express', database, 10000, 32, 'sha256');
  return crypto.createHmac('sha256', key).update(`${database}/${collection}`).digest('hex');
}
