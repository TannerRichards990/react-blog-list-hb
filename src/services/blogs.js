import { client, checkError } from './client';

export async function getBLogs() {
  const resp = await client.from('blogs').select('*');
  return checkError(resp);

}