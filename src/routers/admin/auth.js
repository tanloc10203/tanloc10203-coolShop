import express from 'express';
import { login, register, getUserLogin } from '../../controllers/authController';
import AllCode from '../../models/AllCode';
import {verifyToken} from "../verifyToken";

let router = express.Router();

router.post('/login', login);
router.get('/login', verifyToken, getUserLogin);
router.post('/register', register);

router.post('/allcode', async (req, res) => {
  try {
    const { name, code, keyMap } = req.body;
    let data = AllCode(
      {
        name: name,
        code: code,
        keyMap: keyMap
      }
    )

    await data.save();

    if (data) {
      res.json({ data });
    } else {
      res.status(401).json("ERROR");
    }

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;