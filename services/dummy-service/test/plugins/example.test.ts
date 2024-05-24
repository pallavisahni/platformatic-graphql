import { test, expect } from 'vitest';
import {getServer} from "../helper.js";


test('example decorator', async (t: any) => {
  const server = await getServer(t);

  expect(server.example).toBe('Welcome to Platformatic Dummy-service example');
});