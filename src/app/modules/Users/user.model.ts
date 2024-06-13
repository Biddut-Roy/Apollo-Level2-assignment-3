// import { Schema, model } from 'mongoose';
// import { TUser, UserModel } from './user.interfaces';
// import bcrypt from 'bcrypt';

// const userSchema = new Schema<TUser>(
//   {
//     id: {
//       type: String,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       select: 0,
//     },
//     role: {
//       type: String,
//       enum: ['admin', 'user'],
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   },
// );

// userSchema.pre('save', async function (next) {
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   const user = this;
//   user.password = await bcrypt.hash(user.password, 12);
//   next();
// });

// // post save middleware // hooks
// userSchema.post('save', function (doc, next) {
//   doc.password = '';
//   next();
// });

// export const User = model<TUser, UserModel>('User', userSchema);
