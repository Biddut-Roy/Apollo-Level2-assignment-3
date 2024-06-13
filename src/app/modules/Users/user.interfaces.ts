/* eslint-disable no-unused-vars */
// import { Model } from 'mongoose';
// import { USER_ROLE } from './user.constant';

export interface TUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'admin' | 'user';
  address: string;
}

// export interface UserModel extends Model<TUser> {
//   //instance methods for checking if the user exist
//   isUserExistsByCustomId(id: string): Promise<TUser>;
//   //instance methods for checking if passwords are matched
// }

// export type TUserRole = keyof typeof USER_ROLE;
