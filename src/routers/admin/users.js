import express from 'express';
import {
  getUser,
  updateUser,
  deleteUser,
  getUserById
} from '../../controllers/admin/userController';
import { verifyTokenAndAuthorization, verifyTokenAndAdmin } from '../verifyToken';

let router = express.Router();

router.get("/", verifyTokenAndAdmin, getUser);
router.get("/:id", verifyTokenAndAdmin, getUserById);
router.put("/:id", verifyTokenAndAuthorization, updateUser);
router.delete("/:id", verifyTokenAndAdmin, deleteUser);

module.exports = router;