import { api } from '../../../api/api';
import { IUserReqAdd } from '../../../interfaces/IUsers';

export async function apiGetUsers(page: number, limit: number,) {
  const users = await api.users.get(page, limit);
  return users.data;
}

export async function apiGetUser(id) {
  // @ts-ignore
  const users = await api.user.get(id);
  return users.data;
}

export async function apiAddUser(userValues: IUserReqAdd) {
  const user = await api.user.add(userValues);
  return user.data;
}

export async function apiUpdateUser(userValues: any) {
  const updatedUser = await api.user.update(userValues);
  return updatedUser && updatedUser.data;
}

export async function apiDeleteUser(id: number) {
  await api.user.delete(id);
  return id;
}
