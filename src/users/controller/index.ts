// // const Bcrypt = require('bcryptjs');
// // const jwt = require('jsonwebtoken');

// // const config = require('../../../config');
// // const schemes = require('../models/mongoose');
// import Bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import { generalConfig as config } from '../../config';
// import s

// module.exports.signUp = async (res: any, parameters: any) => {
//   const {
//     password,
//     passwordConfirmation,
//     email,
//     username,
//     name,
//     lastName,
//   } = parameters;

//   if (password === passwordConfirmation) {
//     const newUser = schemes.User({
//       password: Bcrypt.hashSync(password, 10),
//       email,
//       username,
//       name,
//       lastName,
//     });

//     try {
//       const savedUser = await newUser.save();

//       const token = jwt.sign(
//         { email, id: savedUser.id, username },
//         config.API_KEY_JWT,
//         { expiresIn: config.TOKEN_EXPIRES_IN }
//       );

//       return res.status(201).json({ token });
//     } catch (error) {
//       return res.status(400).json({
//         status: 400,
//         message: error,
//       });
//     }
//   }

//   return res.status(400).json({
//     status: 400,
//     message: 'Passwords are different, try again!!!',
//   });
// };