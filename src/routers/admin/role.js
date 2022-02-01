import express from 'express';
import {
  getRole,
  createRole,
  updateRole,
  deleteRole
} from '../../controllers/admin/roleController';
import { verifyTokenAndAdmin } from "../verifyToken";

const router = express.Router();

router.get("/", verifyTokenAndAdmin, getRole);
router.post("/", verifyTokenAndAdmin, createRole);
router.put("/:id", verifyTokenAndAdmin, updateRole);
router.delete("/:id", verifyTokenAndAdmin, deleteRole);


module.exports = router;