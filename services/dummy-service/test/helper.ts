import { join } from 'node:path';
import { readFile } from 'node:fs/promises';
import { buildServer } from '@platformatic/service';

export async function getServer(t:any) {
  // Reading configuration file
  const configPath = join(__dirname, '..','platformatic.json');
  const config = JSON.parse(await readFile(configPath, 'utf8'));

  // Customizing configuration
  config.server = config.server || {};
  config.server.logger = config.server.logger || {};
  config.server.logger.level = 'warn';
  config.watch = false;

  // Building and starting the server
  const server = await buildServer(config);

  return server;
}
