import { atom } from 'recoil';

export const inputState = atom<string>({
  key: 'inputState',
  default: '',
});

export interface ILoginTypes {
  id: string;
  password: string;
}

export const loginState = atom<ILoginTypes>({
  key: 'login',
  default: { id: '', password: '' },
});

