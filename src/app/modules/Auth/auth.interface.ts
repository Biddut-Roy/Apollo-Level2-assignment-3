import { Model } from 'mongoose';
import { USER_ROLE } from './auth.constant';

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

export interface UserModel extends Model<TCreateUser> {
  //instance methods for checking if the user exist
  isUserExistsByEmail(email: string): Promise<TCreateUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}

export type TUserRole = keyof typeof USER_ROLE;
