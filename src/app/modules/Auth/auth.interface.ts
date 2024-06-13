export type TLoginUser = {
  email: string;
  password: string;
};

export interface TCreateUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'admin' | 'user';
  address: string;
}
