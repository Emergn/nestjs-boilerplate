import {strict} from 'assert';
import {readFileSync, existsSync} from 'fs';
import {resolve} from 'path';

export function readFile(path: string): string {
  path = resolve(process.cwd(), path);
  strict(existsSync(path), `Invalid path: ${path}`);
  return readFileSync(path).toString();
}