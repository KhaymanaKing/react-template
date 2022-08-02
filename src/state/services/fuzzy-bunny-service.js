import { client } from './client.js';

export async function addFamily(family) {
  const response = await client
    .from('bunnie_family')
    .insert(family)
    .single();

  return response;
}
