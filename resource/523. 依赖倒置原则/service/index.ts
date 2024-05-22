import { Store } from '../store';

export async function getUsers(store: Store) {
  const data = await store.getData('users');
  if (data) {
    return JSON.parse(data);
  }
  return [];
}
