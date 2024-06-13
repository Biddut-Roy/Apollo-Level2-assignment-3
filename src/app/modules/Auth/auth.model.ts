import { Schema, model } from 'mongoose';
import { TCreateUser } from './auth.interface';
import bcrypt from 'bcrypt';

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: 0 },
    phone: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], required: true },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, 12);
  next();
});

// post save middleware // hooks
// UserSchema.post('save', function (doc, next) {
//   doc.password = '';
//   next();
// });

const User = model<TCreateUser>('User', UserSchema);

export default User;
