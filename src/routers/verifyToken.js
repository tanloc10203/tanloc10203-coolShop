import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from "../models/User";
import CryptoJS from "crypto-js";

dotenv.config();

const KEY_JWT = process.env.KEY_JWT;
const JTI_SER = process.env.JTI_SER;

let verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    // console.log("check header", authHeader);
    if (authHeader) {
      // {`Bearer ${your token}`}
      const token = authHeader.split(" ")[1];
      jwt.verify(token, KEY_JWT, (err, user) => {
        if (err) res.status(403).json({ error: 2, message: "Token is not valid..." });
        req.user = user;
        next();
      });
    } else
      return res.status(401).json({ error: 1, message: 'You are not authenticated...' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: -1, message: "Error from server..." });
  }
}

let verifyTokenAndAuthorization = (req, res, next) => {
  try {
    verifyToken(req, res, async () => {
      if (req.user) {
        const { jti } = req.user;

        const hashJti = CryptoJS.AES.decrypt(jti, JTI_SER).toString(CryptoJS.enc.Utf8);

        const user = await User.findOne({ email: hashJti }).populate("role_id");

        const { _id, role_id: { code } } = user;
        if (_id === req.query.id || code === 'R1') next();
        else res.status(403).json({ error: 1, message: "You are not allowed to do that..." });
      }
    });
  } catch (error) {
    res.status(500).json({ error: -1, message: "Error from server..." });
  }
}

let verifyTokenAndAdmin = (req, res, next) => {
  try {
    verifyToken(req, res, async () => {
      if (req.user) {
        const { jti } = req.user;

        const hashJti = CryptoJS.AES.decrypt(jti, JTI_SER).toString(CryptoJS.enc.Utf8);

        const user = await User.findOne({ email: hashJti }).populate("role_id");

        const { role_id: { code } } = user;

        if (code === 'R1') next();
        else res.status(403).json({ error: 1, message: "You are not allowed to do that..."});
      }
    });
  } catch (error) {
    res.status(500).json({ error: -1, message: "Error from server..." });
  }
}

let verifyTokenAndAdminAndStaff = (req, res, next) => {
  try {
    verifyToken(req, res, async () => {
      if (req.user) {
        const { jti } = req.user;

        const hashJti = CryptoJS.AES.decrypt(jti, JTI_SER).toString(CryptoJS.enc.Utf8);

        const user = await User.findOne({ email: hashJti }).populate("role_id");

        const { role_id: { code } } = user;

        if (code === 'R1' || code === 'R2') next();
        else res.status(403).json({ error: 1, message: "You are not allowed to do that..." });
      }
    });
  } catch (error) {
    res.status(500).json({ error: -1, message: "Error from server..." });
  }
}

module.exports = {
  verifyTokenAndAuthorization,
  verifyTokenAndAdminAndStaff,
  verifyTokenAndAdmin,
  verifyToken,
};