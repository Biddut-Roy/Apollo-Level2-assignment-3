import { Schema, model } from 'mongoose';
import { TCreateUser, UserModel } from './auth.interface';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: 0 },
  phone: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], required: true },
  address: { type: String, required: true },
});

UserSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  user.password = await bcrypt.hash(user.password, 12);
  next();
});

// select('+password') use this method to  get password
// userSchema.statics.isUserExistsByEmail = async function (email: string) {
//   return await User.findOne({ email: email }).select('+password');
// };

UserSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

const User = model<TCreateUser, UserModel>('User', UserSchema);

export default User;
