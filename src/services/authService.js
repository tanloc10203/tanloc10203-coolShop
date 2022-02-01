import CryptoJS from "crypto-js";
import dotenv from 'dotenv';
import jwt from "jsonwebtoken";
import AllCode from "../models/AllCode";
import User from "../models/User";

dotenv.config();

const PASS_SER = process.env.PASS_SER;
const KEY_JWT = process.env.KEY_JWT;
const JTI_SER = process.env.JTI_SER;

let handleRegister = data => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data.password && data.fullname && data.email) {
        // console.log(data)
        let user = await User.findOne({ email: data.email });

        user && resolve({ error: 2, message: "User is exist." });

        const { role_id: codeInput, ...dataInputs } = data;

        let role = await AllCode.findOne({ code: codeInput });

        data.password = CryptoJS.AES.encrypt(data.password, PASS_SER).toString();

        const { _id } = role._doc;
        // console.log("check role", _id);

        if (role) {
          const newUser = new User({
            email: data.email,
            password: data.password,
            fullname: data.fullname,
            role_id: _id,
            delete: false,
            ...dataInputs,
          });
          // console.log(newUser)
          await newUser.save();
        }

        resolve({ error: 0, message: "Register Success!!!" });
      } else {
        resolve({ error: 1, message: "Missing parameters!" });
      }
    } catch (error) {
      reject(error);
    }
  });
}

function getSub() {
  let jti = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 16; i++) {
    jti += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return jti;
}

function createAccessToken(email) {
  const jti = CryptoJS.AES.encrypt(email, JTI_SER).toString();
  return jwt.sign({
    iss: process.env.ISS,
    aud: process.env.AUD,
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    sub: getSub(),
    jti, // unique identifier for the token
    alg: 'HS256'
  }, KEY_JWT);
}

let handleLogin = (email, passwordInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (email || passwordInput) {
        let user = await User.findOne({ email: email });
        if (user) {
          const hashPassword = CryptoJS.AES.decrypt(user.password, PASS_SER).toString(CryptoJS.enc.Utf8);

          passwordInput !== hashPassword && resolve({ error: 3, message: "Wrong password!!!" });

          resolve({ error: 0, message: "login Success", data: { accessToken: createAccessToken(user.email) } });
        } else
          resolve({ error: 2, message: "Wrong email!" });
      } else {
        resolve({ error: 1, message: "Missing email or password!" });
      }
    } catch (error) {
      reject(error);
    }
  });
}

const handleGetUserLogin = user => {
  return new Promise(async (resolve, reject) => {
    try {
      const { jti } = user;
      if (jti && jti !== undefined) {
        const hashJti = CryptoJS.AES.decrypt(jti, JTI_SER).toString(CryptoJS.enc.Utf8);

        const user = await User.findOne({ email: hashJti }).populate("role_id");

        if (user) {
          const { password, ...others } = user._doc;
          resolve({ error: 0, message: 'get user succesfully!', data: others });
        } else {
          resolve({ error: 4, message: 'get user fail!' });
        }
      } else {
        resolve({ error: 3, message: 'Missing jti' });
      }
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  handleLogin,
  handleRegister,
  handleGetUserLogin
};