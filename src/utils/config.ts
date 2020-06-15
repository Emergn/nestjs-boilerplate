export function envStringToBool(env: string): boolean {
  return process.env[env.toUpperCase()]?.toLocaleLowerCase() === 'true';
}