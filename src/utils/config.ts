export function envStringToBool(env: string): boolean {
  return process.env[env.toLocaleUpperCase()]?.toLocaleLowerCase() === 'true';
}