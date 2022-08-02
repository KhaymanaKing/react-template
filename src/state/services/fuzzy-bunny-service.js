import { client } from './client.js';

export async function addFamily(family) {
  const response = await client
    .from('bunnie_family')
    .insert(family)
    .single();

  return response;
}

export async function getFamiliesWithBunnies() {
  const response = await client.from('bunnie_family').select(`
  id,
  familyName,
  rabbits: rabbits(
    id,
    familyId:family_id,
    name
  )`
  );
  return response;
}

export async function removeFamily(id) {
  const response = await client
    .from('bunnie_family')
    .delete()
    .eq('id', id)
    .single();

  return response;
}

export async function updateFamily(family) {
  const response = await client
    .from('bunnie_family')
    .update(family)
    .eq('id', family.id)
    .single();

  return response;
}
